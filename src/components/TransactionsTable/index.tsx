import {useTransaction } from "../../hooks/useTransaction";
import { Container } from "./styles";



export function TransactionTable(){

    const {transaction} = useTransaction()

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {transaction.map(response =>{
                        return(
                            <tr key={response.id}>
                                <td>{response.title}</td>
                                <td className={response.type}>
                                    {new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'brl'
                                    }).format(response.amount)}
                                </td>
                                <td>{response.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-br').format(
                                        new Date(response.createAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </Container>
    )
}