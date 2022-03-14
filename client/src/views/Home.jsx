import React from 'react';
import Announcement from '../layout/Announcement';
import Categories from '../layout/Categories';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import NewsLetter from '../layout/NewsLetter';
import Products from '../layout/Products';
import Slider from '../layout/Slider';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home
