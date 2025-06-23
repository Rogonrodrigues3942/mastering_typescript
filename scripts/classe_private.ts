class Banco {

    private cofreQtd: number = 10000000;

    private debitarCofre(quantidade: number):number | string{
        if (this.cofreQtd >= quantidade){
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else{
            return 'O cofre não possui a quantidade requisitada';
        }
    }

    protected sacarDoCaixa(quantidade: number){

        return this.debitarCofre(quantidade);
    }
    
    public sacarDoCaixaEletronic(quantidade: number){
        
        return this.debitarCofre(quantidade);
    }
}

class Banco24Horas extends Banco{

    public sacar(qtd:number){
        return this.sacarDoCaixa(qtd);
    }
}

const nibank = new Banco();
// nibank.sacarDoCaixaEletronic(100);

const banco24Horas = new Banco24Horas();
banco24Horas.sacar(200);