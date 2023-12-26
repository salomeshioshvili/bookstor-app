import React from 'react'
import Banner from '@/components/banner/Banner'
import FictionBooks from '@/components/fictionBooks/FictionBooks';
import FavoriteBook from '@/components/favoriteBook/FavoriteBook';
import PromoBanner from '@/components/promoBanner/PromoBanner';

const Home = () => {
 return (
   <div>
        <Banner/>
        <FictionBooks/>
        <FavoriteBook/>
        <PromoBanner/>
   </div>
 )
}

export default Home;