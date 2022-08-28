import { TypoProps } from "interface/components.interface";
import React from "react"

const Text : React.FC<TypoProps> = ({as, children, className, attrs}) => {
  
  const DynamicTypoText = `${as || "p"}` as keyof JSX.IntrinsicElements;

  return (
    <DynamicTypoText className={className} {...attrs}>
      {children}
    </DynamicTypoText>
  )
}

export default Text;
