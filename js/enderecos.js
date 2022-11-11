//FUNÇÃO PARA LISTAR ENDERECOS
function listarEndereco(){
    const url = 'http://127.0.0.1:80/trabalho/listaEndereco.php';
    fetch(url,{
        method:"GET",
    }).then(response => response.text())
    .then(response =>{results.innerHTML = response;})
    .catch(err => console.log(err));
}
listarEndereco()
//FUNÇÃO PARA CADASTRAR O ENDEREÇO
function createEndereco(){
    const logradouro = document.getElementById('logradouro').value
    const bairro = document.getElementById('bairro').value
    const numero = document.getElementById('numero').value
    const cidade = document.getElementById('cidade').value
    const uf = document.getElementById('uf').value
    const id_cliente = document.getElementById('id_cliente').value

    const form = new FormData()

    form.append('logradouro', logradouro);
    form.append('bairro', bairro);
    form.append('numero', numero);
    form.append('cidade', cidade);
    form.append('uf', uf);
    form.append('id_cliente', id_cliente);

    const url = 'http://127.0.0.1:80/trabalho/cadastroEndereco.php';

    fetch(url, {
        method:'POST',
        body:form
    }).then(response =>{
       response.json().then(result =>{
        console.log(result)
        Swal.fire(result.message);
      
       }).catch(err => console.log(err)) 
    })
}
function remove(id){
    const form = new FormData();
    form.append('id', id);

    const url = 'http://127.0.0.1:80/trabalho/removeEndereco.php';
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Essa ação não pode ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:"Cancelar",
        confirmButtonText: 'Sim, excluir!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(url, {
                method:"POST",
                body:form
            }).then(response =>{
                response.json().then(data =>{
                    Swal.fire(data.message);
                    listarClientes();
                })
            }).catch(err => console.log(err))
        }
      })
}

