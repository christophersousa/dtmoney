import React, { useState } from "react";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import {TransactionProvider } from "./hooks/useTransaction"

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false)

  const handleOpenTransactionModal = () =>{
    setIsNewTransactionOpenModal(true)
  }

  const handleCloseTransactionModal = () =>{
    setIsNewTransactionOpenModal(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen ={isNewTransactionOpenModal}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

