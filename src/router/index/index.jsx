import React from 'react';
import '../index/styles.module.css';
import { Container } from '../../components/layout/Container';

function Principal () {
  return (
    <Container>
      <div className="home d-flex justify-content-center align-items-center mt-24 mb-24">
        <div className="hero text-center">
          <h1 className='font-bold custom-heading'>Welcome to our clothes store!</h1>
          <p className="custom-paragraph">Discover the latest fashion trends and find your perfect style.</p>
          <img src='../../../public/fototienda.jpg'alt='Tienda'></img>
          <button className='btn btn-primary'>Come on!</button>
        </div>
      </div>
    </Container>
  );
}

export default Principal;
