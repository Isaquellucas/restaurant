const macarrao = {
    nome: "Macarrão com strogonocof",
    preco: 91, //é com strogonocof men
    armazenado: 1,
    disponivel: false,
};

const salada = {
    nome: "Salada",
    preco: 1, // saladé rim
    armazenado: 5,
    disponivel: false,
};
const disponivel = [macarrao, salada];

function pedidos (clientes){
    console.log (`${clientes}  pediu um ${macarrao.nome} e ${salada.nome}`);
    macarrao.armazenado--;
    salada.armazenado--;

        if (macarrao.armazenado === 0){
            console.log ("Macarrão está em falta por hora");
        };
        if (salada.armazenado === 0 ){ 
            console.log ("Salada está em falta por hora");
        };

        if (salada.armazenado <= 0 && macarrao.armazenado <= 0 ){
            console.log ('Não terá como ' + clientes + " Comer, Porque ambos pedidos estão em falta")
        };


        if (macarrao.armazenado >= 0) {
            macarrao.disponivel = true;
        };

        if (salada.armazenado >= 0) {
            salada.disponivel = true;
        };

const lista_de_pratos = disponivel.filter((value) => value.disponivel === true);

console.log (lista_de_pratos);
};
function calcular (){
    const soma = disponivel.reduce(
        (total, item) => total + (item.disponivel ? item.preco : 0),
        0
    );
    console.log ('A conta deu ' + soma);
}


pedidos("João");


export { calcular, };