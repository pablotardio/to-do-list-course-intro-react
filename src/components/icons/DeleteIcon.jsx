import React from 'react'
import { ClickableIcon } from './ClickableIcon'
export const DeleteIcon = ({onDelete}) => {
  return (
    <ClickableIcon onClick={onDelete} type={'delete'}/>
  )
}
