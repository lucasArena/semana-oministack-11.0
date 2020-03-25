import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

import Link from '../../components/Link';
import Button from '../../components/Button';

import api from '../../services/api';
import history from '../../services/history';

export default function NewIncident() {
    const ongId = localStorage.getItem('id');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const data = {
                title,
                description,
                value
            };

            await api.post('/incidents',data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar caso! Tente novamente');
        }
    }
    return (
        <Container>
            <Content>
                <section>
                    <img src={logo} alt="Logo Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Titulo do caso" value={title} onChange={event => setTitle(event.target.value)}/>
                    <textarea  placeholder="Descrição" value={description} onChange={event => setDescription(event.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={event => setValue(event.target.value)}/>

                    <Button type="submit">Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}