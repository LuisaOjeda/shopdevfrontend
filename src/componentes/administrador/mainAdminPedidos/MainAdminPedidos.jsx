import React from 'react';

import './MainAdminPedidos.css';

export const MainAdminPedidos = () => {
    return (
        <>
          <main>
                <div className='container'>
                <h1>PEDIDOS</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"># ORDEN</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">CLIENTE</th>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">VALOR</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">ACCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>06/04/2022</td>
                            <td>Venus</td>
                            <td>Camiseta Gris</td>
                            <td>40000</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Pendiente</option>
                                    <option value="">Finalizado</option>
                                    <option value="">En proceso</option>
                                </select>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                    
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </main>  
        </>
    )
}














