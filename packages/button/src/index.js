import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const Button = ({children, action, disabled}) => (
  <button disabled={disabled} className={`${disabled ? 'button--disabled' : 'button'}`} onClick={action}>
    {children}
  </button>
)

Button.propTypes = {
  /** Text that will receive the button component  */
  children: PropTypes.node,
  /** Will be executed when button is clicked */
  action: PropTypes.func,
  /** Enable/disables the botton */
  disabled: PropTypes.bool
}

Button.defaultprops = {
  children: 'Click Me!',
  action: (callback) => callback,
  disabled: false
}