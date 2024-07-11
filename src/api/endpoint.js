import Api from "./core/index";

const api = Api;

const getManyItem = (endpoint) => api(endpoint).getManyItem();
const getOneItem = (endpoint, payload) => api(endpoint).getOneItem(payload);

export { getManyItem, getOneItem };
