import Api from "./core/index";

const api = Api;

const getManyItem = (endpoint) => new api(endpoint).fetchData();
const getOneItem = (endpoint, payload) => new api(endpoint).fetchData(payload);

export { getManyItem, getOneItem };
