import { PawnSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { PawnParams } from '../../interfaces/Pawn.interface'
import { Figure, Cell } from '../index'

export class Pawn extends Figure {
  isFirstStep: boolean = true

  constructor({ cell, color }: PawnParams) {
    super({ cell, color })
    this.component = PawnSVGCmponent
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
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
