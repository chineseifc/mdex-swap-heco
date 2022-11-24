const base = [
  {
    "name": "WHT Token",
    "symbol": "WHT",
    "address": "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    "chainId": 128,
    "decimals": 18,
    "logoURI": "https://user-images.githubusercontent.com/97346630/203060956-c3497b2b-9cc6-460a-a727-e538af1ab7bc.png"
  },
  {
    "name": "Come Back Heco",
    "symbol": "CBH",
    "address": "0x4327ee80e20b327675714c2f6e2ab9a43b5e0d46",
    "chainId": 128,
    "decimals": 9,
    "logoURI": "https://raw.githubusercontent.com/chineseifc/logo/main/cbh.gif"
  },
  {
    "name": " USDT",
    "symbol": "USDT",
    "address": "0xa71edc38d189767582c38a3145b5873052c3e47a",
    "chainId": 128,
    "decimals": 18,
    "logoURI": "https://s1.ax1x.com/2022/11/22/z3ET0O.png"
  },
  {
    "name": " PIL",
    "symbol": "PIL",
    "address": "0x63c93714d4f7830aaa2d63bb7004da4edd1e24b0",
    "chainId": 128,
    "decimals": 18,
    "logoURI": "https://s1.ax1x.com/2022/11/24/zJ8akj.png"
  },
  {
    "name": " PiMoon",
    "symbol": "PiMoon",
    "address": "0xe1c91942e366dd875d0ba2729fd89569fdd552db",
    "chainId": 128,
    "decimals": 18,
    "logoURI": "https://s1.ax1x.com/2022/11/24/zJ8whn.png"
  }
];

export function getAllPair(curA, curB) {
  let lpPair = [];
  for (let i = 0; i < base.length; i++) {
    if (base[i].address != curA.address) {
      lpPair.push({ toCur: base[i], fromCur: curA });
    }

    if (base[i].address != curB.address) {
      lpPair.push({ toCur: curB, fromCur: base[i] });
    }
  }
  return lpPair;
}
