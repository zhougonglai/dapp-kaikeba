import { Box, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ABI from '../../artifacts/contracts/ClassToken.sol/ClassToken.json';


export default function ERC20Read({ contract, account }) {

  const [ name, setName ] = useState('');
  const [ totalSupply, setTotalSupply ] = useState('');
  const [ symbol, setSymbol ] = useState('');
  const [ balance, setBalance ] = useState(0);
  const [ decimals, setDecimals ] = useState('');

  useEffect(() => {
    if(!window.ethereum) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(contract, ABI.abi, provider);

    provider.getCode(contract).then(result => {
      if(result === '0x') return

      erc20.name().then(result => {
        setName(result)
      }).catch(err => console.log(err))

      erc20.symbol().then(result => {
        setSymbol(result)
      }).catch(err => console.log(err))

      erc20.totalSupply().then(result => {
        setTotalSupply(ethers.utils.formatEther(result))
      }).catch(err => console.log(err))

      erc20.balanceOf(account).then(result => {
        setBalance(ethers.utils.formatEther(result))
      }).catch(err => console.log(err))

      erc20.decimals().then(result => {
        setDecimals(ethers.utils.formatEther(result))
      }).catch(err => console.log(err))
    })


  }, [account])

  return (
    <Box my={5} p={5} shadow="base" >
      <Text>合约名字: {name}</Text>
      <Text>小数:{decimals}</Text>
      <Text>总数:{totalSupply}</Text>
      <Text>符号:{symbol}</Text>
      <Text>账户余额:{balance}</Text>
    </Box>
  )
}
