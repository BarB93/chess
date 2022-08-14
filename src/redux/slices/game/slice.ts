import { createSlice } from '@reduxjs/toolkit'
import { Board } from '../../../ts/models/Board.model'
import { GameState } from './types'

const initialState: GameState = {
  board: new Board(),
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
  },
})

export const { restart } = gameSlice.actions

export default gameSlice.reducer
