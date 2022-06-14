const dados = fetch('http://localhost:4000/cores')
const ULlist = document.getElementById('cores')
dados.then(response =>{
    const response1 = response.json()
    response1.then(cores => {
        cores.forEach(element => {
            const li = document.createElement('li')
            li.innerText = element.nomeCor
            li.style.color = element.cor
            ULlist.appendChild(li)

            
        });


    }).catch(erro => console.log(erro))
})
.catch(error => console.log(error))
// console.log(cores)
