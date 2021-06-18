import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({

  models:{
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance website',
          amount: 6000,
          type: 'deposit',
          category: 'Dev',
          createAt: new Date('2021-06-17 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          type: 'withdraw',
          category: 'Casa',
          createAt: new Date('2021-06-03 17:30:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);