import incomeimg from "../../assets/income.svg"
import outcomeimg from "../../assets/outcome.svg"
import totalimg from "../../assets/total.svg"
import {useTransaction } from "../../hooks/useTransaction";

import { Container } from "./styles";

export function Summary(){

    const {transaction} = useTransaction()

    const summary = transaction.reduce((acc, transaction) =>{
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeimg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'brl'
                        }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeimg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'brl'
                        }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="heighlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalimg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'brl'
                        }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}