import React from 'react'

const ReCard = ({children}:{children:React.ReactNode}) => {
  return (
      <div className='item'>{ children}</div>
  )
}

export default ReCard