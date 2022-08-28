import { Col, Gird } from 'components/Grid'
import Sidebar from 'components/Sidebar'
import React from 'react'
import Button from './Button'
import Form from './Form'
import TypoGraphy from './Typography'

const StyleGuide = () : JSX.Element => {
  return (
    <main id='style-guide' className='container'>
      <Gird>
        <Col>
          <Sidebar data={[
            {
              text: 'Typo',
              link: '#typo'
            },
            {
              text: 'Button',
              link: '#button'
            },
            {
              text: 'Form',
              link: '#form'
            }
          ]}/>
        </Col>
      </Gird>
      <Col>
        <TypoGraphy />  
        <Button />
        <Form />
      </Col>
    </main>
  )
}

export default StyleGuide