import React from 'react';

const Card = () => {
  return <>

<div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
  <div className="col">
    <div className="card">
      <img src="images/m31.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <center>
        <h5 className="card-title">Samsung M31 Mobile</h5>
        <button className='btn btn-success'>Add to Cart</button>
        <button className='mx-3 btn btn-warning'>View Details</button>
        </center>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/m31.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Samsung M31 Mobile</h5>
        <button className='btn btn-success'>Add to Cart</button>
        <button className='mx-3 btn btn-warning'> View Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/m31.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Samsung M31 Mobile</h5>
        <button className='btn btn-success'>Add to Cart</button>
        <button className='mx-3 btn btn-warning'> View Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/m31.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Samsung M31 Mobile</h5>
        <button className='btn btn-success'>Add to Cart</button>
        <button className='mx-3 btn btn-warning'> View Details</button>
      </div>
    </div>
  </div>
</div>

  </>;
};

export default Card;
