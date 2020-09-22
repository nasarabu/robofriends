import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>{
	return (
		<div>
			{
				robots.map((user,i) => {
					return (
    					<Card key = {i} 
    						name={robots[i].name} 
    						username={robots[i].username} 
    						id={robots[i].id}
    					/>
    				);
				})
			}
    	</div>
	);
}

export default CardList;