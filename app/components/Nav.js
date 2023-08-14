import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
      <main>
            <div className='w-full sm:w-[80%] mt-20 mb-40 sm:mb-20 mx-auto'>

                  <div className="navbar w-full sm:max-w-screen-xl mx-auto " >
                    <div className="navbar-start ">
                      <div className="dropdown">
                        <label tabIndex={0} className="btn mb-5 btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-0 text-xl rounded-box w-52">
                          <li className='text-xl font-bold  hover:text-[#B68C5A]'>
                            <Link href="/">Home </Link></li>
                          <li className='text-xl font-bold  hover:text-[#B68C5A]'>
                            <Link href="/services">Services  &#10095;</Link>
                            </li>
                          <li className='text-xl font-bold  hover:text-[#B68C5A]'>
                            <Link href="/cases">Cases  &#10095; </Link>
                            </li>
                          <li className='text-xl font-bold hover:text-[#B68C5A]'>
                            <Link href="/blog">Blog  &#10095;</Link>
                          </li>
                          <li className='text-xl font-bold hover:text-[#B68C5A]'>
                            <Link href="/contactus">Contact Us  &#10095; </Link>
                            
                            </li>
                          
                        </ul>
                      </div>
                     
                      <Link href="/">
                        <Image
                        src={"/images/logo2.png"}
                        height={100}
                        width={200}
                        alt="Logo"
                        priority={true}
                        className=' '/>
                        
                        </Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                      <ul className="menu text-xl menu-horizontal px-1">
                          <li className=' active:text-[#B68C5A] hover:text-[#B68C5A] '><Link href="/">Home</Link></li>
                          <li className=' active:text-[#B68C5A] hover:text-[#B68C5A]'><Link href="/services">Services <span className='text-2xl'>&#10095;</span> </Link></li>
                          <li className=' active:text-[#B68C5A] hover:text-[#B68C5A]'><Link href="/cases">Cases <span className='text-2xl'>&#10095;</span></Link></li>
                          <li className=' active:text-[#B68C5A] hover:text-[#B68C5A]'><Link href="/blog">Blog  <span className='text-2xl'>&#10095;</span></Link></li>
                          <li className=' active:text-[#B68C5A] hover:text-[#B68C5A]'><Link href="/contactus">Contact Us <span className='text-2xl'>&#10095;</span></Link></li>
                      </ul>
                    </div>
                    <div className="navbar-end sm:ml-0 ml-2 mr-0">
                    
                      <button className='bg-[#B68C5A] rounded text-white px-5 mr-0 py-3 font-bold text-xl'><Link href="/contactus">Free Consultation</Link></button>
                      
                    </div>
                  </div>

            
             </div>
      </main>
        
    );
};

export default Nav;
