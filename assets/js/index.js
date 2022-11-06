var grant = 'Zor endi siz Talabasiz';
var kantrakt = 'Koproq dars qilish kerak edi kantraktga kirdingiz';
var yiqilgan = 'Siz tanlagan OTM ga oqishga tavsiya etilmadiz (yana 1yil sabir sizga)';
var error = 'Siz notgri malumot kiritdingiz (maktabni karidorda bitirdizmi)';
var xato = 'Buncha bal yoq lekin siz toplagansz qoyil (maktabni karidorda bitirdizmi)';
var firstName = prompt('Ismingizni kiriting');


var OTM = prompt(firstName + ' OTM lar dan birini tanlang: 1.TDIU  2.TDMI  3.MU');

var ball = prompt( firstName + ' balingizni kiriting:');

if (OTM == 1){   
    if(ball >= 150){
        alert( grant);
    }
    else if( ball > 120){
        alert(kantrakt);
    }
    else if(120 >= ball > 0){
        alert( yiqilgan);
    }
    
    if ( 189 < ball) {
    alert(xato)
    }
    else{
        alert(error);
    }
}else if(OTM == 2){
    if(ball >= 160){
        alert(grant);
    }
    if ( 189 < ball) {
        alert(xato)
        }
    else if(ball > 100){
        alert(kantrakt);
    }
    else if(100 >= ball > 0){
        alert(yiqilgan);
    }
    else{
        alert(error);
    }
}else if(OTM == 3){
    if(ball >= 180){
        alert(grant);
    }
    if ( 189 < ball) {
        alert(xato)
        }
    else if( ball > 168){
        alert(kantrakt);
    }
    else if(168 >= ball > 0){
        alert(yiqilgan);
    }
    else{
        alert(error);
    }
}else{
    alert(error);
}

