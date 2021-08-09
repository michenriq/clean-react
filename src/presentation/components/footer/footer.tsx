import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.header} />
  )
}

export default memo(Footer)
