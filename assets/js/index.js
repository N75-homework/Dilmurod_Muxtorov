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