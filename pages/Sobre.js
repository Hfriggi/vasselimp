import React from 'react'
import styles from '../styles/apply.module.css'
import MyHead from '../components/MyHead'
import NavBar from '../components/Navbar'

const Apply = () => {
  return (
    <>
      <MyHead
        title="Sobre nós"
        description="Bem vinco à rede Comuns!"
      />
      <NavBar/>
      <section className=''>
        <div  className={"main min-h-screen flex justify-center items-center bg-black"}>
          <div className="content form">
              <h1 className="text-2xl font-bold text-white text-center pb-5">Sobre nós</h1>
              <div className="">
                <h1 className="text-2xl font-bold text-white text-center pb-5">Vasselimp serviços de limpeza</h1>
              </div>
          </div>
          <button onclick="buttonHandler()" title="WhatsApp"
        class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#9993;</button>
        </div>
      </section>
    </>
  )
}

export default Apply