import { KingSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { KingParams } from '../../interfaces/King.interface'
import { Figure } from './Figure.model'

export class King extends Figure {
  constructor({ cell, color }: KingParams) {
    super({ cell, color })
    this.component = KingSVGCmponent
    this.figure = FigureNames.KING
  }
}
