const site: unknown = 'https://hcode.com.br';
let sitesFavoritos: string[] = [];

sitesFavoritos.push( site as string);   //TODO: Realizado casting através da palavara reservada 'as'.
sitesFavoritos.push( <string> site);   //TODO: Realizado casting através do comando <tipo_dado> antes do parâmetro.
