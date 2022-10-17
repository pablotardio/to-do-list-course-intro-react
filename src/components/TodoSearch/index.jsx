import React, { useState } from 'react'
import './TodoSearch.css'
export const TodoSearch = ({searchValue, setSearchValue}) => {
  const handlers={
    changeSearch:(e)=>{
      setSearchValue(e.target.value)
    }
  }
  return (
    <input value={searchValue} onChange={handlers.changeSearch} className='TodoSearch' placeholder='holaCebolla'/>
  )
}
