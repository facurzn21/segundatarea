import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListaContactos from '../ListaContactos/ListaContactos';

const Trainers = () => {

    //paso url a constante para no tenerlo hardcodeado
    // const url = 'https://random-data-api.com/api/users/random_user?size=5';

    const [personas, setPersonas] = useState([]);
    //const [valor, setearValor] = useState(valorInicial);

    //evito cargar cosas antes que se renderizen
    useEffect(() => {
        //despues que se carga el componente llamo a la funcion getPersonas()
        getPersonas();
    }, []);

    const getPersonas = () => {
        axios.get('https://random-data-api.com/api/users/random_user?size=5')
            .then((res) => {
                // seteo personas como el resultado de la llamada get de la url  
                setPersonas(res.data);
            }).catch(err => console.log(err));
    };

    return (
        <div style={{paddingTop: '120px'}}>
            {/* se crea componente ListaContactos al cual le paso el array personas como props  */}
            <ListaContactos personas={personas} />
        </div>
    );

};

export default Trainers;