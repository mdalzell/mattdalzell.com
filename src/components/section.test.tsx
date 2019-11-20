import React from 'react'
import renderer from 'react-test-renderer'

import Section from './section'

describe('Section', () => {
  it('should match basic snapshot', () => {
    const subsections = [
      { content: 'some stuff', heading: 'thing1' },
      { content: 'other stuff', heading: 'thing2' },
    ]
    const component = renderer.create(
      <Section title="Test Section" subsections={subsections} />
    )

    expect(component).toMatchSnapshot()
  })
})
