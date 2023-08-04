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

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente._id}>
                        <p>Nome: {cliente.nome}</p>
                        <p>Situação: {cliente.situacao}</p>
                        <p>Data: {cliente.data}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaClientes;