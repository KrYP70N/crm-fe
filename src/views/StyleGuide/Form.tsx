import Input from "components/From";
import Text from "components/Typography";
import React from "react";

const Form = (): JSX.Element => {
  return (
    <article id='form'>
      <Text as='h1' className='txt-center'>Form Elements</Text>
      <hr />
      <section className='sec'>
        <Input
          message={{ info: 'test error message', className: 'error' }}
          label="Name"
          attrs={{
            placeholder: 'eg: Kyaw Myo Htut'
          }} />

        <Input
          as='password'
          message={{ info: 'test information' }}
          label="Password"
          attrs={{
            placeholder: 'your password'
          }} />

        <Input
          as='email'
          message={{ info: 'test highlight info', className: 'primary' }}
          label="Email"
          attrs={{
            placeholder: 'eg: kyawmyohtut29@gmail.com'
          }} />

        <Input
          as='tel'
          label="Telephone"
          attrs={{
            placeholder: '+95 9 402159215'
          }} />

        <Input
          as='date'
          label="Date of Birth"
          attrs={{
            placeholder: 'YYYY/MM/DD'
          }} />

        <Input
          message={{
            info: 'test information'
          }}
          as='radio'
          data={['a', 'b', 'c']}
          label="Radio Options"
          attrs={{
            placeholder: 'YYYY/MM/DD'
          }} />

        <Input
          message={{
            info: 'test information'
          }}
          as='select'
          data={['option 1', 'option 2', 'option 3']}
          label="Radio Options"
          attrs={{
            placeholder: 'YYYY/MM/DD'
          }} />
      </section>

    </article>
  )
}

export default Form
