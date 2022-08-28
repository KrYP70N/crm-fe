import renderer from 'react-test-renderer';
import { Renderer, RendererTree } from 'type/test.type';
import Text from './index';

it('check Text render', () : void => {
  const component : Renderer = renderer.create(
    <Text>Laborum nostrud nisi dolore et. Duis nostrud consequat sint exercitation anim consectetur aliqua ad. Aliquip esse fugiat sit magna. Sunt eu cillum laborum labore est et ex eu laboris in veniam tempor magna fugiat. Deserunt dolore qui aute veniam mollit nisi proident Lorem exercitation excepteur fugiat minim.</Text>
  )
  
  let tree : RendererTree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('check Text as Title render', () : void => {
  const titles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const component = renderer.create(
    <>
      {
        titles.map((item : string) : JSX.Element => <Text as={item} key={item}>Title as {item}</Text>)
      }
    </>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

