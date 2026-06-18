"use client"

import { useEffect, useRef } from "react"
import { animate } from "animejs"

export function WalkingDog() {
  const containerRef = useRef<HTMLDivElement>(null)
  const dogRef = useRef<HTMLDivElement>(null)
  const bobRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const dog = dogRef.current
    const bob = bobRef.current
    if (!container || !dog || !bob) return

    const startX = container.offsetWidth + 20

    animate(dog, {
      translateX: [startX, -40],
      duration: 14000,
      loop: true,
      easing: "linear",
    })

    animate(bob, {
      translateY: [0, -3],
      alternate: true,
      loop: true,
      duration: 380,
      easing: "easeInOutSine",
    })

    return () => {}
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-8 overflow-hidden border-b border-border"
    >
      <div
        ref={dogRef}
        style={{ position: "absolute", top: "50%", marginTop: "-10px" }}
      >
        <span
          ref={bobRef}
          style={{ display: "inline-block", fontSize: "1.1rem", transform: "scaleX(-1)" }}
        >
          🐕
        </span>
      </div>
    </div>
  )
}
