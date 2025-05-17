import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoPlaceholder = () => {
    const navigate = useNavigate();
    
      const handleProfileClick = () => {
        navigate("/");
      };
    return (
        <div className='flex justify-center items-center w-[152px] sm:w-[237px] h-[42px] sm:h-[56px] p-[9.75px_3.978px_9.69px_3.25px] sm:p-[13px_21.97px_12.92px_22px] cursor-pointer' onClick={handleProfileClick}>
            <img src="/images/Logo.svg" onclick={() => navigate('/')}></img>
        </div>
    )
}
export default LogoPlaceholder;