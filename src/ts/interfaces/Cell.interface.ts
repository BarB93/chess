import { Colors } from '../enums/Colors.enum'
import { Board } from '../models/Board.model'
import { Figure } from '../models/figures/Figure.model'

export type CellParams = {
  x: number
  y: number
  color: Colors
  board: Board
  figure: Figure | null
}
