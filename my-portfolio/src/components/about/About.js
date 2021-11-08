import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import {imageStack, mixCards} from '../data/Stack';

import style from './About.module.css';
const imgBack = require('../utils/icons/neutro.jpg').default;

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const deckCards = mixCards(imageStack);

export default function About({mode}) {
    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState({name:'', clic: false, nameTwo: '', clicTwo: false})

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e)
        clicked.name !== '' ? 
        setClicked({name: e.target.value, clic: true}) :
        setClicked({nameTwo: e.target.value, clicTwo: true})
    };

    return(
        <div id='about'>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Hola 👋🏼 Soy Mauricio Twerda, desarrollador Full-Stack <br />
                y este es mi portafolio <br />
                Te invito a jugar antes de seguir avanzando por la página
            </h2> 
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Jugar</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Adivina los pares correspondientes 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Tenés 3 minutos?
                    </Typography>
                    <ImageList variant='masonry'  sx={{width: '100%', height: '100%'}} 
                                cols={8} rows={1} >
                        {deckCards.map((img, index) => (                          
                            <div key={index} className={style.containerCard}>
                                <img
                                    src={img.icon}
                                    alt=''
                                    loading="lazy"
                                    className={style.cardBack}
                                />
                                <img 
                                    src={imgBack}
                                    alt=''
                                    loading="lazy"
                                    className={style.cardFront}
                                />
                            </div>
                        ))}
                    </ImageList>
                </Box>
            </Modal>
        </div>
    )
}

/* 

*/

{/* <input name='submitImage' type='image' 
                             src={clicked ? img.icon : imgBack} alt='' 
                             onClick={() => handleClick()} 
                             className={style.cardFront}/> */}


/* 
<label className={style.cardBack}>
                                    <img
                                        src={img.icon}
                                        alt=''
                                        loading="lazy"
                                        className={style.cardBack}
                                    />
                                </label>
                                <label className={style.cardFront}>
                                    <img 
                                        src={imgBack}
                                        alt=''
                                        loading="lazy"
                                        className={style.cardFront}
                                    />
                                </label>
*/

/* 
<form onSubmit={handleClick} key={index} className={style.containerCard}>
                                    <input value={img.name} type='image' 
                                    src={(clicked.name === img.name || clicked.nameTwo === img.name) ? img.icon : imgBack} alt='' 
                                    onSubmit={handleClick} 
                                    className={style.cardFront}/>
                                 </form> 
*/