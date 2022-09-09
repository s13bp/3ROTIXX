import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Main from '../components/Home'

const style = {
  wrapper: 'flex h-screen items-center justify-center',
  connectWalletButton: 'rounded-lg border border-black px-5 py-5 transition-all hover:bg-black hover:text-white ',
}

export default function Home() {

  const connectWithMetamask = useMetamask()
  const address = useAddress()

  console.log(address)

  const Auth = () => {
    return(
    <div className={style.wrapper}>
      <button 
        onClick={connectWithMetamask} 
        className={style.connectWalletButton}
      >


        Connect Metamask
        
      </button>
    </div>

    )
  }

  return <>{address ? <Main/> : Auth() }</>
}
