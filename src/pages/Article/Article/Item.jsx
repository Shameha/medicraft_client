// import React from 'react';

import { Link } from "react-router-dom";

const Item = ({items}) => {
    const{ _id,name,first_aid,image_url}=items
    return (
        <div>
             <section className="py-6 flex  dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div>
			<article className="flex flex-col dark:bg-gray-200">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image_url} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<p className="text-xs tracking-wider uppercase dark:text-violet-600">{name}</p>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{first_aid}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
					<Link to={`/item/${_id}`}>
					<button className="btn btn-soft btn-accent">View details</button>
					</Link>
					</div>
				</div>
			</article>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Item;