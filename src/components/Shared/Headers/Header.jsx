import React, { useEffect, useState } from 'react';
import "./Header.css";
import { Link, useNavigation } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi2";
import HashLoader from "react-spinners/HashLoader";

const Header = () => {
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState([]);

    // search button input
    const handleSearch = (e)=>{
        e.preventDefault();
        const search = e.target.search.value;
        setSearchValue(search);
        // console.log(search);
    }

   
    return (
        <section className='bg-white'>
                {
                   navigation.state === 'loading' ? <div className='fixed top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]'>
                   <HashLoader
                  color={"#ffd656"}
                  loading={true}
                  size={80}
                  aria-label="Loading Spinner"
                  data-testid="loader"
              />
                  </div>  : ''
                }
                {/* #ffd656 */}
                <header>
                <div className='flex justify-center md:justify-between md:px-20 py-1 bg-[var(--yellowColor)] text-sm'>
                <div className='hidden md:block'>
                    <p className='text-[var(--mainColor)]'>Please Call us to check the stock before placing the order!</p>
                </div>
                <div className='text-[var(--mainColor)]'>
                    <p>Call: (+880) 1686621361   <span className='px-5 text-[var(--mainColor)]'>।</span>   <a href="https://www.facebook.com/aminulify" target='_blank' className='hover:text-[var(--mainColor)]'>FB Page</a>    <span className='px-5 text-[var(--mainColor)]'>।</span>    <a href="https://www.facebook.com/aminulify" target='_blank' className='hover:text-[var(--mainColor)]'>FB Group</a>    </p>
                </div>
                </div>
            </header>

            {/* header main section  */}
            {/* header main section  */}
            <main className='px-5 md:px-10 my-3 md:flex md:justify-between bg-white grid gap-3'>
                {/* logo  */}
                <div className='w-32'>
                    <Link to="/"><img src="../../../../public/logo.png" alt="" /></Link>
                </div>

                {/* search bar  */}
                <form onSubmit={handleSearch} className='flex items-center justify-center relative'>
                        <input type="search" name='search' placeholder='Search in Toysell' className='bg-slate-50 py-2 rounded-full  border- border-[var(--yellowColor)] px-5 w-full md:w-[600px]'/>
                    
                        <button type='submit'>
                            <RiSearchLine className='absolute top-[5.5px] md:top-[10px] text-[30px] text-[var(--yellowColor)] hover:bg-[var(--yellowColor)] hover:text-[var(--mainColor)] right-2 duration-300 bg-[var(--mainColor)] rounded-full text-3xl p-[6px]'/>
                        </button>
                    </form>

                    {/* login signup section  */}
                <div className='login-signup-section flex items-center gap-10'>

                    <div className='flex gap-5 items-center text-[20px]'>
                        <Link className='flex gap-1 items-center text-[--mainColor] hover:text-[var(--secondaryColor)] duration-300 hover:translate-y-[-2px]'>
                          
                            <HiOutlineUserCircle className='text-[24px]'/>
                            Login

                        </Link>
                        <span className='text-[var(--mainColor)]'>।</span>
                        <Link className='text-[--mainColor] hover:text-[var(--secondaryColor)] duration-300 hover:translate-y-[-2px]'>Signup</Link>
                        <LuShoppingCart className='text-[24px] text-[--mainColor] hover:text-[var(--secondaryColor)] duration-300 hover:translate-y-[-2px]'/>
                    </div>

                </div>
            </main>
            <hr />
        
        </section>
    );
};

export default Header;