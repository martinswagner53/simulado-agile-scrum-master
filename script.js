// ==============================
// SIMULADO CTFL
// ==============================

const app = document.getElementById("app");
let questoesSimulado = [];
let paginaAtual = 0;
let respostas = {};
let mostrandoCorrecao = false;
let paginasCorrigidas = [];
let questoesErradas = [];
let modoRevisao = false;

mostrarTelaInicial();

function mostrarTelaInicial() {

    const progresso = localStorage.getItem("progressoCTFL");

    app.innerHTML = `
  
        <div class="container">

            <div class="card">

                <h1>SIMULADO PARA CERTIFICAÇÃO AGILE SCRUM MASTER</h1>
                <p class="descricao-inicial">
                    Prepare-se para a prova resolvendo questões
                    semelhantes ao exame oficial.
                </p>

                <button id="btnIniciar" ${progresso ? "disabled" : ""}>
                    Iniciar Simulado
                </button>

                <button id="btnContinuar" ${!progresso ? "disabled" : ""}>
                    Continuar Simulado
                </button>

                ${!progresso ? 
                "<small>Nenhum simulado salvo encontrado.</small>" 
                : 
                "<small>Existe um simulado em andamento!</small>"
                }

                <button id="btnNovo" ${!progresso ? "disabled" : ""}>
                    Novo Simulado
                </button>


                <div class="espaco-menu"></div>
                <div class="espaco-menu"></div>

                <button id="btnMaterial">
                    📚 Material de Estudo
                </button>

                <button id="btnGlossario">
                    📖 Conceitos Ágeis
                </button>

                <button id="btnConceitos">
                    📖 Lista de Conceitos Básicos
                </button>

            </div>

        </div>

    `;

    
    document
    .getElementById("btnIniciar")
    .addEventListener("click", iniciarSimulado);

    document
    .getElementById("btnContinuar")
    .addEventListener("click", continuarSimulado);

    document
    .getElementById("btnNovo")
    .addEventListener("click", novoSimulado);

    document
    .getElementById("btnMaterial")
    .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnGlossario")
    .addEventListener("click", mostrarGlossario);

    document
    .getElementById("btnConceitos")
    .addEventListener("click", mostrarConceitos);

}

// ESTA FUNÇÃO FICA AQUI
function iniciarSimulado(){

    questoesSimulado = embaralhar(questoes).slice(0, 40);

    paginaAtual = 0;

    respostas = {};

    salvarProgresso();

    mostrarPagina();

}

function mostrarPagina() {

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesPagina = questoesSimulado.slice(inicio, fim);
    const totalPaginas = Math.ceil(questoesSimulado.length / 10);

    const totalRespondidas = Object.keys(respostas).length;

    const percentual =
    (totalRespondidas / questoesSimulado.length) * 100;

    let html = `

        <div class="container">

            <div id="areaSimulado" class="card">

                <h1>Simulado Agile Scrum Master</h1>

            <p>
                Página ${paginaAtual + 1} de ${totalPaginas}
            </p>

            <div class="progresso-container">

                <div class="progresso-texto">

                    Progresso do Simulado

                </div>

                <div class="barra-progresso">

                    <div
                        class="barra-preenchimento"
                        style="width:${percentual}%;">
                    </div>

                </div>

                <div class="progresso-info">

                    ${totalRespondidas} de ${questoesSimulado.length}
                    questões respondidas (${percentual.toFixed(0)}%)

                </div>

            </div>

    `;

    questoesPagina.forEach((questao, indice) => {

        html += `

            <div class="questao">

                <h3>${inicio + indice + 1}. ${questao.pergunta}</h3>

        `;

        questao.opcoes.forEach((opcao) => {

    const letra = opcao.charAt(0);

    let classe = "";


    if (mostrandoCorrecao) {

        if (letra === questao.correta) {

            classe = "correta";

        }


        if (
            letra === respostas[questao.id] &&
            respostas[questao.id] !== questao.correta
        ) {

            classe = "errada";

        }

    }


    html += `

        <label
        id="opcao-${questao.id}-${letra}"
        class="opcao ${classe}">

        <input
            type="radio"
            name="${questao.id}"
            value="${letra}"
            ${respostas[questao.id] === letra ? "checked" : ""}
            ${mostrandoCorrecao ? "disabled" : ""}
            onchange="salvarResposta('${questao.id}', '${letra}')">

        ${opcao}

        </label>

    `;

});

        html += `
            
            <div id="explicacao-${questao.id}"></div>
            
            </div>

            

        `;

    });

    html += `

            <div class="botoes">

            <button id="btnAnterior" ${paginaAtual === 0 ? "disabled" : ""}>
            ⬅ Página Anterior
            </button>


            <button id="btnResultado">
            📊 Resultado
            </button>


            ${
            paginaAtual === totalPaginas - 1
            ?
            `
            <button
                id="btnFinalizar"
                disabled
            >
                🏁 Finalizar Simulado
            </button>
            `
            :
            `
            <button
                id="btnProxima"
                disabled
            >
                Próxima ➡
            </button>
            `
            }


            <button id="btnInicio">
            🏠 Página Inicial
            </button>


            </div>


            <!-- Resultado fica separado dos botões -->
            <div id="resultado"></div>


            </div>

        </div>

`;

    app.innerHTML = html;

    window.scrollTo({
    top: 0,
    behavior: "smooth"
});

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    const todasRespondidas = questoesDaPagina.every(
        questao => respostas[questao.id]
    );

    const btnProximaAtual = document.getElementById("btnProxima");

    if(btnProximaAtual){

        btnProximaAtual.disabled = false;

    }

    // Verifica se TODAS as questões do simulado foram respondidas
    const todasRespondidasSimulado =
        Object.keys(respostas).length === questoesSimulado.length;

    const btnFinalizarAtual = document.getElementById("btnFinalizar");

    if(btnFinalizarAtual){

        btnFinalizarAtual.disabled = !todasRespondidasSimulado;

    }
    

    const btnProxima = document.getElementById("btnProxima");

    if(btnProxima){

        btnProxima.addEventListener("click", proximaPagina);

    }

    const btnFinalizar = document.getElementById("btnFinalizar");

    if(btnFinalizar){

        btnFinalizar.addEventListener("click", finalizarSimulado);

    }

    document
    .getElementById("btnAnterior")
    .addEventListener("click", paginaAnterior);

    document
    .getElementById("btnResultado")
    .addEventListener("click", function(e){

    e.preventDefault();

    this.blur();


    // Guarda posição atual da tela
    const scrollAtual = window.scrollY;


    const validou = mostrarCorrecao();


    if(validou){

        mostrarResultado();


        // Aguarda o HTML atualizar
        requestAnimationFrame(() => {

        document
        .getElementById("resultado")
        .scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

    }

});

    document
    .getElementById("btnInicio")
    .addEventListener("click", mostrarTelaInicial);

}

function embaralhar(lista){

    const copia = [...lista];

    for(let i = copia.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia;

}

function proximaPagina(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    let questoesPendentes = [];


    questoesDaPagina.forEach((questao, indice)=>{

        if(!respostas[questao.id]){

            questoesPendentes.push(inicio + indice + 1);

        }

    });


    if(questoesPendentes.length > 0){

        alert(
            `⚠️ Responda todas as questões desta página antes de continuar.\n\nQuestões pendentes: ${questoesPendentes.join(", ")}`
        );

        return;

    }


    // Sai do modo correção ao mudar de página
    mostrandoCorrecao = paginasCorrigidas[paginaAtual + 1] || false;


    paginaAtual++;

    salvarProgresso();

    mostrarPagina();

}


function finalizarSimulado(){

    let acertos = 0;
    let erros = 0;

    questoesSimulado.forEach((questao)=>{

        if(respostas[questao.id] === questao.correta){

            acertos++;

        }else{

            erros++;

        }

    });

    const total = questoesSimulado.length;

    const percentual = ((acertos / total) * 100).toFixed(1);

    let situacao = "";
    let cor = "";

    if(percentual >= 70){

        situacao = "✅ APROVADO";
        cor = "#2ecc71";

    }else{

        situacao = "❌ REPROVADO";
        cor = "#e74c3c";

    }

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>🎉 Simulado Finalizado</h1>

            <hr>

            <h2>Resultado Final</h2>

            <p><strong>Total de Questões:</strong> ${total}</p>

            <p><strong>✅ Acertos:</strong> ${acertos}</p>

            <p><strong>❌ Erros:</strong> ${erros}</p>

            <p><strong>📊 Aproveitamento:</strong> ${percentual}%</p>

            <h2 style="color:${cor}; margin-top:25px;">
                ${situacao}
            </h2>

            <br>

            <button id="btnRevisarErradas">
                🔍 Revisar Questões Erradas
            </button>

            <button id="btnNovoSimulado">
                🔄 Novo Simulado
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnNovoSimulado")
        .addEventListener("click", novoSimulado);

    document
        .getElementById("btnRevisarErradas")
        .addEventListener("click", revisarQuestoesErradas);

}

function revisarQuestoesErradas(){

    questoesErradas = [];


    questoesSimulado.forEach((questao)=>{

        const respostaUsuario = respostas[questao.id];


        if(
            respostaUsuario &&
            respostaUsuario !== questao.correta
        ){

            questoesErradas.push(questao);

        }

    });


    if(questoesErradas.length === 0){

        alert("🎉 Parabéns! Você não possui questões erradas.");

        return;

    }


    modoRevisao = true;


    let html = `

    <div class="container">

        <div class="card">

        <button
        id="btnVoltarResultadoTopo"
        class="btn-voltar">

            ⬅ Voltar ao Resultado

        </button>

            <h1>
            🔍 Revisão das Questões Erradas
            </h1>


            <p>
            Total de questões para revisar:
            ${questoesErradas.length}
            </p>

            

    `;


    questoesErradas.forEach((questao, indice)=>{


        const respostaUsuario = respostas[questao.id];


        html += `

        <div class="questao">


            <h3>
            ${indice + 1}. ${questao.pergunta}
            </h3>


        `;


        questao.opcoes.forEach((opcao)=>{


            const letra = opcao.charAt(0);


            let classe = "";


            if(letra === questao.correta){

                classe = "correta";

            }


            if(letra === respostaUsuario){

                classe = "errada";

            }


            html += `

            <div class="opcao ${classe}">

                ${opcao}

            </div>

            `;


        });


        html += `


        <div class="explicacao">

            <strong>Resposta correta:</strong>
            ${questao.correta}

            <br><br>

            <strong>Explicação:</strong>

            <p>
            ${questao.explicacao}
            </p>


        </div>


        


        </div>


        `;


    });


    html += `


        <button id="btnVoltarResultadoRodape">

            ⬅ Voltar ao Resultado

        </button>


        </div>

    </div>
    


    `;
    


    app.innerHTML = html;

    function voltarResultado(){

    modoRevisao = false;

    finalizarSimulado();

}

document
.getElementById("btnVoltarResultadoTopo")
.addEventListener(
    "click",
    voltarResultado
);

document
.getElementById("btnVoltarResultadoRodape")
.addEventListener(
    "click",
    voltarResultado
);

    


}

function salvarResposta(id, resposta){

    respostas[id] = resposta;

    salvarProgresso();


    // Atualiza a barra de progresso
    const totalRespondidas = Object.keys(respostas).length;

    const percentual =
    (totalRespondidas / questoesSimulado.length) * 100;


    const barra = document.querySelector(".barra-preenchimento");

    const texto = document.querySelector(".progresso-info");


    if(barra){

        barra.style.width = percentual + "%";

    }


    if(texto){

        texto.innerHTML = `
            ${totalRespondidas} de ${questoesSimulado.length}
            questões respondidas (${percentual.toFixed(0)}%)
        `;

    }


    // ===============================
    // VERIFICA SE AS 10 QUESTÕES DA PÁGINA
    // FORAM RESPONDIDAS
    // ===============================

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    const todasRespondidas = questoesDaPagina.every(
        questao => respostas[questao.id]
    );

    const btnProxima = document.getElementById("btnProxima");

    if(btnProxima){

        btnProxima.disabled = !todasRespondidas;

    }

    // Verifica se TODAS as questões do simulado foram respondidas
    const todasRespondidasSimulado =
        Object.keys(respostas).length === questoesSimulado.length;

    const btnFinalizar = document.getElementById("btnFinalizar");

    if (btnFinalizar) {

        btnFinalizar.disabled = !todasRespondidasSimulado;

    }

}

function mostrarCorrecao(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    let questoesPendentes = [];

    questoesDaPagina.forEach((questao, indice)=>{

        if(!respostas[questao.id]){
            questoesPendentes.push(inicio + indice + 1);
        }

    });

    if(questoesPendentes.length > 0){

        alert(
            `⚠️ Responda todas as questões desta página antes de ver o resultado.\n\nQuestões pendentes, numero: ${questoesPendentes.join(", ")}`
        );

        mostrandoCorrecao = false;

        return false;
    }

    mostrandoCorrecao = true;

    paginasCorrigidas[paginaAtual] = true;

    salvarProgresso();

    // LIBERA O BOTÃO PRÓXIMA
    const btnProxima = document.getElementById("btnProxima");

    if (btnProxima) {
        btnProxima.disabled = false;
    }

    aplicarCorrecaoVisual();

    mostrarExplicacoes();

    return true;
}

function paginaAnterior(){

    paginaAtual--;

    mostrandoCorrecao = paginasCorrigidas[paginaAtual] || false;

    mostrarPagina();

}

function salvarProgresso(){

    const progresso = {

        questoes: questoesSimulado,

        pagina: paginaAtual,

        respostas: respostas,

        paginasCorrigidas: paginasCorrigidas

    };


    localStorage.setItem(
        "progressoCTFL",
        JSON.stringify(progresso)
    );

}

function continuarSimulado(){

    const progresso = localStorage.getItem("progressoCTFL");


    if(!progresso){

        alert("Nenhum progresso encontrado.");

        return;

    }


    const dados = JSON.parse(progresso);


    questoesSimulado = dados.questoes;

    paginaAtual = dados.pagina;

    respostas = dados.respostas;


    paginasCorrigidas = dados.paginasCorrigidas || [];


    mostrandoCorrecao = paginasCorrigidas[paginaAtual] || false;


    mostrarPagina();


    if(mostrandoCorrecao){

        mostrarExplicacoes();

    }

}

function novoSimulado(){

    const confirmar = confirm(
        "Deseja iniciar um novo simulado?\n\nTodo o progresso atual será apagado."
    );

    if(confirmar){

        localStorage.removeItem("progressoCTFL");

        questoesSimulado = [];
        respostas = {};
        paginaAtual = 0;
        mostrandoCorrecao = false;
        paginasCorrigidas = [];   // <-- Faltava isso

        mostrarTelaInicial();

    }

}

function mostrarExplicacoes(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);


    questoesDaPagina.forEach((questao)=>{

        const campo = document.getElementById(
            `explicacao-${questao.id}`
        );


        if(campo){

            campo.innerHTML = `

            <div class="explicacao">

                <p>
                Resposta correta:
                ${questao.correta}
                </p>

                <p>
                Explicação:
                ${questao.explicacao}
                </p>

            </div>

            `;

        }

    });

}

function mostrarResultado(){

    let acertos = 0;
    let erros = 0;
    let respondidas = 0;


    const inicio = paginaAtual * 10;
    const fim = inicio + 10;


    const questoesDaPagina = questoesSimulado.slice(inicio, fim);


    questoesDaPagina.forEach((questao)=>{

        const respostaUsuario = respostas[questao.id];


        if(respostaUsuario){

            respondidas++;


            if(respostaUsuario === questao.correta){

                acertos++;

            }
            else{

                erros++;

            }

        }

    });


    const percentual = ((acertos / questoesDaPagina.length) * 100).toFixed(1);


    const totalRespondidas = Object.keys(respostas).length;


    const progresso = ((totalRespondidas / questoesSimulado.length) * 100).toFixed(0);



    document.getElementById("resultado").innerHTML = `

        <div class="resultado">

            <h2><br>📊 Resultado da Página</h2>


            <p>
                Questões respondidas:
                ${respondidas}/10
            </p>


            <p>
                ✅ Acertos:
                ${acertos}
            </p>


            <p>
                ❌ Erros:
                ${erros}
            </p>


            <h3>
                Aproveitamento:
                ${percentual}%
            </h3>


            <p>
                Progresso do Simulado:
                ${totalRespondidas}/${questoesSimulado.length}
                (${progresso}%)
            </p>


        </div>

    `;

}

function aplicarCorrecaoVisual(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    questoesDaPagina.forEach((questao)=>{

        // Marca a alternativa correta
        const correta = document.getElementById(
            `opcao-${questao.id}-${questao.correta}`
        );

        if(correta){

            correta.classList.add("correta");

        }

        // Marca a alternativa errada escolhida
        const respostaUsuario = respostas[questao.id];

        if(
            respostaUsuario &&
            respostaUsuario !== questao.correta
        ){

            const errada = document.getElementById(
                `opcao-${questao.id}-${respostaUsuario}`
            );

            if(errada){

                errada.classList.add("errada");

            }

        }

    });

}

function mostrarMaterial(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

                <button
                    id="btnVoltarTopoConceitos"
                    class="btn-voltar">

                    ⬅ Voltar

                </button>

            <h1>📚 Material de Estudo</h1>

            <p>
                Selecione um capítulo para estudar.
            </p>

            <div class="menu-capitulos">

                <button id="cap1">
                    📖 Capítulo 1<br>
                    <small>Conceitos Ágeis</small>
                </button>

                <button id="cap2">
                    📖 Capítulo 2<br>
                    <small>Responsabilidades e compromisso</small>
                </button>

                <button id="cap3">
                    📖 Capítulo 3<br>
                    <small>Facilitação e coaching do time</small>
                </button>

                <button id="cap4">
                    📖 Capítulo 4<br>
                    <small>Product Owner e Desenvolvedores</small>
                </button>

                <button id="cap5">
                    📖 Capítulo 5<br>
                    <small>Backlog de Produto e Backlog da Sprint</small>
                </button>

                <button id="cap6">
                    📖 Capítulo 6<br>
                    <small>Planejamento Ágil</small>
                </button>

                <button id="cap7">
                    📖 Capítulo 7<br>
                    <small>Estimativa Ágil</small>
                </button>

                <button id="cap8">
                    📖 Capítulo 8<br>
                    <small>Monitoramento e comunicação do progresso</small>
                </button>

                <button id="cap9">
                    📖 Capítulo 9<br>
                    <small>Mantendo o controle</small>
                </button>

                <button id="cap10">
                    📖 Capítulo 10<br>
                    <small>Escalando projetos Ágeis</small>
                </button>

                <button id="cap11">
                    📖 Capítulo 11<br>
                    <small>Adequação do Agile para diferentes tipos de projetos</small>
                </button>

                <button id="cap12">
                    📖 Capítulo 12<br>
                    <small>Administração Ágil, ferramentas e integração</small>
                </button>

                <button id="cap13">
                    📖 Capítulo 13<br>
                    <small>Implementação do Agile</small>
                </button>

                <button id="cap14">
                    📖 Capítulo 14<br>
                    <small>Autogerenciamento</small>
                </button>

            </div><br>

            <button id="btnVoltarMaterial">
                ⬅ Voltar ao Menu Inicial
            </button>

        </div>

    </div>

    `;

    document
    .getElementById("btnVoltarTopoConceitos")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );

    document
    .getElementById("btnVoltarMaterial")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );

    document.getElementById("cap1")
        .addEventListener("click", () => mostrarCapitulo(1));

    document.getElementById("cap2")
        .addEventListener("click", () => mostrarCapitulo(2));

    document.getElementById("cap3")
        .addEventListener("click", () => mostrarCapitulo(3));

    document.getElementById("cap4")
        .addEventListener("click", () => mostrarCapitulo(4));

    document.getElementById("cap5")
        .addEventListener("click", () => mostrarCapitulo(5));

    document.getElementById("cap6")
        .addEventListener("click", () => mostrarCapitulo(6));

    document.getElementById("cap7")
        .addEventListener("click", () => mostrarCapitulo(7));

    document.getElementById("cap8")
        .addEventListener("click", () => mostrarCapitulo(8));

    document.getElementById("cap9")
        .addEventListener("click", () => mostrarCapitulo(9));

    document.getElementById("cap10")
        .addEventListener("click", () => mostrarCapitulo(10));

    document.getElementById("cap11")
        .addEventListener("click", () => mostrarCapitulo(11));

    document.getElementById("cap12")
        .addEventListener("click", () => mostrarCapitulo(12));

    document.getElementById("cap13")
        .addEventListener("click", () => mostrarCapitulo(13));

    document.getElementById("cap14")
        .addEventListener("click", () => mostrarCapitulo(14));
}


async function mostrarCapitulo(numero){

    const resposta = await fetch(`capitulos/capitulo${numero}.html`);

    const conteudo = await resposta.text();

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

            <h1>📖 Capítulo ${numero}</h1>

            ${conteudo}

            <br>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

    document
    .getElementById("btnCapitulo")
    .addEventListener("click", () => mostrarCapitulo(1));

}

function mostrarGlossario(){

    let html = `

    <div class="container">

        <div class="card">


            <button 
            id="btnVoltarTopoGlossario"
            class="btn-voltar">

                ⬅ Voltar

            </button>



            <h1>
                <br>📖 Conceitos Ágeis
            </h1>


            <p>
                <br>
            </p>


            <input 
            type="text"
            id="buscarGlossario"
            placeholder="🔎 Pesquisar termo..."
            >


            <div id="listaGlossario">


    `;


    termosGlossario.forEach((item)=>{


        html += `


        <div class="termo">


            <h3>
                ${item.termo}
            </h3>


            <p>
                ${item.definicao}
            </p>


        </div>


        `;


    });



    html += `


            </div>


            <button id="btnVoltarGlossario">

                ⬅ Voltar ao Menu Inicial

            </button>


        </div>

    </div>


    `;



    app.innerHTML = html;

    document
    .getElementById("btnVoltarTopoGlossario")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );



    document
    .getElementById("btnVoltarGlossario")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );



    document
    .getElementById("buscarGlossario")
    .addEventListener(
        "input",
        filtrarGlossario
    );


}

function filtrarGlossario(){


    const pesquisa =
    document
    .getElementById("buscarGlossario")
    .value
    .toLowerCase();



    const termos =
    document.querySelectorAll(".termo");



    termos.forEach((item)=>{


        const texto =
        item.innerText.toLowerCase();



        if(texto.includes(pesquisa)){


            item.style.display="block";


        }else{


            item.style.display="none";


        }


    });


}

async function mostrarConceitos(){

    const resposta = await fetch("Conceitos/conceitos.html");

    const conteudo = await resposta.text();

    app.innerHTML = `

        <div class="container">

            <div class="card material-estudo">

                <button
                    id="btnVoltarConceitos"
                    class="btn-voltar">

                    ⬅ Voltar

                </button>

                ${conteudo}

            </div>

        </div>

    `;

    document
    .getElementById("btnVoltarConceitos")
    .addEventListener("click", mostrarTelaInicial);

    document
    .getElementById("btnVoltarMaterial")
    .addEventListener("click", mostrarTelaInicial);

}