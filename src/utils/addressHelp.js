// import addresses from '@/config/constants/contracts.js';
const addresses = {
  jackRouter: '0x0f1c2D1FDD202768A4bDa7A38EB0377BD58d278E',
  jackFactory: '0xb0b670fc1F7724119963018DB0BfA86aDb22d941',
  weth: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
};

export const getAddress = address => {
  return address;
};

export const getJackFactoryAddress = () => {
  return getAddress(addresses.jackFactory);
};

export const getJackRouterAddress = () => {
  return getAddress(addresses.jackRouter);
};

export const getWethAddress = () => {
  console.log(addresses.weth, 'addresses.weth');
  return getAddress(addresses.weth);
};
