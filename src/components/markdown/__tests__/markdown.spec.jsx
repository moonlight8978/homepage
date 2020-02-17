import React from 'react'
import { render } from '@testing-library/react'

import Markdown from '../markdown'

const content = `# Introduction

This is an introduction section.

# 1 First section

## 1.1 First sub heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### 1.1.1 First inner heading
The \`map\` function is so declarative.
![Image](https://example.com/example.png)

## 1.2 Second sub heading
This is a long paragraph, contains **bold text**, links, and many more.
[See more here](https://example.com)

# 2 Second section
> This is a blockquote

# 3 Code sample
\`\`\`javascript
import React from 'react'
\`\`\`

# List demo
* Try hard
* Try harder

1. Prepare
2. Go

# 4 Table
| Name | Age | Address |
| ---- | :-: | ------: |
| A    | 12  | xyz     |
| B    | 21  | abc     |
`

test('renders correctly', () => {
  const { container, getByText, getByTestId } = render(
    <Markdown content={content} />
  )

  const heading = getByText('1.2 Second sub heading')
  expect(heading).toBeInTheDocument()
  expect(heading.tagName).toBe('H2')

  const image = getByTestId('markdown-image')
  expect(image.getAttribute('src')).toBe('https://example.com/example.png')
  expect(image.getAttribute('alt')).toBe('Image')
  const imageCaption = getByText('Image')
  expect(imageCaption).toBeInTheDocument()

  const link = getByText('See more here')
  expect(link).toBeInTheDocument()
  expect(link.getAttribute('href')).toBe('https://example.com')

  const strong = getByText('bold text')
  expect(strong).toBeInTheDocument()
  expect(strong.tagName).toBe('STRONG')

  const inlineCode = getByText('map')
  expect(inlineCode).toBeInTheDocument()
  expect(inlineCode.tagName).toBe('CODE')

  const blockquote = getByTestId('markdown-blockquote')
  expect(blockquote.textContent).toBe('This is a blockquote')

  const code = getByText(`import React from 'react'`)
  expect(code).toBeInTheDocument()
  expect(code.tagName).toBe('CODE')
  expect(code.classList).toContain('language-javascript')

  expect(container.firstChild).toMatchSnapshot()
})
