function getFraseMotivacional() {
    const frases = [
        "Acredite em si mesmo e tudo será possível.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A persistência é o caminho do êxito.",
        "Você é mais forte do que pensa, acredite nisso.",
        "Não espere por oportunidades, crie-as."
    ];
    
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}


console.log(getFraseMotivacional());
