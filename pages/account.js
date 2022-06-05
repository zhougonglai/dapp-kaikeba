import { Account } from '../components/layout/Account';
import { useEffect } from 'react';
import { hooks, metaMask } from '../hooks/metamask';

const { useAccount, useAccounts, useProvider } = hooks;

export default function account() {
  const account = useAccount();
  const accounts = useAccounts();
  const provider = useProvider();

  useEffect(() => {
    if(accounts?.length){
// const avatar = await provider.getAvatar(account)
      // console.log(avatar)
      console.log(provider)
    }
  }, [accounts])

  return (
    <div>
      <Account accounts={accounts} provider={provider} />
    </div>
  )
}
