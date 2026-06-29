import { useCallback, useRef, useState } from 'react'

function BeforeAfterSlider({ before, after, label = 'Before and after comparison' }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, next)))
  }, [])

  const handlePointerDown = (event) => {
    draggingRef.current = true
    containerRef.current?.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return
    updatePosition(event.clientX)
  }

  const handlePointerUp = (event) => {
    draggingRef.current = false
    containerRef.current?.releasePointerCapture(event.pointerId)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPosition((value) => Math.max(0, value - 2))
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition((value) => Math.min(100, value + 2))
    }
  }

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="slider"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="ba-layer ba-before">{before}</div>
      <div
        className="ba-layer ba-after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {after}
      </div>
      <div className="ba-handle" style={{ left: `${position}%` }} aria-hidden="true">
        <span className="ba-handle-line"></span>
        <span className="ba-handle-grip"></span>
      </div>
      <span className="ba-label ba-label-before">Before</span>
      <span className="ba-label ba-label-after">After</span>
    </div>
  )
}

export default BeforeAfterSlider
