import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const productList = useSelector(state => state.shop.products);
  return (
    <ul className='products-list'>
      {productList.map(({ id, title, description, isFavorite }) => (
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
