import React from 'react'
import Banner from '@/components/banner/Banner'
import FictionBooks from '@/components/fictionBooks/FictionBooks';
import FavoriteBook from '@/components/favoriteBook/FavoriteBook';
import PromoBanner from '@/components/promoBanner/PromoBanner';
import OtherBooks from '@/components/otherBooks/OtherBooks';
import Review from '@/components/review/Review';


const Home = () => {
 return (
   <div>
        <Banner/>
        <FictionBooks/>
        <FavoriteBook />
        <PromoBanner />
        <OtherBooks/>
        <Review />
   </div>
 )
}

export default Home;

