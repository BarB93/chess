import { BishopParams } from '../../interfaces/Bishop.interface'
import { Figure } from './Figure.model'
import BishopSVGCmponent from '../../../components/figures/BishopSVGCmponent'
import { FigureNames } from '../../enums/Figure.enum'

export class Bishop extends Figure {
  constructor({ cell, color }: BishopParams) {
    super({ cell, color })
    this.component = BishopSVGCmponent
    this.figure = FigureNames.BISHOP
  }
}
