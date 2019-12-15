import React from 'react';
// import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { ProductsContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  // const favoriteProducts = useContext(ProductsContext).products.filter(
  //   p => p.isFavorite
  // );
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(p => p.isFavorite);
  let content = <p className='placeholder'>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className='products-list'>
        {favoriteProducts.map(({ id, title, description }) => (
          <FavoriteItem
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
