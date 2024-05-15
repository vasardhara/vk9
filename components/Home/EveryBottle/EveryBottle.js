'use client'
import React from 'react';
import Slider from "react-slick";
import CommonTitle from '@/components/Common/CommonTitle'
import ImageView from '@/components/Images';
import '@/styles/components/home/_every-bottle.scss'

function EveryBottle() {
    var everyBottleSlider = {
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
            <section className='v_bottle'>
                <div className='v_container'>
                    <CommonTitle title='...in every bottle' description='' />
                    <div className='v_bottle-inner'>
                        <ul className='v_bottle-inner-left'>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-1.svg`} alt="v_icon-1" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Healthier skin</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-2.svg`} alt="v_icon-2" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Antioxidants</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-3.svg`} alt="v_icon-3" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Better metabolic function</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='v_bottle-inner-center'>
                            <li><ImageView src={`/images/home/every/v_bottle.svg`} alt="slider-1" width={255} height={728} /></li>

                            <ul className='v_bottle-inner-center-slider'>
                                <Slider {...everyBottleSlider}>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-1.svg`} alt="v_icon-1" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Healthier skin</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-2.svg`} alt="v_icon-2" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Antioxidants</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-3.svg`} alt="v_icon-3" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Better metabolic function</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-4.svg`} alt="v_icon-1" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Healthier skin</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-5.svg`} alt="v_icon-2" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Antioxidants</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className='v_bottle-inner-li'>
                                            <div className='v_bottle-inner-li-icon'>
                                                <ImageView src={`/images/home/every/v_icon-6.svg`} alt="v_icon-3" className='v_w-full v_h-full' />
                                            </div>
                                            <div className='v_bottle-inner-li-content'>
                                                <h4>Better metabolic function</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </li>
                                    </div>
                                </Slider>

                                <button className='v_button v_button-secondary v_w-full'>Shop VK9</button>
                            </ul>

                        </ul>
                        <ul className='v_bottle-inner-right'>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-4.svg`} alt="v_icon-1" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Healthier skin</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-5.svg`} alt="v_icon-2" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Antioxidants</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li className='v_bottle-inner-li'>
                                <div className='v_bottle-inner-li-icon'>
                                    <ImageView src={`/images/home/every/v_icon-6.svg`} alt="v_icon-3" className='v_w-full v_h-full' />
                                </div>
                                <div className='v_bottle-inner-li-content'>
                                    <h4>Better metabolic function</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
};

export default EveryBottle; 