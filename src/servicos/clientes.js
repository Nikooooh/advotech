import axios from "axios";

const clientesAPI = axios.create({
  baseURL: "http://localhost:8000/processos",
});

function getClientes() {
  const response = clientesAPI.get("/");
  return response.data;
}

export { getClientes };
