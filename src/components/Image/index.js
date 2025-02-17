import React from 'react'
import { useState, forwardRef } from 'react'
import images from '@/assets/images'
import classNames from 'classnames/bind'
import styles from './img.module.scss'
const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState(null);

  const handleError = () => {

    if (fallback !== customFallBack) {
      setFallback(customFallBack);
    }
  }

  return (
    <img className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError} />
  )

})

export default Image