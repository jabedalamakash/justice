import React from 'react';
import Image from 'next/image';
import {EB_Garamond } from 'next/font/google'

const garabond = EB_Garamond({
     subsets: ['latin']
})

const Contact = () => {
    return (
        <section>
        <main className='w-full sm:w-[80%] mx-auto px-20 sm:px-0 mb-40'>
             <div>
                
                <h1 className={`${garabond.className} font-bold mb-5 text-center  text-5xl`}>Contact With Us</h1>
                <p className='text-center text-xl sm:w-[50%] mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour.</p>
               

        <div className='flex justify-center flex-col sm:flex-row mt-20'>
                   

        <div className='w-full sm:w-1/2 grid grid-cols-1 mb-10 sm:mb-0 mx-auto sm:grid-cols-2 sm:mr-10'>

                <div className=' text-center border-t-2 sm:border-t-0  border-b-2 sm:border-r-2 bg-[#f3f3f3] p-20'>
                    <Image
                    src={"/images/address.png"}
                    height={100}
                    width={100}
                    alt="address"
                    className='mx-auto mb-5 w-16'
                    />
                    <h4 className={`${garabond.className} font-bold mb-5  text-5xl`}>Call Us</h4>
                    <p>A108 Adam Street,New York, NY 535022</p>
                
                </div>

                <div className=' text-center  border-b-2 bg-[#f3f3f3] p-20'>
                    <Image
                    src={"/images/call.png"}
                    height={100}
                    width={100}
                    alt="call"
                    className='mx-auto mb-5 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-5  text-5xl`}>Address</h4>
                    <p>+88 01750 00 00 00 <br/> +88 01750 00 00 00</p>
                
                </div>

                <div className=' text-center border-b-2 sm:border-b-0  sm:border-r-2 bg-[#f3f3f3] p-20'>
                    <Image
                    src={"/images/email.png"}
                    height={100}
                    width={100}
                    alt="email"
                    className='mx-auto mb-5 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-5  text-5xl`}>Email Us</h4>
                    <p>info@gmail.com <br/>info@gmail.com</p>
                
                </div>

                <div className=' text-center border-b-2 sm:border-b-0 bg-[#f3f3f3] p-20'>
                    <Image
                    src={"/images/time.png"}
                    height={100}
                    width={100}
                    alt="time"
                    className='mx-auto mb-5 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-5  text-5xl`}>Working Hours</h4>
                    <p>Mon-Fri: 9AM to 5PM<br/>Sunday: 9AM to 1 PM</p>
                
                </div>
                    
        </div>

       
                    
                    <div className='w-full sm:w-1/2'>
                        <form>
                            <input type="text" defaultChecked={true} placeholder='Name' className=' w-full bg-[#f3f3f3] rounded text-left px-10 mb-10 py-10'/>
                            <input type="email" defaultChecked={true} placeholder='Your Mail' className=' w-full bg-[#f3f3f3] rounded  text-left  mb-10 px-10 py-10'/>
                        
                            <input type="text" defaultChecked={true} placeholder='Subject' className='w-full rounded text-left bg-[#f3f3f3]  mb-10 px-10 py-10'/>
                            <textarea defaultChecked={true} placeholder='Your Message' className=' block p-10 mb-10 h-52  w-full rounded-md bg-[#f3f3f3] ' ></textarea>
                            <button defaultChecked={true} className='w-full rounded bg-[#B68C5A] text-lg text-white text-center font-bold px-10 py-10'   type="submit">Send Message</button>
                            </form>

                        </div>


                    </div>
                


             </div>
        </main>
        </section>
    );
};

export default Contact;