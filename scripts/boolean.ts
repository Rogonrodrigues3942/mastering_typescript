// TODO: BOOLEAN

let admin: boolean = true;

admin = false;
admin = Boolean('1');
console.log(admin);

// TODO: Verificando senha

let senha = '1234';
let senhaSegura: boolean;

senhaSegura = senha.length > 8;
console.log(senhaSegura);