declare module 'react-lightbox-component' {
  import React from 'react'

  export type LightBoxImage = {
    src: string
    title?: string
    description?: string
  }

  export type LightBoxProps = {
    images: LightBoxImage[]
    showImageModifiers?: boolean
    thumbnailWidth?: string
    thumbnailHeight?: string
  }

  export default class LightBox extends React.Component<LightBoxProps> {}
}
