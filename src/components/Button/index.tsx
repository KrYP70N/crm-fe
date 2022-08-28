import { BtnProps } from "interface/components.interface";
import React from "react";

export const buttonVarients : string[] = ['', 'primary', 'secondary', 'tertiary', 'dark', 'danger', 'disabled', 'light']

export const Btn : React.FC<BtnProps> = ({as, children, className, attrs}) => {
  const DynamicBtnTag = as || 'button'
  return (
    <DynamicBtnTag className={`btn ${className}`.replaceAll('  ', ' ')} {...attrs}>{children}</DynamicBtnTag>
  )
}