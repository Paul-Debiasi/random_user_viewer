import {useHistory} from 'react-router-dom'

export default function SingleCard({ first, last, latitude, longitude, city, country, street,number,picture }) {
const  history = useHistory()
	return (
		<div>
			<h4> {`${first} ${last}`}</h4>
      <img src={`${picture}`} alt={`${first} ${last}`} />
<p>{`${city} - ${country}`}</p>
<p>{`Address: ${street} ${number} `}</p>
<button onClick={()=> history.push('/')}>Back</button>
		</div>
	);
}
