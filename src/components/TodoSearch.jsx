import React, { useState } from 'react'
import './TodoSearch.css'
export const TodoSearch = () => {
  const [searchText, setSearchText] = useState('')
  const handlers={
    changeSearch:(e)=>{
      setSearchText(e.target.value)
    }
  }
  return (
    <input value={searchText} onChange={handlers.changeSearch} className='TodoSearch' placeholder='holaCebolla'/>
  )
}
