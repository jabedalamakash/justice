import React from 'react';
import Image from 'next/image'
import {EB_Garamond } from 'next/font/google'

const garabond = EB_Garamond({
     subsets: ['latin']
})

const Content = () => {
    return (
        <div className='w-full sm:w-[80%] mx-auto mb-40 px-5 sm:px-0 '>
            <h1 className={`${garabond.className} font-bold mb-5 text-center  text-5xl`}> The Legal Practice Area</h1>
            <p className='text-center mb-20  text-xl sm:w-[40%] mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

            <div>


            <div className='grid mx-auto grid-cols-1 sm:grid-cols-3 '>

                <div className=' text-center border-t-2 sm:border-t-0 border-b-2 sm:border-r-2 hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/business.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto mb-10 w-16'
                    />
                    <h4 className={`${garabond.className} font-bold mb-10 text-3xl  sm:text-5xl`}>Business Law</h4>
                    <p className='mb-10'>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>
                    <Image
                    src={"/images/Frame.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto h-full w-full'/>
                    </button>

                </div>

                <div className=' text-center border-b-2  sm:border-r-2 hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/criminal.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto mb-10 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-10 text-3xl  sm:text-5xl`}>Criminal Law</h4>
                    <p className='mb-10'>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>
                    <Image
                    src={"/images/Frame.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto h-full  w-full'/>
                    </button>

                </div>

                <div className=' text-center  border-b-2  hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/child.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto mb-10 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-10 text-3xl  sm:text-5xl`}>Child Supports</h4>
                    <p className='mb-10'>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>
                    <Image
                    src={"/images/Frame.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto h-full w-full'/>
                    </button>

                </div>

                <div className=' text-center border-b-2 sm:border-b-0 sm:border-r-2 hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/education.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto mb-10 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-10  text-3xl  sm:text-5xl`}>Education Law</h4>
                    <p className='mb-10'>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>

                    <Image
                    src={"/images/Frame.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto h-full w-full'/>
                    </button>

                    </div>



                    <div className=' text-center border-b-2 sm:border-b-0  sm:border-r-2 hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/divorce.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto mb-10 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-10 text-3xl  sm:text-5xl`}>Divorce Law</h4>
                    <p>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>
                    <Image
                    src={"/images/Frame.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto h-full mt-10 w-full'/>
                    </button>

                    </div>

                    <div className=' text-center border-b-2 sm:border-b-0  hover:bg-[#f5f5f5] p-10 sm:p-20'>
                    <Image
                    src={"/images/tax.png"}
                    height={40}
                    width={40}
                    alt="pic"
                    className='mx-auto mb-5 w-16'/>
                    <h4 className={`${garabond.className} font-bold mb-10 text-3xl  sm:text-5xl`}>Tax Law</h4>
                    <p>There are many variations ofpassages of Lorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour.</p>
                    <button>
                    <Image
                    src={"/images/Frame.png"}
                    height={100}
                    width={100}
                    alt="pic"
                    className='mx-auto h-full mt-10 w-full'/>
                    </button>
                  

                    </div>
    
</div>
            </div>
            

        </div>
    );
};

export default Content;