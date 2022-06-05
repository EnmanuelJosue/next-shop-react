import ProductList from '@containers/ProductList';
import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Online</title>
      </Head>
      <Header />
      <ProductList />
    </>
  );
}
