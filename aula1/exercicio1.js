const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.cpf = '726126532532';
 pessoa.seguroSocial = '7736826353543';

 console.log(`os 4 primeiros digitos do CPF são ${pessoa.cpf.substring(0, 4)}`);