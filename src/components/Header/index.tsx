import React from 'react'
import LogoImg from '../../assets/logo.svg'
import { Container, Contant } from './style'

export function Header(){
    return(
        <Container>
            <Contant>
                <img src={LogoImg} alt="dt money" />
                <button type="button">Nova Transação</button>
            </Contant>
        </Container>
    )
}