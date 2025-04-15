// import React from 'react';

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Faq from "./Shared/Faq/Faq";
import PopularManu from "./Shared/PopularManu/PopularManu";
import { Helmet} from 'react-helmet-async';



const Home = () => {
    return (
        <div>
             <Helmet>
                    <title>Medicraft | Home</title>
                  </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Faq></Faq>
        </div>
    );
};

export default Home;