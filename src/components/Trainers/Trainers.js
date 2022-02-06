import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListaContactos from '../ListaContactos/ListaContactos';

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
        <div style={{paddingTop: '120px'}}>
            <ListaContactos personas={personas} />
        </div>
    );

};

export default Trainers;