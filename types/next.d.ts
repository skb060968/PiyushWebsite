declare module 'next/image' {
  import { ComponentType } from 'react'
  
  interface ImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    priority?: boolean
    fill?: boolean
    sizes?: string
    quality?: number
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    onLoad?: () => void
    onError?: () => void
    style?: React.CSSProperties
  }
  
  const Image: ComponentType<ImageProps>
  export default Image
}