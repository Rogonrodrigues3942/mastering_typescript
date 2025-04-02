const filmesCategorias: (string| number)[] = ['Comédia', 'Drama', 'Romance', 'Aventura'];

console.log(filmesCategorias);
filmesCategorias.push('Terror');
console.log(filmesCategorias);

const filmesAnos: Array<number | string> = [];

for (let ano = 1990; ano <= new Date().getFullYear(); ano++) {

    filmesAnos.push(ano)
}

console.log(filmesAnos)