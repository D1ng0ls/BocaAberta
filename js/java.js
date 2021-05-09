function darkmode() {
    var checado = document.getElementById("darkmode");

    if (checado.checked == true) {
        /* CONFIGURAÇÕES GERAIS*/
        document.getElementById('home1').style.display = 'block';
        document.getElementById('home2').style.display = 'none';
        document.getElementById('login1').style.display = 'block';
        document.getElementById('login2').style.display = 'none';
        document.getElementById('body').style.backgroundColor = '#1c1c1c';
        document.getElementById('dark').style.display = 'none';
        document.getElementById('light').style.display = 'block';
        document.getElementById('p_home').style.color = 'white';
        document.getElementById('p_login').style.color = 'white';
        document.getElementById('container_inicio').style.backgroundColor = '#4F4F4F';
    } else {
        /* CONFIGURAÇÕES GERAIS*/
        document.getElementById('home1').style.display = 'none';
        document.getElementById('home2').style.display = 'block';
        document.getElementById('login1').style.display = 'none';
        document.getElementById('login2').style.display = 'block';
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('dark').style.display = 'block';
        document.getElementById('light').style.display = 'none';
        document.getElementById('p_home').style.color = 'black';
        document.getElementById('p_login').style.color = 'black';
        document.getElementById('container_inicio').style.backgroundColor = 'silver';
    }
}