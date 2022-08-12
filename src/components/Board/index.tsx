import clsx from 'clsx'
import React from 'react'
import Cell from '../Cell'

import styles from './Board.module.css'

const Board: React.FC = () => {
  const cells = []
  let charCode = 64

  for (let i = 0; i < 8; i++) {
    cells.push(
      <div className={clsx(styles.leftBorder, styles[`leftBorder${i}`])}>{i + 1}</div>,
    )
    for (let j = 0; j < 8; j++) {
      const isOdd = (j + i) % 2 === 0
      cells.push(<Cell key={i + '' + j} light={isOdd} />)
    }
  }

  return (
    <div className={styles.board}>
      {cells}
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={styles.bottomBorder}>
          {String.fromCharCode(++charCode)}
        </div>
      ))}
    </div>
  )
}

export default Board
