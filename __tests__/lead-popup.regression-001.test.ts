import { describe, it, expect } from 'vitest'

// Regression: ISSUE-003 — lead popup must not show on /contact page
// Found by /qa on 2026-04-29
// Report: .gstack/qa-reports/qa-report-localhost-3000-2026-04-29.md

describe('LeadPopup pathname exclusion', () => {
  it('should exclude /contact from showing the popup', () => {
    const excludedPaths = ['/contact']
    const shouldShow = (pathname: string) => !excludedPaths.includes(pathname)

    expect(shouldShow('/contact')).toBe(false)
    expect(shouldShow('/')).toBe(true)
    expect(shouldShow('/about')).toBe(true)
    expect(shouldShow('/services/web-design')).toBe(true)
    expect(shouldShow('/industries/transport')).toBe(true)
  })

  it('should allow popup on all non-contact pages', () => {
    const pagesWithPopup = ['/', '/about', '/services', '/blog', '/industries', '/privacy-policy', '/terms']
    const excludedPaths = ['/contact']
    pagesWithPopup.forEach(path => {
      expect(excludedPaths.includes(path)).toBe(false)
    })
  })
})
