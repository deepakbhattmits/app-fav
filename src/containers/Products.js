import React from 'react';
// import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { ProductsContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // const productsList = useContext(ProductsContext).products;

  // const productList = useSelector(state => state.shop.products);
  const state = useStore()[0];
  return (
    <ul className='products-list'>
      {state.products.map(({ id, title, description, isFavorite }) => (
        <ProductItem
          key={id}
          id={id}
          title={title}
          description={description}
          isFav={isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
