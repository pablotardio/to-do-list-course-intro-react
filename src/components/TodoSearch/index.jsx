import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext';
import './TodoSearch.css'
export const TodoSearch = () => {
  const {  searchValue ,handlers:{search}} =
		useContext(TodoContext);
  const handlers={
    changeSearch:(e)=>{
      search(e.target.value)
    }
  }
  return (
    <input value={searchValue} onChange={handlers.changeSearch} className='TodoSearch' placeholder='holaCebolla'/>
  )
}
