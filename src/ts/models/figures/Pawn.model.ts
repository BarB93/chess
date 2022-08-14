import { PawnSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { PawnParams } from '../../interfaces/Pawn.interface'
import { Figure } from './Figure.model'

export class Pawn extends Figure {
  constructor({ cell, color }: PawnParams) {
    super({ cell, color })
    this.component = PawnSVGCmponent
    this.figure = FigureNames.PAWN
  }
}
