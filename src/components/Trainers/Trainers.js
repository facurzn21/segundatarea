import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Trainers = props => {

    const [personas, setPersonas] = useState([]);
    
    useEffect(() => {
        getPersonas();
    }, []);

    const getPersonas = () => {
        axios.get('https://random-data-api.com/api/users/random_user?size=5')
            .then((res) => {
                setPersonas(res.data);
            }).catch(err => console.log(err));
    };

    return (
        personas.map((persona, index) => {
            console.log(persona);
            return (
                <div key={persona.id} style={{paddingTop: '30px'}}>
                    <img src={persona.avatar} />
                    <h3>{persona.first_name} {persona.last_name}</h3>
                    <p>{persona.email}</p>
                </div>
            );
        })
        
    );

};

export default Trainers;