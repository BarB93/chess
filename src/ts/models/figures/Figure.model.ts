import { nanoid } from 'nanoid'
import { Colors } from '../../enums/Colors.enum'
import { FigureNames } from '../../enums/Figure.enum'
import { FigureComponentType, FigureParams } from '../../interfaces/Figure.interface'
import { Cell } from '../Cell.model'

export class Figure {
  cell: Cell
  component: FigureComponentType
  figure: FigureNames
  color: Colors
  id: string

  constructor({ color, cell }: FigureParams) {
    this.color = color
    this.id = nanoid(5)
    this.component = null
    this.figure = FigureNames.FIGURE
    this.cell = cell
    this.cell.figure = this
  }

  // canMove(target: Cell): boolean {
  //   return true
  // }
  // moveFigure(target: Cell) {}
}
