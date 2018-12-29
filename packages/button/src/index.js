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
  children: PropTypes.element.isRequired,
  /** Will be executed when button is clicked */
  action: PropTypes.func.isRequired,
  /** Enable/disables the botton */
  disabled: PropTypes.bool.isRequired
}