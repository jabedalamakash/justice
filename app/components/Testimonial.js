// 'use client'

import React from 'react';
import Image from 'next/image';
import {EB_Garamond } from 'next/font/google'

const garabond = EB_Garamond({
     subsets: ['latin']
})

const Testimonial = () => {
    return (
        <div>
            <main className='w-full sm:w-[80%] mx-auto px-5 sm:px-0 mb-40'>
                <h1 className={`${garabond.className} font-bold mb-5 text-center  text-5xl`}>What Our Client Say</h1>
                <p className='text-center text-xl sm:w-[50%] mb-20 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, rem deserunt autem officiis architecto corrupti id dolor aperiam eveniet, voluptatum porro explicabo.</p>

                
                
                
                
                <div className='relative'>

                            <div className="carousel rounded-2xl w-full">


                            <div id="slide1" className="carousel-item  relative w-full">

                                <Image 
                                src="/images/slider-1.jpg"
                                width={1280}
                                height={500}
                                alt='slider-1' className="h-full w-full opacity-95 absolute  object-center object-cover   " />

                                <div className='text-white py-20 sm:py-48   relative my-auto text-center '>

                                <Image 
                                src="/images/shakib.png"
                                width={100}
                                height={100}
                                alt='profile' className="mx-auto mb-10" />

                                <h1 className='font-extrabold text-2xl mb-5'>Shakib Al Hasan</h1>
                                <p className='text-xl mb-10'>Cricketer</p>
                                
                                <p className='text-xl mx-auto w-[90%] sm:w-[50%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>

                                </div>

                                
                                <div className="absolute flex justify-between transition-all transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn text-white btn-circle">❮</a> 
                                <a href="#slide2" className="btn text-white btn-circle">❯</a>
                                </div>


                            </div> 



                            <div id="slide2" className="carousel-item relative w-full">


                            <Image 
                                src="/images/slider-2.jpg"
                                width={1280}
                                height={500}
                                alt='slider-1' className="h-full w-full opacity-95 object-center object-cover absolute  " />

                                <div className='text-white py-20 sm:py-48  relative my-auto text-center'>

                                <Image 
                                src="/images/nasir.jpg"
                                width={100}
                                height={100}
                                alt='profile' className="mx-auto rounded-full mb-10" />

                                <h1 className='font-extrabold text-2xl mb-5'>Nasir Bin Burhan</h1>
                                <p className='text-xl mb-10'>UI/UX Designer</p>
                                
                                <p className='text-xl mx-auto w-[90%] sm:w-[50%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>

                                </div>

                                <div className="absolute flex justify-between transition-all transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn text-white btn-circle">❮</a> 
                                <a href="#slide3" className="btn text-white btn-circle">❯</a>
                                </div>
                            </div> 



                            
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="/images/slider-3.jpg" className="w-full h-full opacity-95 object-center object-cover absolute" />


                                <div className='text-white relative py-20 sm:py-48    my-auto text-center '>

                                    <Image 
                                    src="/images/profile.png"
                                    width={100}
                                    height={100}
                                    alt='profile' className="mx-auto mb-10" />

                                    <h1 className='font-extrabold text-2xl mb-5'>Awlad Hossain</h1>
                                    <p className='text-xl mb-10'>Graphic Designer</p>

                                    <p className='text-xl mx-auto w-[90%] sm:w-[50%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>

                                </div>


                                
                                <div className="absolute flex justify-between transition-all transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn text-white btn-circle">❮</a> 
                                <a href="#slide1" className="btn text-white  btn-circle">❯</a>
                                </div>
                            </div> 
                            {/* <div id="slide4" className="carousel-item relative w-full">
                                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div> */}



                            </div>

                </div>


            </main>
            
        </div>
    );
};

export default Testimonial;