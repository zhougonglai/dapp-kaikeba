import { Account } from '../components/layout/Account';
import { useEffect } from 'react';
import { hooks, metaMask } from '../hooks/metamask';

const { useAccount, useAccounts, useProvider } = hooks;

export default function account() {
  const account = useAccount();
  const accounts = useAccounts();
  const provider = useProvider();

  useEffect(() => {
    console.log(account);
  }, [account])

  return (
    <div>
      <Account accounts={accounts} provider={provider} />
    </div>
  )
}
