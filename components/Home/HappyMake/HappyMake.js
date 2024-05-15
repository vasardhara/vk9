'use client'
import React from 'react';
import Slider from "react-slick";
import CommonTitle from '@/components/Common/CommonTitle';
import { V_CommentIcon, V_HeartIcon, V_LeftArrowIcon, V_RightArrowIcon, V_ShareIcon } from '@/components/Icon';
import ImageView from '@/components/Images';
import '@/styles/components/home/_customersay.scss'


export const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className='slick-arrow slick-prev'
            onClick={onClick}
        > <V_LeftArrowIcon width='20px' height='20px' />
        </div>
    );
};

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className='slick-arrow slick-next'
            onClick={onClick}
        >
            <V_RightArrowIcon width='20px' height='20px' />
        </div>
    );
};

function CustomerSay() {
    var happyMake = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
        ]
    };

    return (
        <>
            <section className='v_customer v_happy'>
                <div className='v_container'>
                    <div className='v_row'>
                        <div className='v_col-12 v_text-center'>
                            <CommonTitle title='Happy Makes Happy' description='' tag='Join us @vitamink9' />
                        </div>
                        <div className='v_col-12'>
                            <div className='v_customer-content'>
                                <Slider {...happyMake}>
                                    <div>
                                        <div className='v_customer-content-inner'>
                                            <div className='v_customer-content-inner-img'>
                                                <ImageView src={'/images/home/happy/v_happy-1.svg'} className='v_w-full v_h-full' alt="v_happy-1" />
                                            </div>
                                            <div className='v_customer-content-inner-dec'>
                                                <div className='v_flex v_align-center'>
                                                    <V_HeartIcon className='v_mr-10 v_cp' />
                                                    <V_CommentIcon className='v_mr-10 v_cp' />
                                                    <V_ShareIcon className="v_cp" />
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet eleifend pellentesque. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='v_customer-content-inner'>
                                            <div className='v_customer-content-inner-img'>
                                                <ImageView src={'/images/home/happy/v_happy-2.svg'} className='v_w-full v_h-full' alt="v_happy-2" />
                                            </div>
                                            <div className='v_customer-content-inner-dec'>
                                                <div className='v_flex v_align-center'>
                                                    <V_HeartIcon className='v_mr-10 v_cp' />
                                                    <V_CommentIcon className='v_mr-10 v_cp' />
                                                    <V_ShareIcon className="v_cp" />
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet eleifend pellentesque. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='v_customer-content-inner'>
                                            <div className='v_customer-content-inner-img'>
                                                <ImageView src={'/images/home/happy/v_happy-3.svg'} className='v_w-full v_h-full' alt="v_happy-3" />
                                            </div>
                                            <div className='v_customer-content-inner-dec'>
                                                <div className='v_flex v_align-center'>
                                                    <V_HeartIcon className='v_mr-10 v_cp' />
                                                    <V_CommentIcon className='v_mr-10 v_cp' />
                                                    <V_ShareIcon className="v_cp" />
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet eleifend pellentesque. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='v_customer-content-inner'>
                                            <div className='v_customer-content-inner-img'>
                                                <ImageView src={'/images/home/happy/v_happy-4.svg'} className='v_w-full v_h-full' alt="v_happy-4" />
                                            </div>
                                            <div className='v_customer-content-inner-dec'>
                                                <div className='v_flex v_align-center'>
                                                    <V_HeartIcon className='v_mr-10 v_cp' />
                                                    <V_CommentIcon className='v_mr-10 v_cp' />
                                                    <V_ShareIcon className="v_cp" />
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet eleifend pellentesque. </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default CustomerSay; 