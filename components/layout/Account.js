import { formatEther } from '@ethersproject/units'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const useBalances = (provider, accounts) => {
  const [balances, setBalances] = useState();
  useEffect(() => {
    if(provider && accounts?.length) {
      let state = false;
      Promise.all(accounts.map(account => provider.getBalance(account))).then(balances => {
        if(state) return;
        setBalances(balances);
      })

      return () => {
        state = true;
        setBalances(undefined);
      }
    }
  }, [ provider, accounts ])

  return balances;
}


export function Account({ provider, accounts }) {
  const balances = useBalances(provider, accounts)
  if (accounts === undefined) return null

  return (
    <Box shadow border="1px" borderColor="gray.300" rounded={"lg"} p={4}>
      {accounts.length ? accounts.map((account, i) =>
      <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {account}
        {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
      </ul>) : '无'}
    </Box>
  )

}



