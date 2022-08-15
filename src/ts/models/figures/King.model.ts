import { KingSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { KingParams } from '../../interfaces/King.interface'
import { Cell, Figure } from '../index'

export class King extends Figure {
  constructor({ cell, color }: KingParams) {
    super({ cell, color })
    this.component = KingSVGCmponent
    this.name = FigureNames.KING
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
