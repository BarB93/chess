import { Colors } from '../enums/Colors.enum'
import { Board } from '../models/Board.model'

export type CellParams = {
  x: number
  y: number
  color: Colors
  board: Board
}
