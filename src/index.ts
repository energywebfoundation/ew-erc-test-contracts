import Erc20TestTokenJSON from '../contract-build/Erc20TestToken.json';
import Erc721TestReceiverJSON from '../contract-build/TestReceiver.json';
import { deployERC20TestToken, deployERC721TestReceiver } from './deployment/deploy';

export { Erc20TestTokenJSON, Erc721TestReceiverJSON, deployERC20TestToken, deployERC721TestReceiver };