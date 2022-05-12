import React from 'react'
import PropTypes from 'prop-types'
import s from './Paper.module.css'

const Paper = ({title,children}) => {
  return (
    <>
    <header>
        <h2 className={s.header}>Color__
          <span className={s.neon}>Picker</span></h2>
    </header>
      {children}
    </>
  )
}

Paper.propTypes = {
  title: PropTypes.string.isRequired,
  children:PropTypes.node
}

export default Paper