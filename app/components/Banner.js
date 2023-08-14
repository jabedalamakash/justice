import Image from 'next/image';
import React from 'react';
import {EB_Garamond } from 'next/font/google'

const garabond = EB_Garamond({
     subsets: ['latin']
})


const Banner = () => {
    return (
    <main>
        <div className='w-full sm:w-[80%] mb-40  relative mx-auto '>
            
            <div className='mx-auto '>
                 <Image src={"/images/banner.png"}
                 width={1170} 
                 height={550} 
                 alt='banner'
                 className='bg-cover absolute h-[100%] rounded-lg w-[100%]  px-5 sm:px-0  mx-auto  bg-center'/>

                 <div className=' sm:p-0 p-10 text-center sm:py-60  relative z-10'>
                 
                    <h1  className={`${garabond.className} w-full sm:px-20 mx-auto xl:w-[50%] mb-5 text-center sm:mb-10 text-white sm:font-extrabold text-5xl sm:text-7xl`}>We Provide Effective Legal Solutions</h1>
                    <p className='text-white w-full text-center  xl:w-[50%] sm:px-20 mb-5 mx-auto sm:mb-10 text-xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <div className='inline-flex w-[40%] px-20 md:w-[50%] items-center justify-center mx-auto'>
                        <input type="text" defaultChecked={true} placeholder='Search your services'  className='bg-white sm:w-[70%]  text-left rounded px-5 py-3 sm:px-20 sm:py-5 mr-4' />
                            <button className='bg-[#B68C5A] text-white  rounded px-5 py-3 sm:py-5'>Search</button>
                        </div>
                 </div>
                </div>
        </div>
        </main>
    );
};

export default Banner;

