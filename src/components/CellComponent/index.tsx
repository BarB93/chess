import React from 'react'
import clsx from 'clsx'

import { moveFigure, selectCell } from '../../redux/slices/game/slice'
import useAppSelector from './../../hook/useAppSelector'
import useAppDispatch from './../../hook/useAppDispatch'
import { Cell } from '../../ts/models'
import { Colors } from '../../ts/enums/Colors.enum'

import styles from './CellComponent.module.css'

type CellProps = {
  color: Colors
  children?: React.ReactNode
  cell: Cell
}

const CellComponent: React.FC<CellProps> = ({ color, cell, children }) => {
  const { selectedCell } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()

  const clickCellHandler = () => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      dispatch(moveFigure(cell))
    } else if (cell.figure) {
      dispatch(selectCell(cell))
    }
  }

  return (
    <div
      className={clsx(
        styles.cell,
        styles[color],
        selectedCell === cell && styles.selected,
        cell.available && !cell.figure && styles.available,
        cell.available && cell.figure && styles.eatable,
      )}
      onClick={clickCellHandler}
    >
      {children}
    </div>
  )
}

export default CellComponent
