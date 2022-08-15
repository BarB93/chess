import React from 'react'
import clsx from 'clsx'
import { Colors } from '../../ts/enums/Colors.enum'

type PawnSVGCmponentProps = {
  color: Colors
}

const PawnSVGCmponent: React.FC<PawnSVGCmponentProps> = ({ color }) => {
  const isLight = color === Colors.LIGTH
  const isDark = color === Colors.DARK

  return (
    <svg
      className={clsx('w-16', isLight && 'fill-white', isDark && 'fill-black')}
      enableBackground='new 0 0 100 100'
      height='100px'
      version='1.1'
      viewBox='0 0 100 100'
      width='100px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g id='white_exp' />
      <g id='black_exp'>
        <path d='M37,38c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,40,37,39.1,37,38z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M50,35   c7.18,0,13-5.82,13-13S57.18,9,50,9s-13,5.82-13,13S42.82,35,50,35z M58,41H42c0,33.478-4.052,33.959-5.99,38H63.99   C62.052,74.959,58,74.478,58,41z' />
      </g>
    </svg>
  )
}

export default PawnSVGCmponent
