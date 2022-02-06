import React from 'react';
import { Table } from 'react-bootstrap';

const Tabla = props => {
    //se instala dependencia react-bootstrap para utilizar tabla de manera responsive
    //import el Componente Table para usarlo
    return (
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                    <th>HORARIO</th>
                    <th>LUNES</th>
                    <th>MARTES</th>
                    <th>MIERCOLES</th>
                    <th>JUEVES</th>
                    <th>VIERNES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>09.00-10.00 </td>
                    <td></td>
                    <td></td>
                    <td>
                        <p>Yoga</p>
                        <p>Leonardo Gonzalez</p>
                    </td>
                    <td>
                        <p>Zumba</p>
                        <p>Jazmin Hernandez</p>
                    </td>
                    <td>
                        <p>Body Balance</p>
                        <p>Gerardo Martinez</p>
                    </td>
                </tr>
                <tr>
                    <td>10.00-12.00 </td>
                    <td>
                        <p>Zumba</p>
                        <p>Jazmin Hernandez</p>
                    </td>
                    <td>
                        <p >Body Balance</p>
                        <p>Gerardo Martinez</p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <p>Yoga</p>
                        <p>Leonardo Gonzalez</p>
                    </td>
                </tr>
                <tr>
                    <td>12.00-14.00 </td>  
                    <td>
                        <p>Body Balance</p>
                        <p>Gerardo Martinez</p>
                    </td>
                    <td>
                        <p>Zumba</p>
                        <p>Jazmin Hernandez</p>
                    </td>
                    <td></td>
                    <td>
                        <p >Yoga</p>
                        <p>Leonardo Gonzalez</p>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Tabla;