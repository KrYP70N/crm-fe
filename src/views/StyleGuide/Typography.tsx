import Text from "components/Typography";
import React from "react";

const TypoGraphy = () : JSX.Element => {
  return (
    <article id='typo'>
      <Text as='h1' className='txt-center'>Typography</Text>
      
      <section className='sec'>
        <Text as='h2'>Paragarph</Text>
        <hr/>
        <Text>Ullamco minim id ea commodo do eu ut et. Qui pariatur elit in enim sit reprehenderit fugiat excepteur ex. Ex exercitation labore elit tempor sunt exercitation anim non laborum ipsum cillum.</Text>
      </section>
      
      <section className='sec'>
        <Text as='h2'>Title</Text>
        <hr/>
        <Text as='h1'>Title 1</Text>
        <Text as='h2'>Title 2</Text>
        <Text as='h3'>Title 3</Text>
        <Text as='h4'>Title 4</Text>
        <Text as='h5'>Title 4</Text>
        <Text as='h6'>Title 4</Text>
      </section>
    </article>
  )
}

export default TypoGraphy