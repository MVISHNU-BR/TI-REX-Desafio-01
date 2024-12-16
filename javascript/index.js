const emailRegex = new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/);
let email = document.getElementById('email');
let nome = document.getElementById('name')
const subscribeForm = document.querySelector('.subscribe-form')

var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "joão",
            "email": "joãoTeste@gmail.com"
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};


subscribeForm.onsubmit = (e) => {
    e.preventDefault()

    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;

    if (emailRegex.test(email.value)) {
        document.getElementById('error').classList.add('hidden');

        let novoSubscriber = {
            "id": novoId,
            "nome": nome.value,
            "email": email.value
        }

        db.data.push(novoSubscriber)
        alert("Inscrição feita com sucesso");
        localStorage.setItem('db', JSON.stringify(db));
        email.value = ''
        nome.value = ''
    } else {
        document.getElementById('error').classList.remove('hidden')
    }
}

