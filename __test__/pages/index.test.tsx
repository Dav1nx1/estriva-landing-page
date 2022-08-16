import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home Page', () => {
  it('renders hello world', () => {
    const { container } = render(<Home />)
    const helloWorld = screen.getByText('hello-world')

    expect(helloWorld).toBeInTheDocument()
  })
 })