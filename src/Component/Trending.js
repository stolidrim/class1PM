import React from 'react';
import Slider from "react-slick";
import './trending.css'

const Trending = () => {
    var settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        autoplaySpeed:5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return( 
    <>
        <div className='shadow-lg my-3 p-2 container-fluid'>

            <Slider {...settings}>
                <div>
                    <img src="./images/book.png" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/m31.jpg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/lenovo.jpeg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/iphone.jpg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/friends.jpg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/macbook.jpg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/samsung.jpg" className='img-fluid cus-img' />
                </div>
                <div>
                    <img src="./images/oppo.jpg" className='img-fluid cus-img' />
                </div>
            </Slider>

        </div>
    </>
    )
};

export default Trending;
