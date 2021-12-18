import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function OneActor(props) {
    const [actor, setActor] = useState ({});

  useEffect(() => {
      axios.get (`https://thronesapi.com/api/v2/Characters/ ${props.match.params.id}`)

      .then(result => {
          console.log(result.data)

        setActor (result.data)
      })

      .catch(err => {

          console.log(err)
      })

  },[props])

	return (
		<div>
            <Link>
            <button>SHOW  ALL ACTOR</button>
            </Link>

            <h3>{actor.firstName}</h3>
            <img src={actor.imageUrl} alt={actor.firstName}  className='actor-img'/>
            <h4>{actor.fullName}</h4>
            <p>{actor.title}</p>
            <h3>{actor.lastName}</h3>
            
            

		</div>
	)
}
