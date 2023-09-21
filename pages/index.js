import Link from 'next/link'
import MyHead from '../components/MyHead'
import NavBar from '../components/Navbar'
import { Carousel } from 'flowbite'

export default function Home() {
  return (
    <>
      <MyHead
        title="Vasselimp"
        description="Vasselimp serviços de limpeza!"
      />
      <NavBar/>
              <section id='hero'
                class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
              >
                <div
                  class="absolute inset-0 bg-black/75"
                ></div>

                <div
                  class="relative mx-auto max-w-screen-xl px-4 py-52 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
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

                    <div class="mt-8 flex-wrap text-center content-center">
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
              <section id='servicos'>
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
              <div class="justify-center w-full text-center lg:p-10 max-auto" id='resultados'>
                    <div class="justify-center w-full mx-auto">
              
                      <p class="mt-8 text-4xl font-medium tracking-tighter text-black text-blue-500">
                        Nossos Resultados
                      </p>
                      <p class="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
                      Abaixo é possível verificar nossos serviços
                      </p>
                    </div>
                  </div>          
    <div class="max-w-2xl mx-auto">
    <div id="default-carousel" class="relative" data-carousel="static">
        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <span
                    class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First
                    Slide</span>
                <img src="/images/sofa2.jpeg"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/images/teto2.jpeg"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/images/sofa3.jpeg"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
        </div>
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
        </div>
        <button type="button"
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>

<section class="flex items-center bg-gray xl:h-screen font-poppins " id='sobre'>
        <div class="justify-center flex-1 max-w-6xl py-2 mx-auto lg:py-6 md:px-6">
            <div class="px-4 mb-10 md:text-center md:mb-20">
                <p class="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
                    Sobre nós
                </p>
                <h2 class="pb-2 text-2xl font-bold text-blue-500 md:text-4xl dark:text-gray-300">
                    E o que fazemos
                </h2>
                <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                    <div class="flex-1 h-2 bg-blue-200">
                    </div>
                    <div class="flex-1 h-2 bg-blue-400">
                    </div>
                    <div class="flex-1 h-2 bg-blue-300">
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src="/images/teto2.jpeg" alt=""
                        class="relative z-40 object-cover w-full h-96"/>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <h2
                        class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-400 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                        Promovemos facilidade e agilidade
                    </h2>
                    <p class="mb-4 text-base leading-7 text-gray-400 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <ul class="mb-10">
                        <li class="flex items-center mb-4 text-base text-gray-400 dark:text-gray-400">
                            <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur domino act
                        </li>
                        <li class="flex items-center mb-4 text-base text-gray-400 dark:text-gray-400">
                            <span class="mr-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            eli orem ipsum dolor sit amet, consectetur advice
                        </li>
                        <li class="flex items-center mb-4 text-base text-gray-400 dark:text-gray-400">
                            <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Iron man ipsum dolor sit amet, consectetur adipiscing
                        </li>
                    </ul>
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
