const ChainId = {
  MAINNET: 128,
  TESTNET: 3,
};
const { MAINNET, TESTNET } = ChainId;
const web3 = require('web3');

export class Token {
  constructor(chainId, address, decimals, symbol, name, projectLink) {
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.chainId = chainId;
    this.address = web3.utils.toChecksumAddress(address);
    this.projectLink = projectLink;
  }

  equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }
}
export const mainnetTokens = {
  wht: new Token(MAINNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'Wrapped HT', 'https://www.hecoinfo.com/'),
  ht: new Token(MAINNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'HT', 'HT', 'https://www.hecoinfo.com/'),
};

export const testnetTokens = {
  ht: new Token(TESTNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'Wrapped HT', 'https://www.hecoinfo.com/'),
  wht: new Token(TESTNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'Wrapped HT', 'https://www.hecoinfo.com/'),
  usdt: new Token(TESTNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'USDT', 'USDT', 'https://www.hecoinfo.com/'),
};

const tokens = () => {
  const chainId = 128;

  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] };
    }, {});
  }

  return mainnetTokens;
};

export function serializeToken(token) {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
    projectLink: token.projectLink,
  };
}

export const serializeTokens = () => {
  const unserializedTokens = tokens();
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) };
  }, {});

  return serializedTokens;
};

export default tokens();
