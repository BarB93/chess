import React from 'react'
import clsx from 'clsx'

type QueenProps = {
  light?: boolean
}

const Queen: React.FC<QueenProps> = ({ light }) => {
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
        <path d='M63,36c0,1.1-0.9,2-2,2H39c-1.1,0-2-0.9-2-2s0.9-2,2-2h22C62.1,34,63,34.9,63,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z M34.965,23l3.89,10h22.291l3.89-10H34.965   z M65.424,22l2.44-6.275l-3.729-1.45l-1.361,3.501c-1.851-0.886-5.641-1.543-10.218-1.724C53.432,15.318,54,14.231,54,13   c0-2.208-1.791-4-4-4s-4,1.792-4,4c0,1.231,0.568,2.318,1.443,3.052c-4.577,0.181-8.367,0.838-10.218,1.724l-1.361-3.501   l-3.729,1.45L34.576,22H65.424z' />
      </g>
    </svg>
  )
}

export default Queen
