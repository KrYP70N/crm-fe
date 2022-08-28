import { ColProps, GridProps } from 'interface/components.interface'
import React from 'react'

export const Gird : React.FC<GridProps> = ({as, children}) => {
  const DynamicGridTag = `${as || "div"}` as keyof JSX.IntrinsicElements
  return (
    <DynamicGridTag className='grid'>
      {children}
    </DynamicGridTag>
  )
}

export const Col : React.FC<ColProps> = ({as, children, style}) => {
  const DynamicGridTag = `${as || "div"}` as keyof JSX.IntrinsicElements
  return (
    <DynamicGridTag className='col'>
      {children}
    </DynamicGridTag>
  )
}