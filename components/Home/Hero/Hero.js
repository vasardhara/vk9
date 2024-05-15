'use client'
import React from 'react';
import Slider from 'react-slick';
import ImageView from '@/components/Images';
import '@/styles/components/home/_home-hero.scss'

function HomeHero() {
    const heroSlider = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
    };
    return (
        <>
            <div className='v_hero'>
                <Slider {...heroSlider}>
                    <div>
                        <div className='v_hero-slider'>
                            <div className='v_hero-slider-img'>
                                <ImageView src={`/images/home/hero/v_slider-1.svg`} alt="slider-1" className='v_w-full v_h-full' />
                            </div>
                            <div className='v_container'>
                                <div className='v_hero-slider-content v_slider-1'>
                                    <h2>Happy Makes Happy</h2>
                                    <p>Multivitamin pet beverage with 100% essential nutrition. 0% left at the bottom of the bowl.</p>
                                    <button className='v_button v_button-white'>Shop VK9</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='v_hero-slider'>
                            <div className='v_hero-slider-img'>
                                <ImageView src={`/images/home/hero/v_slider-2.svg`} alt="slider-2" className='v_w-full v_h-full' />
                            </div>
                            <div className='v_container'>
                                <div className='v_hero-slider-content v_slider-2'>
                                    <h2>Happy Makes Happy</h2>
                                    <p>Multivitamin pet beverage with 100% essential nutrition. 0% left at the bottom of the bowl.</p>
                                    <button className='v_button v_button-white'>Shop VK9</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='v_hero-slider'>
                            <div className='v_hero-slider-img'>
                                <ImageView src={`/images/home/hero/v_slider-3.svg`} alt="slider-3" className='v_w-full v_h-full' />
                            </div>
                            <div className='v_container'>
                                <div className='v_hero-slider-content v_slider-2 v_slider-3'>
                                    <h2>Happy Makes Happy. VK9</h2>
                                    <p>Multivitamin pet beverage with 100% essential nutrition. 0% left at the bottom of the bowl.</p>
                                    <button className='v_button v_button-white'>Shop VK9</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default HomeHero; 