import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Button } from './styles';
import { Box, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const Contact = () => {

    const form = useRef();
    const [loading, setLoading] = useState(true)

    const sendEmail = async (event) => {
        setLoading(false)
        event.preventDefault();

        await emailjs.sendForm('service_cdg21ke', 'template_shxeesm', form.current, 'RYt7chl15Q6NnvTzf')
        .then((result) => {
            toast.success("Mensagem enviada com sucesso!")
        }, (error) => {
            toast.error("Tente novamente!")
        });
        event.target.reset()
        setLoading(true)
    };

    return (

        <Container>
            <Box component = 'form'
            ref={form}
            onSubmit = {sendEmail}
            sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField label = 'Nome' name='name' margin = 'normal' color='error'></TextField>
                <TextField label = 'Email' name='email' margin = 'normal' color='error'></TextField>
                <TextField label = 'Telefone' name='phone' margin = 'normal' color='error'></TextField>
                <TextField label = 'Assunto' name='assunto' margin = 'normal' color='error'></TextField>
                <TextField label = 'Menssagem' name='message' margin = 'normal' color='error'></TextField>
                {loading ? 
                (
                    <Button type = 'submit' fullWidth variant='contained'>Enviar</Button>
                ):
                (
                    <LoadingButton loading variant="outlined" type = 'submit'>
                    </LoadingButton>
                )}
            </Box>
        </Container>
    );
};

