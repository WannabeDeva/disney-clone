import React from 'react'

function Headeritem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 '>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default Headeritem
