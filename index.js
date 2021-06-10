var recName = document.getElementById("Name");
var recLastName = document.getElementById("LastName");
var recmail = document.getElementById("Mail");
var password = document.getElementById("password");
var retype_password = document.getElementById("retype_password");
var recsex = document.getElementsByName("Sex");
var rechobbes = document.getElementById("hobby");
var recincome = document.getElementById("income");
var recincome_slider = document.getElementById("income_slider");
var recage = document.getElementById("recage");
var recBIO = document.getElementById("recBIO");


var inpChlen = document.getElementById("button"); 

var btn = document.getElementById("button");

var cnt = counter();

function counter() {
    var i = 0;
    return function () {
        return i++;

    }
}

class User {
    constructor(name, secondname, sex, hobby, income, income_slider, email, age, bio) {
        this.count = cnt();
        this.id = name + this.count;
        this.name = name;
        this.secondname = secondname;
        this.sex = sex;
        this.hobby = hobby;
        this.income = income;
        this.income_slider = income_slider;
        this.email = email;
        this.age = age;
        this.password = password;
        this.bio = bio;
        this.interface = `

        <p> user№${this.count} </p>
        <p> Id: ${this.id} </p>
        <p> Имя: ${this.name} </p>
        <p> Отчество: ${this.secondname} </p>
        <p> Email: ${this.email} </p>
        <p> Пол: ${this.sex} </p>
        <p> Хобби: ${this.hobby} </p>
        <p> Место дохода: ${this.income} </p>
        <p> Доход: ${this.income_slider} </p>
        <p> Возраст: ${this.age} </p>
        <p> О себе: ${this.bio} </p>
        <br></br>
    `

    }
    render() {
        var elem = document.createElement("div");
        elem.id = this.id;
        elem.innerHTML = this.interface;
        var container = document.querySelector(".user_info");
        container.appendChild(elem);

    }
    log() {
        console.log(this);
    }
}

function validate() {
    var x = password.value;
    var y = retype_password.value;
    return x == y;

}

btn.addEventListener("click", function(){

    //if (inpChlen.checked) {
        var allInputs = Array.from(document.getElementsByClassName("inputs1"));

        for (var i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value == "") {
                alert("enter a " + allInputs[i].id);
                return;
            }

        }
        if (validate()) {
            alert("thank for registration")
            var user = new User(recName.value, recLastName.value, recsex.value, rechobbes.value, recincome.value, recincome_slider.value, recmail.value, recage.value, recBIO.value);
            user.log();
            user.render();

        } else {
            alert("проверьте пароль");
        }
    //}
})












