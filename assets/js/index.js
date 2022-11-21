function makeItRain() {
    let drops = '';
    let increment = 0;


    while (increment < 98) {
        increment += 1;
        let delay = Math.floor(Math.random() * (90 - 1 + 1) + 1);
        drops += '<div class="drop" style="left:' + increment + '%; animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;"><div class="stem" style="left:' + increment + '%;animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;"></div><div class="splash" style="left:' + increment + '%;animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;">    </div></div>'
    }
    document.getElementById('rain-container').innerHTML += drops;
    document.getElementById('Audio').innerHTML += drops;
}

makeItRain()

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "user") {
        alert("login succesfully");
        return false
    }
    else{
    alert("login falied")
    }
}



var $form = document.getElementById("form");
var $text = document.getElementById("username");
var $password = document.getElementById("password");


var passwordField = document.querySelector('.password')
var show = document.querySelector('.show')
var hide = document.querySelector('.hide')


$form.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    // console.log(typeof($text.value));
    // console.log(typeof($password.value));
    $text.value = ""
    $password.value = ""
})

show.onclick = function () {
    passwordField.setAttribute("type", "text");
    show.style.display = "none"
    hide.style.display = "block"
}

hide.onclick = function () {
    passwordField.setAttribute("type", "password");
    hide.style.display = "none"
   show.style.display = "block"
}