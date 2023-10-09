import axios from "axios";
import {
  TRAER_PRODUCTOS,
  TRAER_PRODUCTOS_ACTIVOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  AGREGAR_CARRITO,
  QUITAR_CARRITO,
  FILTER_CATEGORIA,
  SET_ORDER,
  SET_INICIO_SESION,
  USUARIO,
  EDITAR_USUARIO,
} from "./actions_types";

const URL = "http://localhost:3001/moveon/";

export const traerAllProductos = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}products/all`);
      return dispatch({
        type: TRAER_PRODUCTOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const traerActiveProductos = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}products/active`);
      // const data = productos;
      return dispatch({
        type: TRAER_PRODUCTOS_ACTIVOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const setCurrenPage = (pagina) => {
  return (dispatch) => {
    return dispatch({
      type: SET_PAGINA,
      payload: pagina,
    });
  };
};

export const buscarPruductos = (nombre) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: BUSCAR_PRUDUCTOS,
        payload: nombre,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCategorias = () => {
  try {
    return async (dispatch) => {
      const categorias = await axios.get(`${URL}categories/all`);
      dispatch({
        type: OBTENER_CATEGORIAS,
        payload: categorias.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const filterByCategory = (categoria) => {
  return {
    type: FILTER_CATEGORIA,
    payload: categoria,
  };
};

export const setOrder = (orden) => {
  return {
    type: SET_ORDER,
    payload: orden,
  };
};

export const agregarCarrito = (producto) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: AGREGAR_CARRITO,
        payload: producto,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const quitarCarrito = (id) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: QUITAR_CARRITO,
        payload: id,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const setInicioSesion = (booleano) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: SET_INICIO_SESION,
        payload: booleano,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = (newUsuario) => {
  try {
    return async (dispatch) => {
     const usuarioCreado = await axios.post(`http://localhost:3001/moveon/users/`, newUsuario);
      dispatch({
        type: USUARIO,
        payload: usuarioCreado
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuario = (cambiosUsuario) => {
  try {
    return async (dispatch) => {
     const editarUser = await axios.patch(`http://localhost:3001/moveon/users/`, cambiosUsuario);
      dispatch({
        type: EDITAR_USUARIO,
        payload: editarUser
      });
    };
  } catch (error) {
    console.log(error);
  }
};

