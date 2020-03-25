import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Header, IncidentList, ContainerLink } from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function Profile() {

    const idOng = localStorage.getItem('id');
    const ongName = localStorage.getItem('name');

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        async function loadIncidents() {
            try {
                const response = await api.get('/profiles', {
                    headers: {
                        Authorization: idOng
                    }
                })
                setIncidents(response.data);
            } catch(err) {
                alert('Erro ao buscar os casos');
            }
        }    
        loadIncidents();    
    }, [idOng])

    async function handleDelete(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: idOng
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch(err) {
            alert('Erro ao tentar deletar');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            <Header>
                <img src={logo} alt="Logo Be the Hero" />
                <span>Bem vindo a {ongName}</span>

                <ContainerLink to="/incident/new">Cadastrar novo caso</ContainerLink>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </Header>

            <h1>Casos Cadastrados</h1>

            <IncidentList>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDelete(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </IncidentList>
        </Container>
    );
}
