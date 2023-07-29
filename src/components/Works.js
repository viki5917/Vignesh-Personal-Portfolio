import React ,{useEffect}from 'react';
import './works.css';
import VanillaTilt from 'vanilla-tilt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from './data';

function Works() {

 
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card-container"), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      easing:"cubic-bezier(.03,.98,.52,.99)",
      perspective:1000,
    })
  });

  return (

<div className='works' id='Works'>




    <Slider {...settings} className='works-container'>



        {cardData.map((item)=>(
      <div className='work-container' key={item.id}>
          <div className='card-container' >
            <img src={item.imageURL} alt={item.title} className='card-img'/>
            <h1 className='card-title'>{item.title}</h1>
            <p className='card-description'>{item.description} </p>
            <a href={item.linkUrl} className='card-btn' target='_blank'>view site</a>
          </div>
        </div>
          )
          )}

    </Slider>

    </div>

  )
}

export default Works;