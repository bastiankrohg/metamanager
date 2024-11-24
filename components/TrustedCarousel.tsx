'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
// configure Swiper to use modules
//Swiper.use([Navigation, Pagination, Autoplay]);
import Image from 'next/image';

const TrustedCarousel = () => {
  const companies = [
    { name: 'Company 1', image: '/images/company1.png', width: 200, height: 100 },
    { name: 'Company 2', image: '/images/company2.png', width: 200, height: 100 },
    { name: 'Company 3', image: '/images/company3.png', width: 200, height: 100 },
    { name: 'Company 4', image: '/images/company4.png', width: 200, height: 100 },
    { name: 'Company 5', image: '/images/company5.png', width: 200, height: 100 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted by Leading Companies</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop
          navigation
          modules={[Navigation]}
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="h-20 flex justify-center items-center">
                <Image
                  src={company.image}
                  alt={company.name}
                  layout="fill"
                  className="object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedCarousel;