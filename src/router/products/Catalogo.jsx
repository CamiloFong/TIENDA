import React from 'react';
import '../products/styles.module.css';
import { Container } from '../../components/layout/Container';

function Catalogo() {
    // Simula una lista de productos (puedes reemplazar esto con datos reales)
    const products = [
      { id: 1, name: 'Camiseta Estampada', price: 29.99, image: 'shirt1.jpg' },
      { id: 2, name: 'Pantalones Vaqueros', price: 49.99, image: 'jeans1.jpg' },
      { id: 3, name: 'Vestido de Noche', price: 79.99, image: 'dress1.jpg' },
      // Agrega más productos aquí
    ];
  
    return (
        <Container>
            <div className="product-list mt-24 mb-24">
                <h2>Nuestra Colección</h2>
                <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                    <img src={`images/${product.image}`} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    </div>
                ))}
                </div>
            </div>
        </Container>
    );
  }
  
  export default Catalogo;