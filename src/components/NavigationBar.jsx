import { useLocation } from 'react-router-dom';
import LogoPlaceholder from "./LogoPlaceholder";
import Kategori from './Kategori';
import Profile from './Profile';
import { ButtonLogin, ButtonRegister } from './Button';
import { useEffect, useState } from 'react';

const Navigation = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login' || location.pathname === '/register';
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        setIsLoggedIn(!!user);
    }, []);

    return(
        <div className='flex justify-between items-center w-auto p-[16px_0px_16px_24px] sm:p-[12px_40px] md:p-[12px_80px] lg:p-[12px_120px] border-b border-[rgba(58,53,65,0.12)] gap-[16px] sm:gap-[36px] bg-[#FFF]'>
            <div className='flex justify-between items-center w-full'>
                <LogoPlaceholder/>

                {!isLoginPage && (
                    <div className="hidden sm:flex items-center gap-4">
                        <Kategori/>
                    </div>
                )}  
            </div>
            
            {!isLoginPage && (  
                <>
                    {isLoggedIn && <Profile/>}
                    {!isLoggedIn && (
                      <div className='flex flex-start gap-[16px] mr-[24px] sm:mr-[0px]'>
                        <ButtonLogin/>
                        <ButtonRegister/>
                      </div>
                    )}
                </>   
            )}

        </div>
    )
}

export default Navigation;