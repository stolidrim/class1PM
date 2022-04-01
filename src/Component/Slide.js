import React from 'react';
import './slide.css'

const Slide = () => {
  return <>


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.wixstatic.com/media/284637_9b206403c6354095b2d9c2ae926f56b0~mv2_d_7016_3528_s_4_2.jpg/v1/fill/w_2500,h_1257,al_c/284637_9b206403c6354095b2d9c2ae926f56b0~mv2_d_7016_3528_s_4_2.jpg" className="d-block w-100 cus-slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/selldot/Images/BannerImage-PopularcategoriestoSellOnline.png" className="d-block w-100 cus-slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2015/12/Want-What-Youre-Selling-FT.png" className="d-block w-100 cus-slide" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
  </>;
};

export default Slide;
