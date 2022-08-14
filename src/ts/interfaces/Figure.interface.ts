import {
  BishopSVGCmponent,
  KingSVGCmponent,
  QueenSVGCmponent,
  KnightSVGCmponent,
  PawnSVGCmponent,
  RookSVGCmponent,
} from '../../components/figures'
import { Colors } from '../enums/Colors.enum'
import { Cell } from '../models/Cell.model'

export type FigureParams = {
  cell: Cell
  color: Colors
}

export type FigureComponentType =
  | typeof BishopSVGCmponent
  | typeof KingSVGCmponent
  | typeof QueenSVGCmponent
  | typeof KnightSVGCmponent
  | typeof PawnSVGCmponent
  | typeof RookSVGCmponent
  | null
