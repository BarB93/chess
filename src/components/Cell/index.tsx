import React from 'react'
import clsx from 'clsx'

import styles from './Cell.module.css'

type CellProps = {
  light?: boolean
}

const Cell: React.FC<CellProps> = ({ light }) => {
  return <div className={clsx(styles.cell, light && styles.light)}></div>
}

export default Cell
