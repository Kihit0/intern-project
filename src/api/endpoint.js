import Api from "./core/index";

const api = Api;

const getManyItems = (endpoint) => new api(endpoint).fetchData();
const getOneItem = (endpoint, payload) => new api(endpoint).fetchData(payload);

export { getManyItems, getOneItem };
