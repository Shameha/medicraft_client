// import React from 'react';
import { Helmet} from 'react-helmet-async';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import Item from './Item';





const Article = () => {

    const[menu,setMenu]=useState([])
useEffect (()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=> setMenu(data))
},[])



    return (
        <div>
  <SectionTitle heading="About deases"
  subHeading="Here we can find various deases"
  >

  </SectionTitle>
  <Helmet>
        <title>Medicraft | Article</title>
      </Helmet>

     <div className='grid md:grid-cols-3'>
        {
            menu.map(items =><Item
            key={items._id}
            items={items}
            >

            </Item>)
        }
     </div>
        </div>
    );
};

export default Article;