import { Colors } from '../enums/Colors.enum'
import { Cell, Bishop, King, Knight, Pawn, Queen, Rook } from './index'

export class Board {
  cell: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push(
            new Cell({ board: this, x: j, y: i, color: Colors.LIGTH, figure: null }), // light cell
          )
        } else {
          row.push(
            new Cell({ board: this, x: j, y: i, color: Colors.DARK, figure: null }), // dark cell
          )
        }
      }
      this.cell.push(row)
    }
  }

  public getCell(x: number, y: number): Cell {
    return this.cell[y][x]
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn({ color: Colors.LIGTH, cell: this.getCell(i, 1) })
      new Pawn({ color: Colors.DARK, cell: this.getCell(i, 6) })
    }
  }

  private addKings() {
    new King({ color: Colors.LIGTH, cell: this.getCell(4, 0) })
    new King({ color: Colors.DARK, cell: this.getCell(4, 7) })
  }

  private addQueens() {
    new Queen({ color: Colors.LIGTH, cell: this.getCell(3, 0) })
    new Queen({ color: Colors.DARK, cell: this.getCell(3, 7) })
  }

  private addBishops() {
    new Bishop({ color: Colors.LIGTH, cell: this.getCell(2, 0) })
    new Bishop({ color: Colors.LIGTH, cell: this.getCell(5, 0) })
    new Bishop({ color: Colors.DARK, cell: this.getCell(2, 7) })
    new Bishop({ color: Colors.DARK, cell: this.getCell(5, 7) })
  }

  private addRooks() {
    new Rook({ color: Colors.LIGTH, cell: this.getCell(0, 0) })
    new Rook({ color: Colors.LIGTH, cell: this.getCell(7, 0) })
    new Rook({ color: Colors.DARK, cell: this.getCell(0, 7) })
    new Rook({ color: Colors.DARK, cell: this.getCell(7, 7) })
  }

  private addKnights() {
    new Knight({ color: Colors.LIGTH, cell: this.getCell(1, 0) })
    new Knight({ color: Colors.LIGTH, cell: this.getCell(6, 0) })
    new Knight({ color: Colors.DARK, cell: this.getCell(1, 7) })
    new Knight({ color: Colors.DARK, cell: this.getCell(6, 7) })
  }

  public addFigures() {
    this.addPawns()
    this.addKings()
    this.addQueens()
    this.addRooks()
    this.addKnights()
    this.addBishops()
  }
}
