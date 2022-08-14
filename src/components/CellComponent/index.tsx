import React from 'react'
import clsx from 'clsx'
import { Colors } from '../../ts/enums/Colors.enum'

import styles from './CellComponent.module.css'

type CellProps = {
  color: Colors
  children?: React.ReactNode
}

const CellComponent: React.FC<CellProps> = ({ color, children }) => {
  return <div className={clsx(styles.cell, styles[color])}>{children}</div>
}

export default CellComponent
