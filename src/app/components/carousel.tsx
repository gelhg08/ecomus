'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full h-80">
      <Slider {...settings}>
        <div className="flex h-full">
          <div className="w-1/2 flex items-center justify-center p-4 bg-white bg-opacity-70">
            <div>
              <h2 className="text-2xl font-bold mb-2">Texto 1</h2>
              <p className="text-lg">Descripción del primer ítem del carrusel.</p>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image 
              src="/icons/luna.jpg" 
              alt="Imagen 1" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-1/2 flex items-center justify-center p-4 bg-white bg-opacity-70">
            <div>
              <h2 className="text-2xl font-bold mb-2">Texto 2</h2>
              <p className="text-lg">Descripción del segundo ítem del carrusel.</p>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image 
              src="/icons/kj.png" 
              alt="Imagen 2" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>
        {/* Agrega más ítems aquí */}
      </Slider>
    </div>
  );
};

export default Carousel;

