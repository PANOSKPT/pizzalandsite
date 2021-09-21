import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <footer className={styles['Footer']}>
      <span className={styles['text']}>{props.text}</span>
      <div className={styles['IconGroup']}>
        <a
          href="https://www.tiktok.com/@pizzaland.gr"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link']}
        >
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={` ${styles['image']} ${projectStyles['thqLink']} `}
          />
        </a>
        <a
          href="https://l.pizzaland.tk/discord"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link1']}
        >
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={` ${styles['image1']} ${projectStyles['thqLink']} `}
          />
        </a>
      </div>
    </footer>
  )
}

Component1.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/tiktok-icon-vector-01.svg',
  image_alt1: 'image',
  text: '© 2021 PizzaLand, All Rights Reserved.',
  image_src1: '/playground_assets/icons8-discord-new.svg',
}

Component1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Component1
