import { QueenSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { QueenParams } from '../../interfaces/Queen.interface'
import { Figure } from './Figure.model'

export class Queen extends Figure {
  constructor({ cell, color }: QueenParams) {
    super({ cell, color })
    this.component = QueenSVGCmponent
    this.figure = FigureNames.QUEEN
  }
}
