import { ETH, HT } from '@/config/constants/ht';

export const isHt = token => {
  if (token.address.toLowerCase() === HT.address.toLowerCase() && token.name.toLowerCase() === 'ht') {
    return true;
  }

  return false;
};

export const isEth = token => {
  if (token.address.toLowerCase() === ETH.address.toLowerCase() && token.name.toLowerCase() === 'eth') {
    return true;
  }

  return false;
};
