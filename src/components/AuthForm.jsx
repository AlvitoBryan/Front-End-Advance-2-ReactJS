import React from 'react'

const AuthForm = ({children}) => {
  return (
    <div className='flex w-full p-[28px_20px] sm:pt-[64px] justify-center items-center'>
      <div className='flex h-auto w-full max-w-[590px] p-[20px] sm:p-[36px] flex-col justify-center justify-self-center self-center items-center gap-[36px] rounded-sm border border-[#F1F1F1] bg-[#FFF]'>
          {children}
      </div>
    </div>
  )
}

export default AuthForm
