import React from 'react'

const HomepageMain = ({children}) => {
  return (
    <main className='flex w-full h-auto p-[28px_20px] sm:p-[64px_80px] xl:p-[64px_120px] flex-col justify-center items-center gap-[24px] sm:gap-[64px]'>
      {children}
    </main>
  )
}

export default HomepageMain
