import React from 'react'


const MainTabs = ({children}) => {
  return (
    <div className='flex items-start self-stretch overflow-x-auto scrollbar-hide'>
      {children}
    </div>
  )
}

export default MainTabs
