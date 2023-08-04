import React, { useState, useEffect } from 'react';
import api from '../Componentes/services/api';

function ListaClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };
        

        fetchClientes();
    }, []);

    const handleExcluirCliente = async (clienteId) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            try {
                await api.delete(`/clientes/${clienteId}`);
                const response = await api.get('/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    };

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente._id}>
                        <p>Nome: {cliente.nome}</p>
                        <p>Situação: {cliente.situacao}</p>
                        <p>Data: {cliente.data}</p>
                        <button onClick={() => handleExcluirCliente(cliente._id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaClientes;