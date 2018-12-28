import React from 'react'
import './index.scss'

export const Button = ({children, action, disabled}) => (
  <button className={`button${disabled ? '--disabled' : ''}`} onClick={action}>
    {children}
  </button>
)