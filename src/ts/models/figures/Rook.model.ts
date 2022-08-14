import { RookSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { RookParams } from '../../interfaces/Rook.interface'
import { Figure } from './Figure.model'

export class Rook extends Figure {
  constructor({ cell, color }: RookParams) {
    super({ cell, color })
    this.component = RookSVGCmponent
    this.figure = FigureNames.ROOK
  }
}
