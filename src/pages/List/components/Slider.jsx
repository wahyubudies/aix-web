import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Slider = ({ lists }) => {
    return (
        <Splide
            hasTrack={false}
            aria-label=""
            options={{
                width: "100%",
                type: 'loop',
                speed: 1000,
                gap: '20px',
                pagination: true
            }}>

            <div className='flex items-center justify-between mb-10'>
                <h4 className='text-[30px] md:text-[40px] font-semibold text-center'>
                    Who can tokenise?
                </h4>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev w-[2.125rem] md:w-[3.125rem] h-[2.125rem] md:h-[3.125rem] border border-gray-200 rounded-lg hover:bg-[#f3f4f6]">
                        <img src="/assets/img/arrow-top.svg" className='transform -rotate-90 block mx-auto' />
                    </button>
                    <button className="splide__arrow splide__arrow--next w-[2.125rem] md:w-[3.125rem] h-[2.125rem] md:h-[3.125rem] border border-gray-200 rounded-lg hover:bg-[#f3f4f6] ml-2">
                        <img src="/assets/img/arrow-top.svg" className='transform rotate-90  block mx-auto' />
                    </button>
                </div>
            </div>

            <SplideTrack>
                {
                    lists.map(({
                        img,
                        alt,
                        title,
                        desc
                    }, index) => (
                        <SplideSlide key={index}>
                            <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-[#f3f4f6] items-center'>
                                <img src={img} alt={alt} className='w-full max-w-[865px] h-full max-h-[601px] object-cover rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl' />
                                <div className='p-6 md:p-10'>
                                    <h4 className='text-[25px] md:text-[30px] font-semibold'>
                                        {title}
                                    </h4>
                                    <p className='text-[#222222] mt-5 font-semibold'>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))
                }
            </SplideTrack>

            <ul className="splide__pagination"></ul>
        </Splide>
    );
};

export default Slider;