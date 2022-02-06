import React from 'react';
import classes from './ListaContactos.module.css';

const ListaContactos = props => {
    const {menu, personas} = props;

    if(personas.length > 0){
        return (
            personas.map((persona, index) => {
                console.log(persona);
                return (
                    <div className={classes['card']} key={persona.id} style={{paddingTop: '30px'}}>
                        <aside>
                            <img className={classes.avatar} src={persona.avatar} />
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
        return (
            <h2>No hay personas</h2>
        );
    }
};

export default ListaContactos;