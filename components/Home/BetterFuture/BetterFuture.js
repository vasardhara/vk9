'use client'
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import CommonTitle from '@/components/Common/CommonTitle'
import ImageView from '@/components/Images';
import '@/styles/components/home/_formula.scss'

function BetterFuture() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var betterFuture = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
    };

    return (
        <>
            <section className='v_formula v_future v_pt-0'>
                <div className='v_container'>
                    <div className='v_row'>
                        <div className='v_col-6'>
                            <div className='v_formula-left'>
                                <ImageView src={'/images/home/future/v_future-dog.svg'} className='v_w-full v_h-full' alt="v_future-dog" />
                            </div>
                        </div>
                        <div className='v_col-6'>
                            <div className='v_formula-right'>
                                <CommonTitle title='VK9 is committed to a sustainable, better future' description='' />

                                <div className='v_formula-right-slider'>
                                    {isMobile ? (
                                        <Slider {...betterFuture}>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>1% for the Planet</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi. </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>Climate Neutral Now</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>Metal Recycles Forever</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi.</p>
                                                </div>
                                            </div>
                                        </Slider>
                                    ) : (
                                        <>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>1% for the Planet</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi. </p>
                                            </div>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>Climate Neutral Now</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi.</p>
                                            </div>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>Metal Recycles Forever</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nibh sit amet neque facilisis ultricies vitae non mi.</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <button className='v_button'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default BetterFuture; 