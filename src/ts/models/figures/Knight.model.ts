import { KnightSVGCmponent } from '../../../components/figures'
import { FigureNames } from '../../enums/Figure.enum'
import { KnightParams } from '../../interfaces/Knight.interface'
import { Figure, Cell } from '../index'

export class Knight extends Figure {
  constructor({ cell, color }: KnightParams) {
    super({ cell, color })
    this.component = KnightSVGCmponent
    this.name = FigureNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
