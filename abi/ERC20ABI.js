// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
export const daiAbi = [
  // Some details about the token
  "function name() view returns (string)",

  "function symbol() view returns (string)",
  // Get the account balance
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount) returns (bool)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)",
];
