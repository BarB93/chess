import { BishopParams } from '../../interfaces/Bishop.interface'
import { Figure } from './Figure.model'
import BishopSVGCmponent from '../../../components/figures/BishopSVGCmponent'
import { FigureNames } from '../../enums/Figure.enum'
import { Cell } from '..'

export class Bishop extends Figure {
  constructor({ cell, color }: BishopParams) {
    super({ cell, color })
    this.component = BishopSVGCmponent
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyDiagonal(target)) return true
    return false
  }
}
