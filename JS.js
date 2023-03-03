//FORMLARLA ÇALIŞMAK: BOLUM SONU EGZERSİZİ

/**
 * 1: Formu Seç
 * 2: Input Bilgisini UL icerisine Ekle
 * 3: Form İçindeki Bilgiyi sıfırla
 * 4: Eğer forma  Bilgigirilmez ise kullanıcıyı uyar 
 */


// 1-Formun submit'ine fonksiyon  oluşturalım
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

const alertDOM = document.querySelector('#alert')
const alertFunction = (title, message,className="warning") =>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formHandler(event){
    event.preventDefault()
    
    //username ve score bilgisini alalım
    const usernameDOM = document.querySelector('#username')
    const scoreDOM = document.querySelector('#score')
    if(usernameDOM.value && scoreDOM.value){ // username ve score boş değilse
        addItem(usernameDOM.value,scoreDOM.value) //gonderdikten sonra içini sıfırladık
        usernameDOM.value =""
        scoreDOM.value =""
        alertDOM.innerHTML = alertFunction("Bilal bey ","Herşey mükemmel..","success")
    }else{
        alertDOM.innerHTML = alertFunction("Başlık bilgisi ","Eksik Bilgi girdiniz..","danger")
    }
    
}


// 2 - username ve score bilgisini <ul> Eklemek için addItem adında ikinci bir fonsiyon oluşturalım.
let userListDom = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM =document.createElement('li') //dökümanın içinde bir li oluşturduk
    liDOM.innerHTML = `${userName} <span class='badge badge-primary badge-pill'>${score}</span>`// li nin içine username ve scorebilgisini koyduk

    //li nin css için class özeliğini ekleyelim
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

    userListDom .append(liDOM) //ul nin üstüne ekleme


}











/**<li class="list-group-item d-flex justify-content-between align-items-center">
                      Dapibus ac facilisis in
                      <span class="badge badge-primary badge-pill">2</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      
                    </li> */