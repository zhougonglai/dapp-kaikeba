import { Account } from '../components/layout/Account';
import { useEffect } from 'react';
import { hooks, metaMask } from '../hooks/metamask';

const { useAccount, useAccounts, useProvider } = hooks;

export default function AccountPage() {
  const account = useAccount();
  const accounts = useAccounts();
  const provider = useProvider();

  useEffect(() => {
    if(accounts?.length){
      console.log(provider)
    }
  }, [accounts])

  return (
    <div>
      <Account accounts={accounts} provider={provider} />
    </div>
  )
}
