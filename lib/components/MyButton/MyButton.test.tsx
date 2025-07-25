import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi } from 'vitest'
import { MyButton } from './MyButton'

describe('MyButton test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<MyButton label='Testing' />)
  })

  it('should render label', () => {
    render(<MyButton label='Testing' />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <MyButton
        label='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <MyButton
        onClick={mockFn}
        label='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <MyButton
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})