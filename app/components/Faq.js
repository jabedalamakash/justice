import Image from 'next/image';
import React from 'react';
import {EB_Garamond } from 'next/font/google'

const garabond = EB_Garamond({
     subsets: ['latin']
})

const Faq = () => {
    return (
        <div className='w-full mb-40 sm:w-[80%] mx-auto'>

            <h1 className={`${garabond.className} font-bold mb-5 text-center  text-5xl`}> Frequently Asked Any Questions</h1>
            <p className='text-center text-xl mb-20 sm:mb-40 w-[100%] sm:w-[50%] mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            
            <div className='flex justify-center items-center sm:items-start sm:justify-start mx-auto flex-col sm:flex-row'>



                 <div className='sm:w-1/2 w-full px-5 sm:px-0 mb-20 sm:mr-20'>

                        <div className="collapse mb-10 p-10 collapse-plus bg-[#f3f3f3]">
                        <input type="radio" name="my-accordion-3" checked="checked" /> 
                        <div className="collapse-title text-xl font-bold">
                        1. Are Application fee weavers available?
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum alias corrupti cupiditate, expedita laudantium. Veniam laboriosam sequi consequuntur eos, excepturi accusantium.</p>
                        </div>
                        </div>
                        <div className="collapse mb-10 p-10 collapse-plus bg-[#f3f3f3]">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-bold">
                        2. Are Application fee weavers available?
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam consequatur, mollitia natus fugit in blanditiis beatae. Illum deleniti dolor provident hic?</p>
                        </div>
                        </div>


                        <div className="collapse mb-10 p-10 collapse-plus bg-[#f3f3f3]">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-bold">
                        3. Are Application fee weavers available?
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, necessitatibus? Labore a necessitatibus illum expedita repellendus, accusamus debitis facere commodi! Vitae, alias.</p>
                        </div>
                        </div>

                        <div className="collapse p-10 collapse-plus bg-[#f3f3f3]">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-bold">
                            4. Are Application fee weavers available?
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium similique, enim quam corrupti inventore ea sequi, doloribus eligendi autem assumenda deserunt.</p>
                        </div>
                        </div>


                </div>           
            

                <div className='w-1/2'>
                    <Image
                    
                    src={"/images/faq.png"}
                    height={550}
                    width={550}
                    alt="faq"
                    className=''/>

                </div>

            
            </div>


            </div>
        
       
    );
};

export default Faq;



