import React, { useState } from 'react';
import { Formik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
// import TextField from '@mui/material/TextField';
import style from './EmailService.module.css';
import SendIcon from '@mui/icons-material/Send';

const axios = require('axios');

//<<<<<<<<<<<<<<<<<<<<<<<< SOLO FORMIK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export default function EmailService({mode}) {
  const [loading, setLoading] = useState(false);

  return(
    <div>
      <Formik
        initialValues={{from: '', motive: '', text:''}}
        validate={values => {
          const errors = {};
          if (!values.from) {
            errors.from = 'Por favor agrega un correo para poder contactarnos'
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.from)) {
            errors.from = 'Formato de email inválido'
          }
          if (!values.text) {
            errors.text = 'Algo que quieras decirme?'
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setLoading(true)
          axios.post('http://localhost:3001/sendEmail', values)
          .then((response) => {
            setSubmitting(false)
            alert('Email enviado')
            resetForm({values:''})
            setLoading(false)
          })
          .catch(error => console.log('error', error));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.formContainer}>

              <input className={mode === 'light' ? style.data : style.dataDark} 
                      type='email' name='from' 
                      onChange={handleChange} onBlur={handleBlur} value={values.from}
                      placeholder='example@gmail.com' />
                {touched.from && errors.from ? 
                  <div style={{color:'red', fontSize:'x-small'}}>{errors.from}</div> : null}
              
              <input className={mode === 'light' ? style.data : style.dataDark} 
                      type='text' name='motive' 
                      onChange={handleChange} onBlur={handleBlur} value={values.motive} 
                      placeholder='Motivo de contacto'/>
                {touched.motive && errors.motive ? 
                  <div style={{color:'red', fontSize:'x-small'}}>{errors.motive}</div> : null}

              <textarea className={mode === 'light' ? style.msg : style.msgDark} 
                        type='text' name='text' 
                        onChange={handleChange} onBlur={handleBlur} value={values.text} 
                        placeholder='Algún mensaje particular'/>
                {touched.text && errors.text ? 
                  <div style={{color:'red', fontSize:'x-small'}}>{errors.text}</div> : null}

              <div className={style.btn}>      
                <LoadingButton type='submit' disabled={isSubmitting} variant='contained' size='medium'
                        color="secondary" startIcon={<SendIcon />} loading={loading} loadingPosition="start"
                >
                  Enviar
                </LoadingButton> 
              </div> 
          </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
