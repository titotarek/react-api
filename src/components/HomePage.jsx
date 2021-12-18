import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
	


export default function HomePage() {
    const [cast, setCast] = useState ([]);

  useEffect(() => {
      axios.get (' https://thronesapi.com/api/v2/Characters')

      .then(result => {

         setCast(result.data)
      })

      .catch(err => {

          console.log(err)
      })

  },[])  
           
	return (
		<div className='All-actor'>
            {cast.length > 0 && cast.map(actor =>{
               
                return(
                   <div>
                        <Link  to={`/Characters/ ${actor.id}`} >
                    
                    <img  src={actor.imageUrl} alt={actor.fullName}  className='actor-img'/>
                      <h4>{actor.fullName}</h4>
                  </Link> 
                   </div>
                )
                
            })}

		</div>
	)
}
