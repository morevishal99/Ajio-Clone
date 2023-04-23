import axios from "axios";
import { GETREQ, GETSINGLEPROD, PATCHSINGLEPROD, DELETESINGLEPROD, POSTREQ } from "./action.Type";

const getProductData = (category) => async (dispatch) => {
  const response = await axios.get(`https://kind-plum-agouti-tam.cyclic.app/product/${category}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};
const getSingleData = (category, id) => async (dispatch) => {
  const response = await axios.get(
    `https://kind-plum-agouti-tam.cyclic.app/product/${category}/${id}`
  );
  const res = await response.data;
  // console.log("redux",res)
  dispatch({ type: GETSINGLEPROD, payload: res });
};



const postProductData = (productData) => async (dispatch) => {
  const response = await axios.post(`https://kind-plum-agouti-tam.cyclic.app/product/add`, productData);
  const res = await response.data;
  dispatch({ type: POSTREQ, payload: res });
};


const patchSingleData = (id, updatedData) => async (dispatch) => {
  const response = await axios.patch(`https://kind-plum-agouti-tam.cyclic.app/product/update/${id}`, updatedData);
  const res = await response.data;
  dispatch({ type: PATCHSINGLEPROD, payload: res });
};


const deleteSingleData = (id) => async (dispatch) => {
  const response = await axios.delete(`https://kind-plum-agouti-tam.cyclic.app/product/delete/${id}`);
  const res = await response.data;
  dispatch({ type: DELETESINGLEPROD, payload: res });
};


const handleSortByRedux = (sortedProduct) => (dispatch) => {
  // console.log("sortedRedux",sortedProduct)
  dispatch({ type: GETREQ, payload: sortedProduct });

};

export {
  getProductData,
  getSingleData,
  patchSingleData,
  deleteSingleData,
  postProductData,
  handleSortByRedux,
};
