import { nanoid } from 'nanoid'
import { Colors } from '../../enums/Colors.enum'
import { FigureNames } from '../../enums/Figure.enum'
import { FigureComponentType, FigureParams } from '../../interfaces/Figure.interface'
import { Cell } from '../Cell.model'

export class Figure {
  cell: Cell
  component: FigureComponentType
  name: FigureNames
  color: Colors
  id: string

  constructor({ color, cell }: FigureParams) {
    this.color = color
    this.id = nanoid(5)
    this.component = null
    this.name = FigureNames.FIGURE
    this.cell = cell
    this.cell.figure = this
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target.figure?.name === FigureNames.KING) {
      return false
    }
    return true
  }

  moveFigure(target: Cell) {
    if (this?.cell?.figure?.canMove(target)) {
      target.figure = this.cell.figure
      this.cell.figure = null
      target.figure.cell = target
    }
  }
}
