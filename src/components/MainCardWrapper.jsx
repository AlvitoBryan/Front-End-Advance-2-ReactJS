import React from 'react'

export const MainCardWrapper = ({children}) => {
  return (
    <div className='hidden sm:flex max-w-[1200px] w-full items-start gap-[24px] flex-wrap'>
        {children}
    </div>
  )
}

export const MainCardWrapperMobile = ({children}) => {
    return (
      <div className='flex sm:hidden flex-col items-start gap-[20px] self-stretch'>
          {children}
      </div>
    )
  }

export default MainCardWrapper
