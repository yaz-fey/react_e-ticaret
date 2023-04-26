import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>


        <div className='!flex  items-center bg-gray-100 px-6'>

          <div className=''>
            <div className='text-6xl font-bold'>En kaliteli ayakkabılar burada</div>
            <div className='text-lg my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditii</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 my-4' > İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/49562b72-983a-4c8a-b4d0-addcb9d068ca/air-max-95-ayakkab%C4%B1s%C4%B1-5kFcMR.png" alt="" />
        </div>
        <div className='!flex  items-center bg-gray-100 px-6'>
          <div className=''>
            <div className='text-6xl font-bold'>En kaliteli ayakkabılar burada</div>
            <div className='text-lg my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditii</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 my-4' > İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/11bd4de0-9bc3-4132-8e31-3cdbff732ec9/wearallday-ayakkab%C4%B1s%C4%B1-PDB9Wd.png" alt="" />

        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SliderComp