
import './firstSection.scss'
import logo from '../../../utils/imgs/A2.png'
import me from '../../../utils/imgs/me2.JPG'
import PIC from '../../../utils/imgs/AMINE2-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export const FirstSection = () => {
    return (
        <>
            {/* NAVBAR */}
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <img src={logo} class="h-[10vh]" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-white bg-primary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-primary-color dark:hover:bg-primary-color dark:focus:ring-red-800 px-10 py-3 text-md font-normal">Hire Me !</button>
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 md:p-0 text-white bg-primary-color rounded md:bg-transparent md:text-primary-color md:dark:text-white font-extralight text-xl">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-color md:dark:hover:text-primary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-extralight text-xl">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-color md:dark:hover:text-primary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-extralight text-xl">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-color md:dark:hover:text-primary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-extralight text-xl">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* NAVBAR */}


            {/* HeroSection */}
            <header class="header bg-second-color">
                <div class="left-content" data-aos="fade-right">
                    <p class="stay-home text-gray-400">Amine Bakrim</p>
                    <h1 className='text-white xl:text-8xl text-4xl'>Front End Web Developer.</h1>
                    <p class="para">
                    </p>
                    <button 
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                    className='mt-4 px-6'>Hire Me :) </button>
                </div>

                <img src={PIC} className='xl:w-[35vw] w-[60vw] rounded-full px-8 xl:block hidden' alt="" data-aos="fade-left"/>

            
            
            
            </header>
            {/* HeroSection */}

            {/* <div className="carddd flex justify-center items-center w-[15vw] h-[30vh] border border-gray-400 rounded-lg">
                    <p>HELLO</p>
            </div> */}

        </>
    );
}
