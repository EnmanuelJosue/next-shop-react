import React from 'react';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

// const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = ({ products }) => {
	return (
		<section className={styles['main-container']}>
			<div className={styles['ProductList']}>
				{products.map(product => (
					<ProductItem 
						product={product} 
						key={product.id} 
					/>
				))}
			</div>
		</section>
	);
};

export default ProductList;