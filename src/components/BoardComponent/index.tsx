import clsx from 'clsx'
import React from 'react'
import CellComponent from '../CellComponent'

import styles from './BoardComponent.module.css'
import useAppSelector from '../../hook/useAppSelector'

const Board: React.FC = () => {
  const { board } = useAppSelector((state) => state.game)
  let charCode = 64

  return (
    <div className={styles.board}>
      {board.cells.map((row, i) => (
        <React.Fragment key={i}>
          <div className={clsx(styles.leftBorder, styles[`leftBorder${i}`])}>{i + 1}</div>
          {row.map((cell) => (
            <CellComponent key={cell.id} color={cell.color} cell={cell}>
              {cell?.figure?.component && (
                <cell.figure.component color={cell.figure.color} />
              )}
            </CellComponent>
          ))}
        </React.Fragment>
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={styles.bottomBorder}>
          {String.fromCharCode(++charCode)}
        </div>
      ))}
    </div>
  )
}

export default Board
