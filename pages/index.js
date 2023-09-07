import Link from 'next/link'
import MyHead from '../components/MyHead'
import NavBar from '../components/Navbar'
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <MyHead
        title="Vasselimp"
        description="Vasselimp serviços de limpeza!"
      />
      <NavBar/>
              <section
                class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
              >
                <div
                  class="absolute inset-0 bg-black/75"
                ></div>

                <div
                  class="relative mx-auto max-w-screen-xl px-4 py-52 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                  <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Serviços de limpeza

                      <strong class="block font-extrabold text-blue-500">
                      Vasselimp.
                      </strong>
                    </h1>

                    <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                      tenetur fuga ducimus numquam ea!
                    </p>

                    <div class="mt-8 flex flex-wrap text-center">
                      <a
                        href="https://api.whatsapp.com/send?phone=554788889999"
                        class="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      >
                        Fale conosco!
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section>
              <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">
              
                      <p class="mt-8 text-4xl font-medium tracking-tighter text-black text-blue-500">
                        Nossos serviços
                      </p>
                      <p class="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                      </p>
                    </div>
                </div>
                <div class="relative items-center w-full px-5 py-4 mx-auto md:px-12 lg:px-20 max-w-7xl">
                  <div class="grid w-full grid-cols-1 mx-auto lg:grid-cols-3">
                    <div class="max-w-md p-6 mx-auto">
                      <div class="gap-3 lg:inline-flex lg:items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                          ❖
                        </div>
                        <p class="mt-4 text-lg font-medium leading-6 text-blue-500 lg:mt-0">
                          Excelência e qualidade
                        </p>
                      </div>
                      <p class="mt-3 text-base text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                      </p>
                    </div>
                    <div class="max-w-md p-6 mx-auto">
                      <div class="gap-3 lg:inline-flex lg:items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                          ❖
                        </div>
                        <p class="mt-4 text-lg font-medium leading-6 text-blue-500 lg:mt-0">
                          Agilidade no processo
                        </p>
                      </div>
                      <p class="mt-3 text-base text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                      </p>
                    </div>
                    <div class="max-w-md p-6 mx-auto">
                      <div class="gap-3 lg:inline-flex lg:items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                          ❖
                        </div>
                        <p class="mt-4 text-lg font-medium leading-6 text-blue-500 lg:mt-0">
                          Tecnologia de Ponta
                        </p>
                      </div>
                      <p class="mt-3 text-base text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              
        <Link href="https://api.whatsapp.com/send?phone=554788889999" passHref>
        <button onclick="buttonHandler()" title="WhatsApp"
        class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"> <img src={"/images/whatss.png"} /></button>
        </Link>
    </>
  )
}
