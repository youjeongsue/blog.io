import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME.LIGHT : THEME.DARK
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Dom.hasClassOfBody(THEME.LIGHT)

    handleChange(checked)
  }, [])

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          uncheckedIcon={<div className="icon checkedIcon">D</div>}
          checkedIcon={<div className="icon uncheckedIcon">L</div>}
          onColor={'#d9dfe2'}
          onHandleColor={'#fff'}
          offColor={'#999'}
          offHandleColor={'#282c35'}
        />
      </label>
    </div>
  )
}
