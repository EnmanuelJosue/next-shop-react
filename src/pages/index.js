import ProductList from '@containers/ProductList';
import useGetProducts from '@hooks/useGetProducts';
import Head from 'next/head';

const API = process.env.customKey;

export default function Home() {
	const products = useGetProducts(`${API}products`);
  return (
    <>
      <Head>
        <title>Shop Online</title>
      </Head>
      <ProductList products={products} />
    </>
  );
}
