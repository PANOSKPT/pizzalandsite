import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <header className={styles['Header']}>
      <nav className={styles['Nav']}>
        <span className={styles['text']}>{props.text}</span>
        <span className={styles['text1']}>{props.text1}</span>
        <span className={styles['text2']}>{props.text2}</span>
      </nav>
      <div className={styles['BtnGroup']}>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          <span className={styles['text3']}>{props.text3}</span>
        </button>
      </div>
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
      </svg>
    </header>
  )
}

AppComponent.defaultProps = {
  text: 'Αρχική',
  text3: 'Store',
  text1: 'FAQ',
  text2: 'Rules',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default AppComponent
