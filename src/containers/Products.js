import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { ProductsContext } from '../context/products-context';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const productsList = useContext(ProductsContext).products;
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className='products-list'>
      {productsList.map(({ id, title, description, isFavorite }) => (
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
