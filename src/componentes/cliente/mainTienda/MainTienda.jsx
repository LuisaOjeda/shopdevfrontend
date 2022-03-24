import "./MainTienda.css";
import React from "react";
import axios, { Axios } from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const MainTienda = () => {
  const [listaProductos, setListaProductos] = useState([]);

  /* LO PRIMERO QUE SE VA A EJECUTAR */
  useEffect(() => {
    getProductos();
  }, []);

  /* LOGICA DE LISTAR PRODUCTOS cliente API */
  const getProductos = () => {
    axios
      .get("https://shopdevbackend.herokuapp.com/homeProductos")
      .then((data) => {
        setListaProductos(data.data);
        console.log(listaProductos + "aquiiiiiiiii");
      });
  };

  return (
    <>
      <div className="contenedorPadre">
        {/* CONTENIDO DE FILTROS */}
        <div class="mainContainerLateral">
          <h3 class="letraMainContainerLateral">Camisetas</h3>
          <div class="separadorLateral"></div>

          <div class="containerDropdown">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar por Talla
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">S</a></li>
                <li><a class="dropdown-item" href="#">M</a></li>
                <li><a class="dropdown-item" href="#">L</a></li>
                <li><a class="dropdown-item" href="#">XL</a></li>
            </ul>
            </div>

            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar por Color
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Rojo</a></li>
                    <li><a class="dropdown-item" href="#">Azul</a></li>
                    <li><a class="dropdown-item" href="#">Blanco</a></li>
                    <li><a class="dropdown-item" href="#">Negro</a></li>
                </ul>
            </div>
            
            <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar por Precio
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">15000</a></li>
                    <li><a class="dropdown-item" href="#">40000</a></li>
                    <li><a class="dropdown-item" href="#">80000</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* CONTENIDO LISTA PRODUCTOS */}
        <div class="d-flex">
          {listaProductos.map((producto) => (
            <div class="mainContainerDer">
              <div class="cards col-6 hijoCards">
                <div>
                  <img
                    class="imgCards"
                    src={producto.imagenes}
                    alt="sacoReact"
                  />
                </div>
                <div class="cardDescripcion">
                  <h6 class="letraCardDescripcion">{producto.nombre}</h6>
                  <h6 class="letraCardDescripcion">{producto.precio}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
