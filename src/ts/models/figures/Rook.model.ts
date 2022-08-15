import { RookSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { RookParams } from '../../interfaces/Rook.interface'
import { Figure, Cell } from '../index'

export class Rook extends Figure {
  constructor({ cell, color }: RookParams) {
    super({ cell, color })
    this.component = RookSVGCmponent
    this.name = FigureNames.ROOK
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    if (this.cell.isEmptyHorizontal(target)) return true
    return false
  }
}
