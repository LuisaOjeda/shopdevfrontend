import React from 'react'
import './MainTienda.css'
import sacoReact from '../../../assets/img/sacoReact.jpg'

export const MainTienda = () => {
    return (
        <>
        <div className='contenedorPadre'>

        
        {/* CONTENIDO DE FILTROS */}
            <div class="mainContainerLateral">
                <h3 class="letraMainContainerLateral">Camisetas</h3>
                <div class="separadorLateral"></div>

                <div class="containerDropdown">
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar por talla
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">XS</a></li>
                            <li><a class="dropdown-item" href="/">S</a></li>
                            <li><a class="dropdown-item" href="/">M</a></li>
                            <li><a class="dropdown-item" href="/">L</a></li>
                            <li><a class="dropdown-item" href="/">XL</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar por color
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">Verde</a></li>
                            <li><a class="dropdown-item" href="/">Azul</a></li>
                            <li><a class="dropdown-item" href="/">Blanco</a></li>
                            <li><a class="dropdown-item" href="/">Negro</a></li>
                            <li><a class="dropdown-item" href="/">Gris</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar por precio
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">$40.000</a></li>
                            <li><a class="dropdown-item" href="#">$50.000</a></li>
                            <li><a class="dropdown-item" href="#">$30.000</a></li>
                            <li><a class="dropdown-item" href="#">$60.000</a></li>
                            <li><a class="dropdown-item" href="#">$20.000</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CONTENIDO LISTA PRODUCTOS */}

            <div class="mainContainerDer">
                <div class="mainContainerArriba">
                    <div class="cards">
                        <div><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imgCards"><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imgCards"><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                </div>

                <div class="mainContainerAbajo">
                    <div class="cards">
                        <div class="imgCards"><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imgCards"><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imgCards"><img class="imgCards" src={sacoReact} alt="sacoReact" /></div>
                        <div class="cardDescripcion">
                            <h6 class="letraCardDescripcion">Camiseta Azul</h6>
                            <h6 class="letraCardDescripcion">$30.000</h6>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}