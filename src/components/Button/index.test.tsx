import React from 'react'
import renderer from 'react-test-renderer'
import { Renderer, RendererTree } from 'type/test.type'
import { Btn, buttonVarients } from '.'

it('check default button render', () : void => {
  const component : Renderer = renderer.create(
    <Btn>Button</Btn>
  )

  const tree : RendererTree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('check button with varients render', () : void => {
  let component : Renderer = renderer.create(
    <>
      {
        buttonVarients.map((item : string) : JSX.Element => {
          return (
            <Btn key={item} className={'btn btn--' + item}>Button {item}</Btn>
          )
        })
      }
    </>
  )

  const tree : RendererTree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


