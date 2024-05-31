function Console (modelo, fabricante, anoModelo) {
    this.modelo = modelo;  /*this é o mesmo que o console*/
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    
    this.jogar = function(fortnite) {
        console.log("jogar");
    }
}

    const xBoxOne = new Console("xbox", "microsoft", 2019);
    const playstation = new Console("playstation", "sony", 2019);

    console.log (xBoxOne);
    console.log (playstation);
/* pra chamar é necessario a palavra new*/

////////////////////////////////////////////////////////////

const nome = "thais"
const idade = 38
const profissao = "dev front-end"
const hobbies = ["games", "historiaantiga", "desenhoanimado"]

const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao,
    hobbies: hobbies,

}

 
function exibeAtributo(nomeAtributo) {
  console.log(pessoa.nome, idade, profissao, hobbies)
}

exibeAtributo('nome','idade', 'profissao', 'hobbies');

const nome = "thais"
const idade = 38
const profissao = "dev front-end"
const hobbies = ["games", "historiaantiga", "desenhoanimado"]

const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao,
    hobbies: hobbies,

}

 function exibeAtributo(nomeAtributo) {
  console.log(pessoa['nome', 'idade', 'profissao', 'hobbies'])
}

exibeAtributo('nome',idade, 'profissao', 'hobbies');

const nome = "thais"
const idade = 38
const profissao = "dev front-end"
const hobbies = ["games", "historiaantiga", "desenhoanimado"]

const informacoes = {
    nome: nome,
    idade: idade,
    profissao: profissao,
    hobbies: hobbies,

}

function exibeAtributo(nomeAtributo) { 
    console.log(informacoes[nomeAtributo])
}

exibeAtributo('nome');
exibeAtributo(idade);
exibeAtributo('profissão');
exibeAtributo('hobbies');


if ('nome' in informacoes) {
    console.log('informacoes dessa pessoa');
}

////////////////////////////////////////////////////////

function Pessoa(nome, sobrenome, idade, altura, peso) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;

    this.contratacao = function() {
        console.log(this.nome, this.sobrenome, this.idade, this.altura, this.peso);
    }
}

function Funcionario(nome, sobrenome, idade, altura, peso, cargo, salario, horarioInicial, horarioFinal, diasTrabalhados) {
    Pessoa.call(this, nome, sobrenome, idade, altura, peso);

    this.cargo = cargo;
    this.salario = salario;
    this.horarioInicial = horarioInicial;
    this.horarioFinal = horarioFinal;
    this.diasTrabalhados = diasTrabalhados;

    this.contratacao1 = function() {
        console.log(this.cargo, this.salario, this.horarioInicial, this.horarioFinal, this.diasTrabalhados);
    }
}

const pessoa1 = new Pessoa("Iris", "Lima", 30, 1.65, 65);
const funcionario1 = new Funcionario("Iris", "Lima", 30, 1.65, 65, "dev front-end jr", 7000, "13:00", "20:00", ["segunda", "terça", "quarta", "quinta", "sexta"]);

pessoa1.contratacao();
funcionario1.contratacao1();

console.log(pessoa1);
console.log(funcionario1);

//

function Individuo(nome) {
    this.nome = nome;
    this.arvorearvoregenealogica = function() {
        console.log(this.nome + ' família do Pedrinho');
    }
}

function Familia(nome, sobrenome, idade, pai, mae, avoMaterna, avoPaterno, avoMaterno, avoPaterno, irmaos) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.pai = pai;
    this.mae = mae;
    this.avoMaterna = avoMaterna;
    this.avoPaterno = avoPaterno;
    this.avoMaterno = avoMaterno;
    this.avoPaterno = avoPaterno;
    this.irmaos = irmaos;

    Individuo.call(this, nome);
}

const individuo1 = new Individuo("Pedrinho");
const familia1 = new Familia("nome", "sobrenome", 14, "pai", "mae", "avoMaterna", "avoPaterno", "avoMaterno", "avoPaterno", ["Eva", "Emanuel"]);

individuo1.arvoregenealogica();

console.log(individuo1);
console.log(familia1);

//


function Dados(nome) {
    this.nome = nome;
    this.dadosCadastrais = function() {
        console.log(this.nome + ' família do Pedrinho');
    }
}

function Documentos(nome, idade, pai, mae, dataNascimento, rg, cpf, habilitacao, estadoCivil) {
    this.nome = nome;
    this.idade = idade;
    this.pai = pai;
    this.mae = mae;
    this.dataNascimento = dataNascimento;
    this.rg = rg;
    this.cpf = cpf;
    this.habilitacao = habilitacao;
    this.estadoCivil = estadoCivil;

    Dados.call(this, nome);
}

const dados1 = new Dados(" Pedro João Francisco Severino de Souza");
const doc1 = new Documentos("nome", 18, "pai", "mae", "10/05/2010", "1234567", "12345678901", "12345", "solteiro");

dados1.dadosCadastrais();

console.log(dados1);
console.log(doc1);



