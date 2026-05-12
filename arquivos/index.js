import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    // throw new Error(erro);
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        // Alterei para magenta (roxo) 
        console.log(chalk.magenta.bold(texto));
    })
}

// Linha de chamada da função
pegaArquivo('./texto.md');

// Exemplos de logs que pra manter ou que estavam no original
console.log(chalk.magenta('Os circuitos de consagração social serão tanto mais eficazes quanto maior a distância social do objeto consagrado'));

// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)...');
// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)...');