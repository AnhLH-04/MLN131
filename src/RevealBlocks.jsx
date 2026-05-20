import { Children } from 'react'
import { Reveal } from './Reveal.jsx'

/**
 * Mỗi node con trực tiếp = một Reveal riêng (fade + trượt từ dưới), delay lệch dần.
 */
export function RevealBlocks({ children, step = 60, baseDelay = 0, className = '' }) {
  return Children.map(children, (child, i) => {
    if (child == null || child === false) return null
    return (
      <Reveal key={i} delay={baseDelay + i * step} className={className}>
        {child}
      </Reveal>
    )
  })
}
