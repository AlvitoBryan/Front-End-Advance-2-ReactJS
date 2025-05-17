import React from 'react'

const MainTab = ({children}) => {
  return (
    <div className='flex flex-col justify-center items-start tabs-style tabs-focus'>
      {children}
    </div>
  )
}

export default MainTab
