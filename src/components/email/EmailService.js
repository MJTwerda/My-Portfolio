import React, { useState } from 'react';
import { Formik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
// import TextField from '@mui/material/TextField';
import style from './EmailService.module.css';
import SendIcon from '@mui/icons-material/Send';

const axios = require('axios');

//<<<<<<<<<<<<<<<<<<<<FORMIK- MAUI >>>>>>>>>>>>>>>>>

// const validation = values => {
//   const errors = {};
//   if (!values.from) {
//   errors.from = 'Por favor agrega un correo para poder contactarnos'
//   }
//   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.from)) {
//   errors.from = 'Formato de email inválido'
//   }
//   if (!values.text) {
//   errors.text = 'Algo que quieras decirme?'
//   }
//   return errors;
// }

// export default function EmailService() {
//   const formik = useFormik({
//     initialValues: {
//       from: '',
//       motive: '',
//       text: ''
//     },
//     // validation: validation(formik.values),
//     onSubmit: (values, {setSubmitting}) => {
//                 axios.post('http://localhost:3001/sendEmail', values)
//                 .then((response) => {
//                   setSubmitting(false)
//                   alert('Email enviado')
//                 })
//                 .catch(error => console.log('error', error));
//     }
//   });

//   return(
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField 
//           fullWidth
//           id='from'
//           name='from'
//           label='Email'
//           value={formik.values}
//           onChange={formik.handleChange}
//           error={formik.touched.from && Boolean(formik.errors.from)}
//           helperText={formik.touched.from && formik.errors.from}
//         />
//         <TextField 
//           fullWidth
//           id='motive'
//           name='motive'
//           label='Motive'
//           value={formik.values}
//           onChange={formik.handleChange}
//           error={formik.touched.motive && Boolean(formik.errors.motive)}
//           helperText={formik.touched.motive && formik.errors.motive}
//         />
//         <TextField 
//           fullWidth
//           id='text'
//           name='text'
//           label='Mensaje'
//           value={formik.values}
//           onChange={formik.handleChange}
//           error={formik.touched.text && Boolean(formik.errors.text)}
//           helperText={formik.touched.text && formik.errors.text}
//         />
//         <Button color='primary' variant='contained' fullWidth type='submit' >
//           Enviar
//         </Button>
//       </form>
//     </div>
//   ) 
// }

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
                      onChange={handleChange}onBlur={handleBlur} value={values.motive} 
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

//<<<<<<<<<<<<<<<<<< HTML >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// export default function EmailService() {
//   const [email, setEmail] = useState({from: '', motive: '', text: ''});

//   const handleChange = (e) => {
//     setEmail({...email, [e.target.name]: e.target.value});
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/sendEmail', email)
//     .then((response) => {
//       console.log(response);
//       setEmail({from: '', motive: '', text: ''});
//       alert('Email enviado')
//     })
//     .catch(error => console.log('error', error.message));
//   }

//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type='text' name={'from'} value={email.from} onChange={handleChange} placeholder='Tu correo electrónico'/>
//         <input type='text' name={'motive'} value={email.motive} onChange={handleChange} placeholder='Motivo de contacto'/>
//         <input type='text' name={'text'} value={email.text} onChange={handleChange} placeholder='Tu mensaje'/>
//         <input type='submit' value='enviar' onSubmit={handleSubmit}/>
//       </form>
//     </div>
//   )
// }