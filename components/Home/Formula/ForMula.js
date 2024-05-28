'use client'
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import CommonTitle from '@/components/Common/CommonTitle'
import ImageView from '@/components/Images';
import '@/styles/components/home/_formula.scss'

function ForMula() {

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

    var formula = {
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
            <section className='v_formula v_pb-0'>
                <div className='v_container'>
                    <div className='v_row'>
                        <div className='v_col-6'>
                            <div className='v_formula-left'>
                                <ImageView src={'/images/home/formula/v_formula-dog.svg'} className='v_w-full v_h-full' alt="v_formula-dog" />
                            </div>
                        </div>
                        <div className='v_col-6'>
                            <div className='v_formula-right'>
                                <CommonTitle title='The most scientifically advanced formula to ever be slurped.' description='' />

                                <div className='v_formula-right-slider'>
                                    {isMobile ? (
                                        <Slider {...formula}>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>Probiotics</h5>
                                                    <p>Supports gut health for improved stool quality and immunity</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>Vitamins C and E</h5>
                                                    <p>Important antioxidants for cell health and protection against free radicals</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>Zinc and biotin</h5>
                                                    <p>Help to support skin and coat health</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='v_formula-right-slider-inner'>
                                                    <h5>B vitamins</h5>
                                                    <p>Assist with energy, metabolism and enzyme function</p>
                                                </div>
                                            </div>
                                        </Slider>
                                    ) : (
                                        <>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>Probiotics</h5>
                                                <p>Supports gut health for improved stool quality and immunity</p>
                                            </div>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>Vitamins C and E</h5>
                                                <p>Important antioxidants for cell health and protection against free radicals</p>
                                            </div>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>Zinc and biotin</h5>
                                                <p>Help to support skin and coat health</p>
                                            </div>
                                            <div className='v_formula-right-slider-inner'>
                                                <h5>B vitamins</h5>
                                                <p>Assist with energy, metabolism and enzyme function</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <button className='v_button'>More essential nutrition</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ForMula; 