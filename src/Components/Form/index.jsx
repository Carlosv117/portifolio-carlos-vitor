import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Button } from './styles';
import { Box, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Aos from "aos"
import "aos/dist/aos.css"

export const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

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

    const CssTextField = styled(TextField)({
        '& input, textarea': {
          color: 'white',
        },
        '& label': {
          color: 'white',
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'grey',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'red',
          },
        },
      });

    return (

        <Container data-aos="zoom-in">
            <Box id='form' component = 'form'
            ref={form}
            onSubmit = {sendEmail}
            sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <CssTextField label = 'Nome' name='name' margin = 'normal' required autoComplete="new-password"></CssTextField>
                <CssTextField label = 'Email' name='email' margin = 'normal' type="email" required autoComplete="new-password"></CssTextField>
                <CssTextField label = 'Telefone' name='phone' margin = 'normal' type="tel" required autoComplete="new-password"></CssTextField>
                <CssTextField label = 'Assunto' name='assunto' margin = 'normal' required autoComplete="new-password"></CssTextField>
                <CssTextField label = 'Menssagem' name='message' margin = 'normal' multiline rows={4} required autoComplete="new-password"></CssTextField>
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

