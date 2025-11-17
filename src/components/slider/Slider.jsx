import { useState } from 'react'
import './slider.scss'

const Slider = ({ images }) => {

  const [imageIndex, setImageIndex] = useState(null)

  const changeSlide = (direction) => {

    if (direction == "right") {
      if (imageIndex == 3) {
        setImageIndex(0)
      }
      else {
        setImageIndex((prev) => (prev + 1))
      }
    }
    else {
      if (imageIndex == 0) {
        setImageIndex(3)
      }
      else {
        setImageIndex((prev) => (prev - 1))
      }
    }

  }

  return (
    <div className="slider">
      {
        imageIndex != null && (<div className="fullSlider">
          <div className="arrow">
            <img className='left' src="/arrow.png" alt="" onClick={() => changeSlide("left")} />
          </div>
          <div className='imgContainer'>
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img className='right' src="/arrow.png" alt="" onClick={() => changeSlide("right")} />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>X</div>
        </div>)
      }
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {
          images.slice(1).map((image, index) => (
            <img src={image} key={index} alt="" onClick={() => setImageIndex(index + 1)} />
          ))
        }
      </div>
    </div>
  )
}

export default Slider