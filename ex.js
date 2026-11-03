
// Função para limpar resultados e inputs de uma seção
function clearSection(id) {
    var section = document.getElementById(id);
    var inputs = section.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    var results = section.getElementsByClassName("result");
    for (var j = 0; j < results.length; j++) {
        results[j].innerHTML = "";
    }
}

// Calculadora básica
function calcBasic(op) {
    var a = parseFloat(document.getElementById("a1").value);
    var b = parseFloat(document.getElementById("b1").value);
    var res = document.getElementById("basicRes");

    if (isNaN(a) || isNaN(b)) {
        res.innerHTML = "Digite dois números válidos!";
        return;
    }

    var r = 0;
    switch (op) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/':
            if (b === 0) {
                res.innerHTML = "Não é possível dividir por 0!";
                return;
            }
            r = a / b;
            break;
    }
    res.innerHTML = "Resultado: " + r;
}

// Média de 4 notas
function calcMedia() {
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    var m3 = document.getElementById("m3").value;
    var m4 = document.getElementById("m4").value;

    if (m1 > m2 && m1 > m3 && m1 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m1;
    } else if (m2 > m1 && m2 > m3 && m2 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m2;
    }else if (m3 > m1 && m3 > m2 && m3 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m3;
    } else if (m4 > m1 && m4 > m2 && m4 > m3) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m4;
    }else {
        document.getElementById("maiorRes").innerHTML = "Numeros Iguais";
    }
}

    // Perímetro retângulo
    function calcPerimetro() {
        var a = parseFloat(document.getElementById("rL1").value);
        var b = parseFloat(document.getElementById("rL2").value);
        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            document.getElementById("periRes").innerHTML = "Digite lados válidos!";
            return;
        }
        var peri = 2 * (a + b);
        document.getElementById("periRes").innerHTML = "Perímetro: " + peri;
    }

    // Área círculo
    function areaCirculo() {
        var r = parseFloat(document.getElementById("rc").value);
        if (isNaN(r) || r < 0) {
            document.getElementById("areaRes").innerHTML = "Raio inválido!";
            return;
        }
        var area = 3.14159 * r * r;
        document.getElementById("areaRes").innerHTML = "Área: " + area.toFixed(2);
    }

    // Nome completo
    function nomeCompleto() {
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        if (nome === "" || sobrenome === "") {
            document.getElementById("nomeRes").innerHTML = "Preencha os dois campos!";
            return;
        }
        document.getElementById("nomeRes").innerHTML = "Nome completo: " + nome + " " + sobrenome;
    }

    // Maior entre 4
    function maior4() { 
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    var m3 = document.getElementById("m3").value;
    var m4 = document.getElementById("m4").value;

    if (m1 > m2 && m1 > m3 && m1 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m1;
    } else if (m2 > m1 && m2 > m3 && m2 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m2;
    }else if (m3 > m1 && m3 > m2 && m3 > m4) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m3;
    } else if (m4 > m1 && m4 > m2 && m4 > m3) {
        document.getElementById("maiorRes").innerHTML = "Maior Numero: " + m4;
    }else {
        document.getElementById("maiorRes").innerHTML = "Numeros Iguais";
    }
}

    // Menor entre 5
    function menor5() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
    var s5 = document.getElementById("s5").value;
    if (s1 < s2 && s1 < s3 && s1 < s4 && s1 < s5) {
        document.getElementById("menorRes").innerHTML = "Menor Numero: " + s1;
    }else if (s2 < s1 && s2 < s3 && s2 < s4 && s2 < s5) {
        document.getElementById("menorRes").innerHTML = "Menor Numero: " + s2;
    }else if (s3 < s1 && s3 < s2 && s3 < s4 && s3 < s5) {
        document.getElementById("menorRes").innerHTML = "Menor Numero: " + s3;
    } else if (s4 < s1 && s4 < s2 && s4 < s3 && s4 < s5) {
        document.getElementById("menorRes").innerHTML = "Menor Numero: " + s4;
    } else if (s5 < s1 && s5 < s2 && s5 < s3 && s5 < s4) {
        document.getElementById("menorRes").innerHTML = "Menor Numero: " + s5;
    } else {
        document.getElementById("menorRes").innerHTML = "Numeros Iguais";
    }
}
    // Tabuada
   function tabuada() {
    var num = parseInt(document.getElementById("tabNum").value);
    var s = 1;
    var resultado = "";

    while (s <= 10) {
        resultado += num + " x " + s + " = " + (num * s) + "<br>";
        s++;
    }

    document.getElementById("tabRes").innerHTML = resultado;
}



    // Volume paralelepípedo
    function volParal() {
        var c = parseFloat(document.getElementById("cp").value);
        var l = parseFloat(document.getElementById("lp").value);
        var h = parseFloat(document.getElementById("hp").value);
        if (isNaN(c) || isNaN(l) || isNaN(h)) {
            document.getElementById("volRes").innerHTML = "Preencha todos os campos!";
            return;
        }
        var v = c * l * h;
        document.getElementById("volRes").innerHTML = "Volume: " + v;
    }

    // Volume esfera
    function volEsfera() {
        var r = parseFloat(document.getElementById("re").value);
        if (isNaN(r) || r <= 0) {
            document.getElementById("volERes").innerHTML = "Raio inválido!";
            return;
        }
        var v = (4 / 3) * 3.14159 * (r * r * r);
        document.getElementById("volERes").innerHTML = "Volume: " + v.toFixed(2);
    }

    // Calcular idade
    function calcIdade() {
        var nasc = document.getElementById("birth").value;
        var hoje = document.getElementById("today").value;
        if (nasc === "") {
            document.getElementById("idadeRes").innerHTML = "Informe a data de nascimento!";
            return;
        }
        var dn = new Date(nasc);
        var da = hoje === "" ? new Date() : new Date(hoje);
        var idade = da.getFullYear() - dn.getFullYear();
        if (da.getMonth() < dn.getMonth() || (da.getMonth() === dn.getMonth() && da.getDate() < dn.getDate())) {
            idade--;
        }
        document.getElementById("idadeRes").innerHTML = "Idade: " + idade + " anos";
    }

    // Verificar número primo
    function verificaPrimo() {
        var n = parseInt(document.getElementById("pnum").value);
        if (isNaN(n) || n < 2) {
            document.getElementById("primoRes").innerHTML = "Digite um número maior ou igual a 2!";
            return;
        }
        var primo = true;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                primo = false;
                break;
            }
        }
        document.getElementById("primoRes").innerHTML = primo ? "É primo ✅" : "Não é primo ❌";
    }

    // Mês por número
    function mesNome() {
        var num = parseInt(document.getElementById("mes").value);
        var nomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        if (isNaN(num) || num < 1 || num > 12) {
            document.getElementById("mesRes").innerHTML = "Número inválido!";
            return;
        }
        document.getElementById("mesRes").innerHTML = "Mês: " + nomes[num - 1];
    }

    // Contracheque
    function calcularContra() {
        var sal = parseFloat(document.getElementById("salario").value);
        if (isNaN(sal) || sal <= 0) {
            document.getElementById("contraRes").innerHTML = "Salário inválido!";
            return;
        }

        var inss = sal * 0.08;
        var ir = sal * 0.075;
        var liquido = sal - inss - ir;

        document.getElementById("contraRes").innerHTML =
            "INSS: R$ " + inss.toFixed(2) +
            "<br>IR: R$ " + ir.toFixed(2) +
            "<br><b>Salário líquido: R$ " + liquido.toFixed(2) + "</b>";
    }
