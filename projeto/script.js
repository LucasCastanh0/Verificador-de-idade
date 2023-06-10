function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO]Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gênero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            gênero = "Homem";
            if (idade < 5) {
                //bebê
                img.setAttribute("src", "bebemenino.png");
                document.body.style.background = '#22c4d9'
            } else if (idade < 13) {
                //criança
                img.setAttribute("src", "garotinho.png");
                document.body.style.background = '##22c4d9'
            } else if (idade < 20) {
                //jovem
                img.setAttribute("src", "jovem_homem.png");
                document.body.style.background = '#22c4d9'
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "homem.png");
                document.body.style.background = '##22c4d9'
            } else {
                //idoso
                img.setAttribute("src", "idoso.png");
                document.body.style.background = '#22c4d9'
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher";
            if (idade < 5) {
                //bebê
                img.setAttribute("src", "bebemenina.png");
                document.body.style.background = '#ff00b7'
            } else if (idade < 13) {
                //criança
                img.setAttribute("src", "garotinha.png");
                document.body.style.background = '#ff00b7'
            } else if (idade < 20) {
                //jovem
                img.setAttribute("src", "jovem_mulher.png");
                document.body.style.background = '#ff00b7'
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "mulher.png");
                document.body.style.background = '#ff00b7'
            } else {
                //idoso
                img.setAttribute("src", "idosa.png");
                document.body.style.background = '#ff00b7'
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
