import './MainPago.css';
import React from 'react';
import camiseta from '../../../assets/img/camiseta.png'
import { useNavigate } from 'react-router-dom';

export const MainPago = () => {
    /* NECESARIO PARA EL FLUJO ENTRE RUTAS */
    const navigate = useNavigate();


    const mjsPago = () => {
        alert("Su pago se a realizado con exito"+"\n" + "Revise su correo electronico")
    }

    const rutaTienda = () => {
        goToHomeCliente()
    }
    
    return(
        <>
        <ul class="nav nav-pills mb-3" id="pills-tab" >
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                type="button" role="tab" aria-controls="pills-home" aria-selected="true">Revisar pedidos</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Carrito</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        {/*ENVIOS*/}
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="card-header">
                Datos de envio
            </div>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="validationCustom01" value="" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="validationCustom02" value="" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Correo</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Barrio</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Ciudad</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Departamento</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option>Quindio</option>
                        <option>Antioquia</option>
                        <option>Caldas</option>
                        <option>Nariño</option>
                        <option>Meta</option>
                        <option>Santander</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Mas detalles de tu direccion</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">telefono</label>
                    <input type="text" class="form-control" id="validationCustom05" required/>
                </div>
               
                <div class="card-header">
                    Metodo de envio
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Recoger el pedido
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Envio (3 dias habiles. $0 desde el momento en que tu pedido se envia empiezan a contar los
                            dias habiles)
                        </label>
                    </div>
                </div>
                <div class="card-header">
                    Informacion de pago
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Tarjeta de credito
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Pago con debito - pse
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Pago en efectivo
                        </label>
                    </div>
                </div>
                <div class="col-12 diseñobtn">
                    <button class="btn btn-primary" type="submit">Volver a la bolsa</button>
                    <button class="btn btn-primary" type="submit">Siguiente</button>
                </div>
            </form>
        </div>

         {/* Carrito */}  
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="card-header">
                ITEMS
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Productos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={camiseta} class="img-fluid rounded-start estiloimg" alt="camiseta"/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body contenidoProd">
                                            <h5 class="card-title">Camiseta Gris</h5>
                                            
                                            <p>Precio</p>
                                            <p class="card-text"><small class="text-muted">$40000</small></p>
                                            <p>Cantidad</p>
                                            <input type="number"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="col-12">
                <div id="subTotalPadre" class="card-header">
                    SUBTOTAL
                    <input type="text" class="form-control" id="subTotal" />
                </div>
                <div className='diseñobtn'>
                <button class="btn btn-primary" type="submit" onClick={()=>rutaTienda()}>Seguir comprando</button>
                <button class="btn btn-primary " type="submit" onClick={()=>mjsPago()}>Pagar</button>
                </div>
                
            </div>
        </div>
    </div>
        </>
    )
    /*RUTAS */
    function goToHomeCliente() {
        let ruta = "/cliente/listaproductos";
        navigate(ruta);
    }
}