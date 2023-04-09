import React, { useState, useEffect } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

import { questions } from '../data/Stack';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflow: 'scroll',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function MultipleChoice() {
    const [open, setOpen] = useState(false);
    const [corrects, setCorrects] = useState([]);
    const [chosenCorrect, setChosenCorrect] = useState([]);
    const [chosenIncorrect, setChosenIncorrect] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

    useEffect(() => {
        const allCorrects = questions?.map(question => question.correct);
        setCorrects(allCorrects);
    }, []);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleClick = (value) => {
        if (corrects.includes(value)) {
            if (!chosenCorrect.includes(value)) {
                setCorrectCount(correctCount + 1)
                alert(`La respuesta ${value} es CORRECTA!!`)
                setChosenCorrect([...chosenCorrect, value]);
            } else {
                alert('Eepa, ya elegiste!!')
            }
        }
        else {
            setIncorrectCount(incorrectCount + 1);
            alert(`${value} No es correcta (-_-)`);
            setChosenIncorrect([...chosenIncorrect, value])
        }
    }

    return(
        <div>
                <Button variant='outlined' color='secondary' onClick={handleOpen}>
                    Jugar
                </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
            >
                <Box sx={styles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Espero que pases un buen rato 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Tenés 5 minutos?
                    </Typography>
                    <h4>Correctas: {correctCount}</h4>
                    <h4>Incorrectas: {incorrectCount}</h4>
                    {questions?.map((ques, index) => {
                        return (
                            <div id={`que-${index}`} key={index}>
                                <h3>{ques.question}</h3>
                                {ques.options?.map((option) => (
                                    <Button 
                                        key={option}
                                        id={option} 
                                        value={option} 
                                        color="secondary"
                                        style={{'marginTop': '8px', 'marginRight': '5px'}}
                                        variant={chosenCorrect.includes(option) ? "contained" : "outlined"}
                                        onClick={() => handleClick(option)}
                                        disabled={chosenIncorrect.includes(option) ? true : false}
                                    >
                                    {option}
                                    </Button>
                                ))}
                            </div>
                        )
                    })}
                </Box>
            </Modal>
        </div>
    )
}