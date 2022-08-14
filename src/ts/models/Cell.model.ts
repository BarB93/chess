import { nanoid } from 'nanoid'

import { Colors } from '../enums/Colors.enum'
import { CellParams } from '../interfaces/Cell.interface'
import { Figure } from './figures/Figure.model'
import { Board } from './Board.model'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  board: Board
  figure: Figure | null
  available: boolean // can move figure
  id: string // for React keys

  constructor({ x, y, color, figure, board }: CellParams) {
    this.id = nanoid(5)
    this.x = x
    this.y = y
    this.board = board
    this.figure = figure
    this.color = color
    this.available = false
  }
}
