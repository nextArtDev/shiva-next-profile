'use client'
import { FC, useEffect, useRef, useState } from 'react'
// import image1 from '../../public/images/1.jpg'
// import image2 from '../../public/images/2.jpg'
// import image3 from '../../public/images/3.jpg'
// import image4 from '../../public/images/4.jpg'
// import image5 from '../../public/images/5.jpg'
interface GalleryProps {}
const ITEM_DISTANCE = 360
const SHIFT_DISTANCE = 800
const RANGE = 2
const SHIFT_ANGLE = 30

const imageData = [
  { id: 1, src: '/images/1.jpg' },
  { id: 2, src: '/images/2.jpg' },
  { id: 3, src: '/images/3.jpg' },
  { id: 4, src: '/images/4.jpg' },
  { id: 5, src: '/images/5.jpg' },
  { id: 11, src: '/images/1.jpg' },
  { id: 12, src: '/images/2.jpg' },
  { id: 13, src: '/images/3.jpg' },
  { id: 14, src: '/images/4.jpg' },
  { id: 15, src: '/images/5.jpg' },
]
const Gallery: FC<GalleryProps> = ({}) => {
  const el = useRef<HTMLDivElement>(null)
  let currentIndex: number
  let startY: number
  let isDragging: boolean = false

  useEffect(() => {
    // Setup item positions and angels
    target(0)
    currentIndex = 0

    // Enable scrolling via mousewheel
    el.current!.parentElement!.onwheel = (e: WheelEvent) => {
      const deltaY = Math.abs(e.deltaY) > 100 ? e.deltaY * 0.01 : e.deltaY * 0.2
      const delta = Math.floor(deltaY)
      let nextIndex = currentIndex + delta
      if (nextIndex < 0) nextIndex = 0
      if (nextIndex >= el.current!.children.length)
        nextIndex = el.current!.children.length - 1
      target(nextIndex)
    }

    // Enable scrolling via touch events
    el.current!.addEventListener('touchstart', handleTouchStart, false)
    el.current!.addEventListener('touchmove', handleTouchMove, false)
    el.current!.addEventListener('touchend', handleTouchEnd, false)

    return () => {
      // Remove event listeners when component unmounts
      el.current!.parentElement!.onwheel = null
      el.current!.removeEventListener('touchstart', handleTouchStart)
      el.current!.removeEventListener('touchmove', handleTouchMove)
      el.current!.removeEventListener('touchend', handleTouchEnd)
    }
  }, [imageData])

  // Handle touch events
  function handleTouchStart(e: TouchEvent) {
    startY = e.touches[0].clientY
    isDragging = true
  }

  function handleTouchMove(e: TouchEvent) {
    if (!isDragging) return

    let deltaY = startY - e.touches[0].clientY
    deltaY = Math.abs(deltaY) > 100 ? deltaY * 0.01 : deltaY * 0.2

    let nextIndex = currentIndex + Math.floor(deltaY)
    if (nextIndex < 0) nextIndex = 0
    if (nextIndex >= el.current!.children.length)
      nextIndex = el.current!.children.length - 1
    target(nextIndex)
  }

  function handleTouchEnd(e: TouchEvent) {
    isDragging = false
  }

  // Target an item, bring it to center
  function target(index: number) {
    const gallery = el.current!
    const items = gallery.children
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement
      const shiftDelta = (RANGE - Math.abs(i - index)) * 400 + 120
      if (index == i)
        item.style.transform = `translateZ(${SHIFT_DISTANCE}px) translateX(${
          i * ITEM_DISTANCE
        }px)`
      else if (i < index && index - i <= RANGE)
        item.style.transform = `translateX(${
          i * ITEM_DISTANCE
        }px) translateZ(${shiftDelta}px) rotateY(${-SHIFT_ANGLE}deg)`
      else if (i > index && i - index <= RANGE)
        item.style.transform = `translateX(${
          i * ITEM_DISTANCE
        }px) translateZ(${shiftDelta}px) rotateY(${SHIFT_ANGLE}deg)`
      else item.style.transform = `translateX(${i * ITEM_DISTANCE}px)`
    }
    // Shift the gallery
    gallery.style.transform = `translateZ(-800px) translateX(${
      -index * ITEM_DISTANCE
    }px)`
    currentIndex = index
  }

  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center overflow-hidden">
      <h2 className="text-center text-2xl m-2">گالری تصاویر</h2>
      <section className="container my-4 ">
        <div ref={el} className="photo-scroll">
          {imageData.map((image, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image.src})` }}
              className="photo-scroll-item z-10"
            ></div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Gallery
