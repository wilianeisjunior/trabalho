//FUNÇÃO PARA LISTAR CLIENTES
function listarClientes(){
    const url = 'http://127.0.0.1:80/trabalho/listaClientes.php';
    fetch(url,{
        method:"GET",
    }).then(response => response.text())
    .then(response =>{results.innerHTML = response;})
    .catch(err => console.log(err));
}
listarClientes()

//FUNÇÃO PARA CRIAR O CLIENTE
function createCliente (){
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const cpf = document.getElementById('cpf').value

    const form = new FormData()

    form.append('nome', nome);
    form.append('sobrenome', sobrenome);
    form.append('cpf', cpf);

    const url = 'http://127.0.0.1:80/trabalho/cadastroCliente.php';

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

//FUNÇÃO DE EXCLUIR USUARIO
function remove(id){
    const form = new FormData();
    form.append('id', id);

    const url = 'http://127.0.0.1:80/trabalho/remove.php';
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

function getId(id){
    const form = new FormData();
    form.append('id', id);
    const url = 'http://127.0.0.1:80/trabalho/get_id.php';

    fetch(url, {
        method:"POST",
        body:form
    }).then(response =>{
        response.json().then(data =>{
            window.localStorage.setItem('user',JSON.stringify(data[0]));
            window.location.href = 'updateCliente.html';
        })
    })
}
showUserData()
function showUserData(){
    const user = JSON.parse(window.localStorage.getItem('user'));
    if(user!= null){
        document.getElementById("id").value = user.id;
        document.getElementById("nome-1").value = user.nome;
        document.getElementById("sobrenome-1").value = user.sobrenome;
        document.getElementById('cpf-1').value = user.cpf;
    }else{
        console.log("")
    }
  
}

function updateCliente(){
    const id = document.getElementById("id").value;
    const name = document.getElementById('nome-1').value
    const address = document.getElementById('sobrenome-1').value
    const cpf = document.getElementById('cpf-1').value

    const form = new FormData();

    form.append('id',id);
    form.append('nome', nome);
    form.append('sobrenome', sobrenome);
    form.append('cpf', cpf);
    

    const url = "http://127.0.0.1:80/trabalho/update.php";

    fetch(url,{
        method:"POST",
        body:form
    }).then(response=>{
        response.json().then(data =>{
            Swal.fire(data.message).then(result =>{
                if(result.isConfirmed){
                    window.location.href = "listaCliente.html";
                    window.localStorage.removeItem('user');
                }
            });
            
        })
    })
}

function vizualizar(){
    window.location.href = 'listaEnderencos.html';
} 