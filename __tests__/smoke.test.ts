import { describe, it, expect } from 'vitest'

describe('Smoke test', () => {
  it('test framework is working', () => {
    expect(true).toBe(true)
  })

  it('basic string operations', () => {
    const siteName = 'Unitaspro'
    expect(siteName.toLowerCase()).toBe('unitaspro')
  })
})
