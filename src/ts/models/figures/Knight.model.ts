import { KnightSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { KnightParams } from '../../interfaces/Knight.interface'
import { Figure } from './Figure.model'

export class Knight extends Figure {
  constructor({ cell, color }: KnightParams) {
    super({ cell, color })
    this.component = KnightSVGCmponent
    this.figure = FigureNames.KNIGHT
  }
}
