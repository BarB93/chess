import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cell } from '../../../ts/models'
import { Board } from '../../../ts/models/Board.model'
import { GameState } from './types'

const initialState: GameState = {
  board: new Board(),
  selectedCell: null,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    restart: (state) => {
      const newBoard = new Board()
      newBoard.initCells()
      newBoard.addFigures()
      state.board = newBoard
    },
    selectCell: (state, action: PayloadAction<Cell>) => {
      if (action.payload.figure) {
        state.selectedCell = action.payload
        state.board.highlightCells(action.payload)
        state.board = state.board.getCopyBoard()
      }
    },
    moveFigure: (state, action: PayloadAction<Cell>) => {
      if (state.selectedCell?.figure?.canMove(action.payload)) {
        state.selectedCell.figure.moveFigure(action.payload)
        state.selectedCell = null
        state.board.highlightCells(null)
      }
    },
  },
})

export const { restart, selectCell, moveFigure } = gameSlice.actions

export default gameSlice.reducer
