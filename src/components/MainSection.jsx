import React from 'react'

const MainSection = ({children}) => {
  return (
    <section className='flex flex-col justify-center w-full max-w-[1200px] items-start gap-[24px] sm:gap-8'>
        {children}
    </section>
  )
}

export default MainSection
