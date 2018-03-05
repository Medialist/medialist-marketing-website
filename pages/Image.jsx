import React from 'react'

export function toImgUrl ({relative, imgPath, imgId, width}) {
  return relative(`${imgPath}/${imgId}-${width}w.jpg`)
}

export function toSrcSet ({relative, imgPath, imgId, widths}) {
  const src = widths.map(width => {
    const url = toImgUrl({relative, imgPath, imgId, width})
    return `${url} ${width}w`
  })
  return src.join(',')
}

export const SrcSetImage = ({relative, imgPath, imgId, widths, ...props}) => {
  const src = toImgUrl({relative, imgPath, imgId, width: widths[0]})
  const srcSet = toSrcSet({relative, imgPath, imgId, widths})
  return <img {...props} src={src} srcSet={srcSet} />
}
