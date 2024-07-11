const API_URL = "http://localhost/api";

const camelToCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const Api = (endpoint) =>
  new Proxy(
    {},
    {
      get(_, method) {
        return async (props) => {
          const apiMethod = camelToCase(method);
          const httpMethod = apiMethod.split("_")[0].toUpperCase();
          const url = new URL(`${API_URL}/${endpoint}`);

          const options = {
            method: httpMethod,
          };

          if(props?.id) {
            url.href += `/${props.id}`;
          }

          const response = await fetch(url, options);

          return response.json();
        };
      },
    }
  );

export default Api;