import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const BookIcon: FC<IPropsIcon> = ({
  color,
  className,
  styles
}): JSX.Element => {
  return (
    <>
      <svg
        className={className}
        viewBox='0 0 24 24'
        style={styles}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  )
}
