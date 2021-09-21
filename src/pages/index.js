import React from 'react'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Pizzaland.tk</title>
        <meta
          name="description"
          content="The official PizzaLand website is now live!\nCheck it out!"
        />
        <meta property="og:title" content="Pizzaland.tk" />
        <meta
          property="og:description"
          content="The official PizzaLand website is now live!\nCheck it out!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bb60fb39-75eb-4077-acb0-926beeb89e88/112f3300-7ae2-4d5b-9e2a-9e0148a091e7?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <div className={styles['container03']}>
              <div className={styles['container04']}>
                <div className={styles['container05']}>
                  <div className={styles['container06']}>
                    <div className={styles['container07']}>
                      <div className={styles['container08']}>
                        <div className={styles['container09']}>
                          <h1 className={styles['text']}>PIZZA LAND</h1>
                          <span className={styles['text1']}>
                            <span></span>
                            <span>
                              THE BEST GREEK MINECRAFT SERVER TO PLAY WITH YOU
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span>FRIENDS.</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={` ${styles['button']} ${projectStyles['button']} `}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className={styles['container10']}></div>
      </div>
      <Component1></Component1>
    </div>
  )
}

export default Home
