import React from 'react'

const AuthHeader = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-[10px]'>
      <h1 className='text-2xl sm:text-[2rem] font-semibold leading-[110%] text-[#222325] font-[Poppins]'>{title}</h1>
      <p className='text-[rgba(51,51,51,0.68)] text-center text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px] font-[DM_Sans]'>{subtitle}</p>
    </div>
  )
}

export default AuthHeader
