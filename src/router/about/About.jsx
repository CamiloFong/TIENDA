import React from 'react';
import '../about/styles.module.css';
import { Container } from '../../components/layout/Container';

export default function about () {
  return (
    <Container>
      <div className="body-container container m-auto mt-24 mb-24">
      <div className="intro">
        <h1 className='font-bold'>Bienvenido a Nuestra Tienda de Ropa</h1>
        <p>Somos tu destino para la moda más reciente y elegante. Explora nuestra amplia gama de ropa y accesorios.</p>
      </div>
      <div className="featured-products">
        <h2 className='font-bold'>Productos Destacados</h2>
        {/*  */}
      </div>
      <div className="about-us">
        <h2 className='font-bold'>Sobre Nosotros</h2>
        <p>Somos una tienda de ropa comprometida a ofrecer a nuestros clientes productos de alta calidad a precios asequibles. Nuestro objetivo es ayudarte a lucir y sentirte mejor con nuestra selección de moda actual.</p>
      </div>
    </div>
    </Container>
    
  );
}


