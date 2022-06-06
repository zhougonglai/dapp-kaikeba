import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ABI from '../../artifacts/contracts/ClassToken.sol/ClassToken.json';
import { ethers } from 'ethers';


export default function ERC20Transfer({ contract, account }) {
  const { handleSubmit, register, formState: { errors, isSubmitting },} = useForm();
  const [ balance, setBalance ] = useState(0);
  const [ amount, setAmount ] = useState(100);

  async function onSubmit(values) {
    console.log(values)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(contract, ABI.abi, provider.getSigner());

    const tx = await erc20.transfer(values.to, ethers.utils.parseEther(values.amount))
    const receipt = await tx.wait()
    console.log(receipt, tx)


    return true;
  }

  useEffect(() => {
    if(!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(contract, ABI.abi, provider.getSigner());

    provider.getCode(contract).then(result => {
      if(result === '0x') return

      erc20.balanceOf(account).then(result => {
        setBalance(ethers.utils.formatEther(result))
      }).catch(err => console.log(err))

    })
  }, [account])

  const increment = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(contract, ABI.abi, provider.getSigner());

    const result = await erc20.increment(10)
    console.log(result)
  }


  return (
    <Box my={5} p={5} shadow="base">
      <Text>余额: {balance}</Text>
      <Button onClick={increment}>+</Button>
      <form onSubmit={handleSubmit(onSubmit)} mt={5}>
        <fieldset>
          <FormControl isInvalid={errors.amount}>
            <FormLabel htmlFor="amount">amount:</FormLabel>
            <NumberInput min={0} defaultValue={10}>
              <NumberInputField id="amount" {
                ...register('amount', {
                  required: '需要输入转账金额'
                })
              }/>
            </NumberInput>
          </FormControl>
          <FormErrorMessage>
            {errors.amount && errors.amount.message}
          </FormErrorMessage>
          <FormControl mt="5">
            <FormLabel htmlFor="to">to:</FormLabel>
            <Input id="to" {
              ...register('to', {
                required: '需要填写转账地址',
                minLength: { value: 10, message: '错误的合约地址'}
              })
            }/>
          </FormControl>
          <FormErrorMessage>
            {errors.to && errors.to.message}
          </FormErrorMessage>
        </fieldset>
        <Button mt={4} isLoading={isSubmitting} type="submit">
          转账
        </Button>
      </form>
    </Box>
  )
}
