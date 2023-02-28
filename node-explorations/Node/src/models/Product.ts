// Criando um mini banco de dados de exemplo para o model trabalhar:

type ProductType = {
    title: string;
    price: number;
} // Fazendo um type pro array de objetos de produtos

const bancoDeDadosDeProdutos: ProductType[] = [
    {title: 'produto 1', price: 10},
    {title: 'produto 2', price: 20},
    {title: 'produto 3', price: 30},
]

// Criando o model para trabalhar com os dados do banco de dados:

export const Produto = {

    // Função que exibe todos os produtos listados no banco de dados
    exibirTodos: (): ProductType[] => {
        return bancoDeDadosDeProdutos;
    },

    // Função que exibe todos os produtos com preço menor que um determinado valor:
    filtrarAteDeterminadoPreco: (precoMaximo: number): ProductType[] => {
        return bancoDeDadosDeProdutos.filter(item  => item.price >= precoMaximo);
    }
    
}

