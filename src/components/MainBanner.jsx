import React from 'react'
import { ButtonHero } from './Button'

export const MainBanner = ({
    heroHeading,
    heroDesc,
}) => {
  return (
      <section className='flex max-w-[1200px] w-full h-[400px] flex-col justify-center items-center rounded-[10px] bg-[url(/images/main_banner1.png)] bg-no-repeat bg-center gap-[24px]' style={{paddingTop: 'min(82px, 11.565%)', paddingBottom: 'min(64px, 11.565%)', paddingLeft: 'min(140px, 4vw)', paddingRight: 'min(140px, 4vw)',}}>
        <div className='flex h-auto w-full max-w-[920px] flex-col items-center gap-[12px]'>
            <h1 className='text-[var(--text-light-primary,#FFF)] text-center font-[Poppins] font-bold leading-[110%]' style={{fontSize: 'clamp(1.6rem, 4vw, 3rem)'}} >
                {heroHeading}
            </h1>
            <p className='text-[var(--text-light-primary,#FFF)] text-center font-[DM_Sans] font-medium leading-[140%] tracking-[0.2px]' style={{fontSize: 'clamp(0.875rem, 3vw, 1rem)'}}>
               {heroDesc} 
            </p>
        </div>
        <ButtonHero/>
    </section>
  )
}

export default MainBanner
