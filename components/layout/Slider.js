import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import slideimg1 from '../../public/images/slide_1.jpg'
import slideimg2 from '../../public/images/slide_2.jpg'
import slideimg3 from '../../public/images/slide_3.jpg'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slider = (props) => {

    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
      loop: true,
      duration: 1000,
      dragStart: () => {
        setPause(true)
      },
      dragEnd: () => {
        setPause(false)
      },
    })
  
    React.useEffect(() => {
      sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
      })
      sliderRef.current.addEventListener("mouseout", () => {
        setPause(false)
      })
    }, [sliderRef])
  
    React.useEffect(() => {
      timer.current = setInterval(() => {
        if (!pause && slider) {
          slider.next()
        }
      }, 5000)
      return () => {
        clearInterval(timer.current)
      }
    }, [pause, slider])

    return (
        <div id="fh5co-home" class="js-fullheight" data-section="home">
            <div class="flexslider">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-text">
                    <div class="container">
                        <div class="row text-center">
                            <h1 class="animate-box">NAGROBKI - PARAPETY - SCHODY</h1>
                            <div class="fh5co-go animate-box">
                                <a href="#" class="js-fh5co-next">
                                    Zobacz Ofertę
                                    <span><i class="icon-arrow-down2"></i></span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1"><Image src={slideimg1}/></div>
                        <div className="keen-slider__slide number-slide1"><Image src={slideimg2}/></div>
                        <div className="keen-slider__slide number-slide1"><Image src={slideimg1}/></div>
                        <div className="keen-slider__slide number-slide1"><Image src={slideimg3}/></div>
                        <div className="keen-slider__slide number-slide1"><Image src={slideimg1}/></div>
                    </div>
                </>

            </div>
        </div>

    )
}

export default Slider
