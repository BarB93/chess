import { Cell } from '../../../ts/models'
import { Board } from '../../../ts/models/Board.model'

export interface GameState {
  board: Board
  selectedCell: Cell | null
}
