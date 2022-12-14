import React from 'react'
import clsx from 'clsx'
import { Colors } from '../../ts/enums/Colors.enum'

type KingSVGCmponentProps = {
  color: Colors
}

const KingSVGCmponent: React.FC<KingSVGCmponentProps> = ({ color }) => {
  const isLight = color === Colors.LIGTH
  const isDark = color === Colors.DARK

  return (
    <svg
      className={clsx(isLight && 'fill-white', isDark && 'fill-black')}
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
        <path d='M37,36c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,38,37,37.1,37,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34   c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M37,20l0.615,2h24.77   L63,20l-11-4.231V11h2V7h-2V5h-4v2h-2v4h2v4.769L37,20z M59,33l3.077-10H37.923L41,33H59z M40.973,39   c-0.277,29.941-2.637,33.513-3.583,40H62.61c-0.946-6.487-3.306-10.059-3.583-40H40.973z' />
      </g>
    </svg>
  )
}

export default KingSVGCmponent
