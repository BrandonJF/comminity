import styled from '@emotion/styled';
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { css } from '@emotion/react'


/* eslint-disable-next-line */
export interface ContactFormProps {}

const styles = {
  formField: css({
    margin: '1rem'
  })
}

export function ContactForm(props: ContactFormProps) {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };
  
  return (
    
         <Box>
      <Typography variant="h4">
        Contact Us
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
        css={styles.formField}
          label="Full Name"
          variant="outlined"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
        css={styles.formField}
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
        css={styles.formField}
          label="Subject"
          variant="outlined"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextareaAutosize
        css={styles.formField}
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter a message"
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
        css={styles.formField}
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '200px', fontSize: '16px' }}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
    
  );
}

export default ContactForm;
