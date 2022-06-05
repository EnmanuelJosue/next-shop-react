import React from 'react';
import useGetCategoryById from '@hooks/useGetCategoryById';
import ProductList from '@containers/ProductList';

const API = process.env.customKey;

export async function getServerSideProps(context) {
    const { id } = context.query;
    return { 
        props: { id },
     };
}

const Categories = ({id}) => {
	const productsByCategory = useGetCategoryById(`${API}categories/${id}/products`);
    return (
        <>
        <ProductList products={productsByCategory} />
        </>
    );
};

export default Categories;
