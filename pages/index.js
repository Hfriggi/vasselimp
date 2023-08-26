import Link from 'next/link'
import MyHead from '../components/MyHead'
import NavBar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <MyHead
        title="Vasselimp"
        description="Vasselimp serviços de limpeza!"
      />
      <NavBar/>
     

    </>
  )
}
