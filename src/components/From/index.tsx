import Text from "components/Typography";
import { InputProps, RadioOptProps, SelectInput } from "interface/components.interface";
import React from "react";

const InputWrapper : React.FC<InputProps> = ({children, label, message}) => {
  return (
    <div className="form-ctrl">
      {label && <label>{label}</label>}
      { children }
      {message && <Text as='small' className={'message ' + message.className}>{message.info}</Text>}
    </div>
  )
}

const RadioInput : React.FC<RadioOptProps> = ({data, label}) => {
  return (
    <ul className='radio-list'>
      {
        data?.map(item => {
          return (
            <li className='radio-wrapper' key={item}>
              <input type='radio' value={item} name={label}/>
              <label>{item}</label>
            </li>
          )
        })
      }
    </ul>
  )
}

const Select : React.FC<SelectInput> = ({data}) => {
  return (
    <select>
      {
        data?.map(item => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })
      }
    </select>
  )
}

const Input : React.FC<InputProps> = ({as, attrs, label, message, data}) => {

  if(as === 'radio') {
    return (
      <InputWrapper label={label} message={message} {...attrs}>
        <RadioInput data={data} label={label}/>
      </InputWrapper>
    )
  }

  if(as === 'select') {
    return (
      <InputWrapper label={label} message={message} {...attrs}>
        <Select data={data} label={label}/>
      </InputWrapper>
    )
  }

  return (
    <InputWrapper label={label} message={message} {...attrs}>
      <input type={as} {...attrs}/>
    </InputWrapper>
  )
}

export default Input
