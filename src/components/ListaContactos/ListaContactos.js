import React from 'react';
import classes from './ListaContactos.module.css';

const ListaContactos = props => {
    //personas es un array de props.personas que recibe del componente del cual se llama
    const { personas } = props;

    //se evalua que no sea un array vacio por si da error 
    if(personas.length > 0){
        return (
            //se recorre todo el array personas y por cada una de ellas se hace lo siguiente
            personas.map((persona, index) => {
                console.log(persona);
                //Por cada persona en el array, muestro un div con su avatar, nombres y email
                return (
                    <div className={classes['card']} key={persona.id} style={{paddingTop: '30px'}}>
                        <aside>
                            <img className={classes.avatar} src={persona.avatar} alt={persona.first_name}/>
                        </aside>
                        <header>
                            <h2 className={classes.cardTitle}>{persona.first_name} {persona.last_name}</h2>
                            <span className={classes.cardEmail}>{persona.email}</span>
                        </header>
                    </div>
                );
            })
            
        );
    }
    else{
        //si no se cargo el array muestro que no hay nada
        return (
            <h2>No hay personas</h2>
        );
    }
};

export default ListaContactos;