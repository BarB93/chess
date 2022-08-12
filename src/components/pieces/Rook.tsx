import React from 'react'
import clsx from 'clsx'

type RookProps = {
  light?: boolean
}

const Rook: React.FC<RookProps> = ({ light }) => {
  return (
    <svg
      className={clsx(light && 'fill-stone-300')}
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
        <path d='M31,25V10h7v6h6v-6h12v6h6v-6h7v15c0,2.2-1.8,4-4,4H35C32.8,29,31,27.2,31,25z M65,34c1.1,0,2-0.9,2-2s-0.9-2-2-2H35   c-1.1,0-2,0.9-2,2s0.9,2,2,2H65z M30,84h40c1.1,0,2-0.9,2-2s-0.9-2-2-2H30c-1.1,0-2,0.9-2,2S28.9,84,30,84z M73,85H27   c-2.2,0-4,1.8-4,4s1.8,4,4,4h46c2.2,0,4-1.8,4-4S75.2,85,73,85z M68.262,79C66.464,72.751,62,70.139,62,35H38   c0,35.139-4.464,37.751-6.262,44H68.262z' />
      </g>
    </svg>
  )
}

export default Rook
