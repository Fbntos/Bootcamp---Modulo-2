var url = 'https://digimon-api.vercel.app/api/digimon';
var contenido = document.querySelector('#lista-content');

fetch (url)
.then(response => response.json())
.then(datos => {tabla(datos)})

function tabla(datos){
    contenido.innerHTML = ''
    for (let temp of datos){
        contenido.innerHTML += `<tr>
        <td>${temp.name}</td>
        <td><img src="${temp.img}"></td>
        <td>${temp.level}</td>
        </tr>`
    }
}