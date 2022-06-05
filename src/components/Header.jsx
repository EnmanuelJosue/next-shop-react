import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import useGetCategories from '@hooks/useGetCategories';

const API = process.env.customKey;

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);
	const categories = useGetCategories(`${API}categories`);
  
  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <img src={logo.src} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`${category.id.toString()}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={(styles['more-clickable-area'], styles['navbar-email'], styles.pointer)} onClick={ () => toggleMenu()} 
            role='presentation'
            >
              platzi@example.com
            </li>
            <li
              // className={styles.['navbar-shopping-cart']}
              onClick={ () => toggleOrder()}
              role='presentation'
            >
              <img className={(styles['more-clickable-area'], styles.pointer)} src={shoppingCart.src} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
