import React, { useState, useEffect } from 'react';
import api from '../Componentes/services/api';
import styled from 'styled-components';
import EditarClienteForm from './EditarClienteForm';


const Titulo = styled.h2`
margin-left:20px;
@media screen and (max-width: 768px) {
    font-family:Arial, Helvetica, sans-serif;
    margin-left:15px;
  }
`

function ListaClientes() {
    const [clientes, setClientes] = useState([]);
    const [editingClienteId, setEditingClienteId] = useState(null); 

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

    const handleEditarCliente = (clienteId) => {
        setEditingClienteId(clienteId);
    };

    const handleSalvarEdicao = async (editedData) => {
        try {
            await api.put(`/clientes/${editingClienteId}`, editedData);
            const response = await api.get('/clientes');
            setClientes(response.data);
            setEditingClienteId(null);
        } catch (error) {
            console.error('Erro ao editar cliente:', error);
        }
    };


    return (
        <div>
            <Titulo>Lista de Clientes</Titulo>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente._id}>
                        {editingClienteId === cliente._id ? (
                            <EditarClienteForm cliente={cliente} onSave={handleSalvarEdicao} />
                        ) : (
                            <>
                        <p>Nome: {cliente.nome}</p>
                        <p>Situação: {cliente.situacao}</p>
                        <p>Data: {cliente.data}</p>
                        <button onClick={() => handleExcluirCliente(cliente._id)}>Excluir</button>
                        <button onClick={() => handleEditarCliente(cliente._id)}>Editar</button>
                        </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaClientes;