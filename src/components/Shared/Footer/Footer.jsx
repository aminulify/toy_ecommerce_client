import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleTop = () =>{
        window.scrollTo(0,0);
    }
    return (
        <div className=' pt-10 bg-[var(--mainColor)]'>
            <div className='mx-10 '>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-16 md:mb-10 mb-5'>
                    <div>
                    <Link to="/"><div onClick={handleTop} className='w-32'><img src="../../../../public/logo-footer.png" alt="" /></div></Link>
                    <p className='text-[var(--yellowColor)] mt-2'>Largest product search engine, maximum categorized online shopping mall and quickest home delivery system.</p>
                    </div>
                   
                    <div>
                        <h2 className='text-[var(--yellowColor)] text-xl font-semibold'>Contact Us</h2>
                        <p className='text-[var(--yellowColor)] mt-1'>House #8, Road # 14, Keraniganj, Dhaka-1311.</p>
                        <p className='text-[var(--yellowColor)] mt-1'>Email: support@toysell.com</p>
                    </div>
                    <div>
                        <h2 className='text-[var(--yellowColor)] text-xl font-semibold'>Let Us Help You</h2>
                        <p>
                             <Link className='text-[var(--yellowColor)] mt-2 hover:underline'>Your Order</Link>
                        </p>
                        <Link className='text-[var(--yellowColor)] mt-2 hover:underline'>FAQ</Link>
                    </div>
                    <div>
                        <h2 className='text-[var(--yellowColor)] text-xl font-semibold'>Get ToySell App</h2>
                        <div className='w-40 mt-2'><Link to="https://play.google.com/store/apps?hl=en_US&gl=US"><img src="../../../../public/google-play.png" alt="google play logo" /></Link></div>
                 </div>
                 </div>
            </div>
            <hr />
            <p className='text-center py-4 text-[var(--yellowColor)]'>&copy; 2024 ToySell.com Limited. All rights reserved.</p>
        </div>
    );
};

export default Footer;