import { Btn, buttonVarients } from "components/Button";
import Text from "components/Typography";
import React from "react";

const Button = () : JSX.Element => {

  const getVarientClass = (varient : string) : string => varient === '' ? '' : 'btn--' + varient

  return (
    <article id="button">
      <Text as='h1' className='txt-center'>Button</Text>
      
      <section className='sec'>
        <h2>Button</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + " mgr-16"}>Button {item}</Btn>
            )
          })
        }
        <Btn className="btn">Default Btn</Btn>
      </section>

      <section className='sec'>
        <h2>Button Outline</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + '--outline' + ' mgr-16'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Button Filled Outline</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + '--outline-filled' + ' mgr-16'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Radius Button</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + ' mgr-16 btn--radius'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Medium Button</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + ' mgr-16 btn--medium'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Large Button</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + ' mgr-16 btn--large'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Block Button</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn key={item} className={getVarientClass(item) + ' mgr-16 btn--block'}>Button {item}</Btn>
            )
          })
        }
      </section>

      <section className='sec'>
        <h2>Button as Link</h2>
        <hr/>
        {
          buttonVarients.map((item : string) : JSX.Element=> {
            return (
              <Btn 
              attrs={{
                href: 'https://google.com'
              }}
              as="a" key={item} className={getVarientClass(item) + ' mgr-16'}>Button {item}</Btn>
            )
          })
        }
      </section>
    </article>
  )
}

export default Button