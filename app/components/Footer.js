import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <main className='w-full mt-20 mx-auto bg-[#111111]'>
            <div className='max-w-screen-xl  justify-center mx-auto sm:justify-between py-10 flex flex-col sm:flex-row text-white'>
                <div className='w-full sm:w-[20%]  text-center sm:text-left mb-5 sm:mb-0 sm:mr-10'>
                    <Image
                    src={"/images/logo.png"}
                    width={100}
                    height={100}
                    alt="logo of Justice"
                    className='mb-8 mx-auto sm:mx-0'/>
                    <p className='w-[75%] sm:w-full mx-auto sm:mx-0 sm:pr-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque impedit optio culpa error sequi nesciunt dolore. Fugit sed omnis odit illum pariatur ex delectus culpa.</p>
                </div>

                <div className='flex flex-col text-center sm:text-left w-full sm:w-[10%] mb-5 sm:mb-0 sm:mr-10'>
                    <h4 className='mb-8 font-bold text-xl'>Useful Links</h4>
                    <Link href="/" className='mb-2'>Home</Link>
                    <Link href="/services" className='mb-2'>Services  &#10095;</Link>
                    <Link href="/cases" className='mb-2'>Cases  &#10095;</Link>
                    <Link href="/blog" className='mb-2'>Blog  &#10095;</Link>
                    <Link href="/contactus" className='mb-2'>Contact Us &#10095;</Link>
                   

                </div>

                <div className='w-full sm:w-[20%] text-center sm:text-left mb-5 sm:mb-0 sm:mr-10'>
                    <h4 className='mb-8 font-bold text-xl  '>Contact Now</h4>
                    <p className='mb-2 w-[50%] sm:w-full mx-auto sm:mx-0'>555 4th 5t NW, WashingtonDC 20530, United States</p>
                    <p className='mb-2'>+88 01750 000 000<br/>+88 01750 000 000</p>
                    <p className='mb-2'>info@justice.com <br/> info@justice.com</p>

                </div>

                <div className='w-full mx-auto text-center sm:text-left sm:w-[20%]'>
                    <h4 className='mb-8 font-bold text-xl'>Subscribe</h4>
                    <p className='mb-5 w-[50%]  text-xl mx-auto sm:w-full '>Subscribe for our latest & Articles. We Wont Give You Spam Mails</p>
                    <div className='inline-flex px-20 sm:px-0 text-center sm:text-left'>
                        <input type="text" placeholder='Email Address' className='px-5 rounded py-3 ' />
                        <button className='px-5 py-3 rounded bg-[#B68C5A]'>
                            <Image
                             src={"/images/Vector.png"}
                             height={100}
                             width={100}
                             alt="button"
                             className='text-white w-5 h-5'/>
                        </button>
                    </div>
                </div>
            
            </div>
        </main>
        
    );
};

export default Footer;

