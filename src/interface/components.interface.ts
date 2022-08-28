export interface TypoProps {
  as?: string
  children?: React.ReactNode | any
  className?: string
  attrs?: {}
}

export interface BtnProps extends TypoProps {
  as?: 'button' | 'input' | 'a'
}

export interface InputProps extends TypoProps {
  as?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'date' | 'time' | 'week' | 'url' | 'file' | 'radio' | 'checkbox' | 'select' | 'submit'
  label?: string
  message?: {
    className?: string
    info: string
  }
  data?: string[]
}

export interface RadioOptProps extends InputProps {
  data?: string[]
}

export interface SelectInput extends InputProps {
  data?: string[]
}

export interface SidebarProps {
  data: {text: string, link: string}[]
}

export interface GridProps extends TypoProps {}

export interface ColProps extends TypoProps {
  style?: string
  query?: {to: number, width: number}[]
}