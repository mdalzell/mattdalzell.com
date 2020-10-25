import React from 'react'
import renderer from 'react-test-renderer'

import { DateUtil } from '../util'
import BlogPage from './blog'

beforeEach(() => {
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
      featuredPosts: {
        edges: [],
      },
      markdownRemark: {
        html:
          'These blog posts are my own ill-conceived musings as a software engineer, and do not represent the views of any employer or client, past or present.',
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
