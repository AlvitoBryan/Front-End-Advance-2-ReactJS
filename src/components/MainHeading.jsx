import React from 'react'

const MainHeading = ({
    mainHeadingText,
    mainDescText,
}) => {
  return (
    <div className='flex flex-col  justify-center items-start gap-2.5'>
        <h2 className='text-[var(--text-dark-primary,#222325)] font-[Poppins] text-[1.5rem] sm:text-[2rem] font-semibold leading-[110%]'>
            {mainHeadingText}
        </h2>
        <p className='text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))] font-[DM_Sans] text-[0.875rem] sm:text-base font-medium leading-[140%] tracking-[0.2px]'>
            {mainDescText}
        </p>
    </div>
  )
}

export default MainHeading
