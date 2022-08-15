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

  constructor({ x, y, color, board }: CellParams) {
    this.id = nanoid(5)
    this.x = x
    this.y = y
    this.board = board
    this.figure = null
    this.color = color
    this.available = false
  }

  isEmpty() {
    return this.figure === null
  }

  isEmptyVertical(target: Cell): boolean {
    if (target.x !== this.x) return false

    const min = Math.min(target.y, this.y)
    const max = Math.max(target.y, this.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false
      }
    }

    return true
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (target.y !== this.y) return false

    const min = Math.min(target.x, this.x)
    const max = Math.max(target.x, this.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false
      }
    }

    return true
  }

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x)
    const absY = Math.abs(target.y - this.y)
    if (absX !== absY) return false

    const dx = this.x < target.x ? 1 : -1
    const dy = this.y < target.y ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) return false
    }

    return true
  }
}
