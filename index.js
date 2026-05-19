import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    // Agora o erro realmente existe fisicamente e será jogado para o console
    throw new Error(chalk.red.bold.underline(erro));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        // Forma moderna (async/await) para ler o arquivo
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        
        // printing content in bold magenta
        console.log(chalk.magenta.bold(texto));
    } catch (erro) {
        // Captura o erro aqui e repassa para a função de tratamento
        trataErro(erro);
    }
}

// Linha de chamada da funçãod
pegaArquivo('./texto.md');

// Exemplo de log mantido
console.log(chalk.magenta('Os circuitos deconsagração social serão tanto mais eficazes quanto maior a distância social do objeto consagrado'));

// console.log('São geralmente recuperados a partir de um objeto FileList...');
// console.log('São geralmente recuperados a partir de um objeto FileList...');
pegaArquivo('./arquivos/texto.md');