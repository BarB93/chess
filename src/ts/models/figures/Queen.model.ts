import { QueenSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { QueenParams } from '../../interfaces/Queen.interface'
import { Figure, Cell } from '../index'

export class Queen extends Figure {
  constructor({ cell, color }: QueenParams) {
    super({ cell, color })
    this.component = QueenSVGCmponent
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    if (this.cell.isEmptyHorizontal(target)) return true
    if (this.cell.isEmptyDiagonal(target)) return true
    return false
  }
}
