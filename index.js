import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red.bold.underline(erro));
}

function extraiLinks(texto) {
    const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const resultados = [];
    let match;

    while ((match = regex.exec(texto)) !== null) {
        resultados.push({ texto: match[1], url: match[2] });
    }

    return resultados;
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.magenta.bold(`Conteúdo do arquivo: ${caminhoDoArquivo}\n`));
        console.log(chalk.green(texto));

        const links = extraiLinks(texto);
        if (links.length > 0) {
            console.log(chalk.blue.bold('\nLinks encontrados:'));
            links.forEach(link => console.log(chalk.cyan(`${link.texto}: ${link.url}`)));
        } else {
            console.log(chalk.yellow('Nenhum link Markdown encontrado no arquivo.'));
        }
    } catch (erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/texto copy.md');