import React from 'react'
import renderer from 'react-test-renderer'

// @ts-ignore
import * as gatsby from '../../__mocks__/gatsby'
import { DateUtil } from '../util'
import BlogPage from './blog'

interface IStaticQuery {
  render: (object: {
    site: { siteMetadata: { title: string } }
  }) => React.ReactNode
}

beforeEach(() => {
  gatsby.StaticQuery.mockImplementationOnce(({ render }: IStaticQuery) =>
    render({
      site: {
        siteMetadata: {
          title: `Matt Dalzell - Ace Programmer`,
        },
      },
    })
  )
  DateUtil.getCurrentYear = jest.fn(() => 2019)
})

describe('BlogPage', () => {
  const mockProps = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              fields: { slug: 'test-1' },
              frontmatter: {
                date: new Date('5/1/2019').toDateString(),
                tags: ['red', 'blue'],
                title: 'Test #1',
              },
              id: 1,
            },
          },
          {
            node: {
              fields: { slug: '/test-2' },
              frontmatter: {
                date: new Date('4/1/2019').toDateString(),
                tags: ['red'],
                title: 'Test #2',
              },
              id: 2,
            },
          },
        ],
        group: [
          { fieldValue: 'red', totalCount: 2 },
          { fieldValue: 'blue', totalCount: 1 },
        ],
      },
    },
    location: {
      search: '',
    },
  }
  it('should match snapshot for default view', () => {
    const component = renderer.create(<BlogPage {...mockProps} />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
