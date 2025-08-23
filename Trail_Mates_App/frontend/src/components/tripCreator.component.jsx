import { useState } from 'react';
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';

function TripCreate() {
    const { getAccessTokenSilently, user } = useAuth0();
    const audience = 'https://trailmates/api';
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    function onChangeLocation(e) {
        setLocation(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        

        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {audience}
            });
        
        const name = user.name;
        const trip = {name, title, location};
        console.log(trip);
        await axios.post('http://localhost:3000/trips/add', trip, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
            alert("Trip Created");
            setTitle("");
            setLocation("");
           
        }
        catch(e) {
            console.error('no token', e);
        }
    }

    return(
        <div>
            <div>
                <h1>Create Trip</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Trip Title</label>
                        <br></br>
                        <input
                        type="text"
                        placeholder="Trip Title"
                        value={title}
                        onChange={onChangeTitle}
                        ></input>
                    </div>
                    <div>
                        <label>Location</label>
                        <br></br>
                        <input 
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={onChangeLocation}
                        ></input>
                    </div>
                    <div>
                        <label>Start: </label>
                        <input type="date"></input>
                        <label> End: </label>
                        <input type="date"></input>
                    </div>
                      
        
                        <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );



}

export default TripCreate