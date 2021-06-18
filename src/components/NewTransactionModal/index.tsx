import React, { FormEvent,useState } from "react";
import closeImg from "../../assets/close.svg"
import Modal from "react-modal";
import {Container, TransactionTypeContent, RadioBox} from "./styles"

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import {useTransaction } from "../../hooks/useTransaction";



interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){

    const { createTransaction } = useTransaction()
    const [type, setType] = useState('deposit')

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleNewTransaction(event: FormEvent){
        event.preventDefault()
        await createTransaction({
            title,
            amount,
            type,
            category 
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return(
        <Modal
        isOpen = {isOpen}
        onRequestClose = {onRequestClose}
        ariaHideApp={false}
        overlayClassName= 'react-modal-overlay'
        className = 'react-modal-content'
        >
            <button 
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar o modal" />
            </button>

            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                placeholder='Titulo'
                value= {title}
                onChange={event => setTitle(event.target.value)}
                />

                <input 
                type="number"  
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContent>
                    <RadioBox 
                    type="button"
                    onClick={() =>{setType('deposit')}}
                    isActive= {type === 'deposit'}
                    activeColor= 'green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox 
                    type="button"
                    onClick={() =>{setType('withdraw')}}
                    isActive= {type === 'withdraw'}
                    activeColor= 'red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>

                    
                </TransactionTypeContent>

                <input 
                type="text" 
                placeholder="Categoria"
                value= {category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}