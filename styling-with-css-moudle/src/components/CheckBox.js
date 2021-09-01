import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import styles from './CheckBox.module.css'

console.log(styles)

function CheckBox({ checked, children, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div>{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
      </label>
      <span>{children}</span>
    </div>
  )
}

export default CheckBox
