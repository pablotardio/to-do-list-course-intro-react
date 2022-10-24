import React from 'react'
import { ClickableIcon } from './ClickableIcon'

export const CompleteIcon = ({onComplete ,color}) => {
  return (
    <ClickableIcon onClick={onComplete} color={color} type={'check'}/>
  )
}
