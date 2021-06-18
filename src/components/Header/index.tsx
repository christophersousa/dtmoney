import React from 'react'
import LogoImg from '../../assets/logo.svg'
import { Container, Contant } from './style'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){
    return(
        <Container>
            <Contant>
                <img src={LogoImg} alt="dt money" />
                <button 
                type="button"
                onClick={onOpenNewTransactionModal}
                >
                Nova Transação
                </button>
            </Contant>
        </Container>
    )
}