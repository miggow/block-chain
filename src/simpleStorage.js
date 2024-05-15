import web3 from './web3';
import SimpleStorage from './build/SimpleStorage.json';

const instance = new web3.eth.Contract(
  SimpleStorage.abi,
  '0x123...' // replace with your contract's address
);

export default instance;