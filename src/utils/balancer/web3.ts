import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { ErrorCode } from '@ethersproject/logger';
import { logFailedTx } from '@/utils/logging';

import { getGasPrice } from './gasPrices';

const ENV = process.env.VUE_APP_ENV || 'development';
// only disable if set to "false"
const USE_BLOCKNATIVE_GAS_PLATFORM =
  process.env.VUE_APP_USE_BLOCKNATIVE_GAS_PLATFORM === 'false' ? false : true;
const GAS_LIMIT_BUFFER = 0.05;

export async function sendTransaction(
  web3: Web3Provider,
  contractAddress: string,
  abi: any[],
  action: string,
  params: any[],
  overrides: Record<string, any> = {}
) {
  console.log('Sending transaction');
  console.log('Contract', contractAddress);
  console.log('Action', `"${action}"`);
  console.log('Params', params);
  const signer = web3.getSigner();
  const contract = new Contract(contractAddress, abi, web3);
  const contractWithSigner = contract.connect(signer);

  if (USE_BLOCKNATIVE_GAS_PLATFORM && overrides.gasPrice == null) {
    const gasPrice = await getGasPrice();
    if (gasPrice != null) {
      overrides.gasPrice = gasPrice;
    }
  }

  try {
    // Gas estimation
    const gasLimitNumber = await contractWithSigner.estimateGas[action](
      ...params,
      overrides
    );
    const gasLimit = gasLimitNumber.toNumber();
    overrides.gasLimit = Math.floor(gasLimit * (1 + GAS_LIMIT_BUFFER));

    return await contractWithSigner[action](...params, overrides);
  } catch (e) {
    if (e.code === ErrorCode.UNPREDICTABLE_GAS_LIMIT && ENV !== 'development') {
      const network = (await web3.getNetwork()).name;
      const sender = await web3.getSigner().getAddress();
      logFailedTx(network, sender, contract, action, params, overrides);
    }
    return Promise.reject(e);
  }
}

export async function callStatic(
  web3,
  contractAddress: string,
  abi: any[],
  action: string,
  params: any[],
  overrides = {}
) {
  console.log('Sending transaction');
  console.log('Contract', contractAddress);
  console.log('Action', `"${action}"`);
  console.log('Params', params);
  const signer = web3.getSigner();
  const contract = new Contract(contractAddress, abi, web3);
  const contractWithSigner = contract.connect(signer);
  return await contractWithSigner.callStatic[action](...params, overrides);
}

export async function call(provider, abi: any[], call: any[], options?) {
  const contract = new Contract(call[0], abi, provider);
  try {
    const params = call[2] || [];
    return await contract[call[1]](...params, options || {});
  } catch (e) {
    return Promise.reject(e);
  }
}
