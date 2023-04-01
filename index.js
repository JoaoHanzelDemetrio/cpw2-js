
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people) {
    let nomeInvertido = [];

    for (let i = people.length - 1; i >= 0; i--) {
        nomeInvertido.push(people[i]);
    }

    for (let i = 0; i < nomeInvertido.length; i++) {
        console.log(nomeInvertido[i]);
    }


    return nomeInvertido;

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.


}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {

    let somaGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        somaGrades += grades[i];
    }

    return somaGrades / grades.length;

}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {

    if (mean >= 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate) {

    const data = strDate.split("/");
    const dia = parseInt(data[0]);
    const mes = parseInt(data[1]);
    const ano = parseInt(data[2]);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return "";
    }

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0) {
        return "";
    }

    const mesNomes = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];
    const mesNome = mesNomes[mes - 1];

    const dataFormatada = `${dia.toString().padStart(2, '0')} de ${mesNome} de ${ano.toString().padStart(2, '0')}`;
    return dataFormatada;
}






// TODO
// 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
// por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
// “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
// Nesse caso, o separador é a barra (/) da data.




// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}