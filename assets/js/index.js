// let data = [
//     {
//         image: `../assets/icons/car-1.svg`

//     },
//     {
//         image: `../assets/icons/car-2.svg`
//     },
//     {
//         image: `../assets/icons/car-3.svg`

//     },
//     {
//         image: `../assets/icons/car-4.svg`

//     },
// ]



// let $tabBtn = document.querySelectorAll('.tabBtn')
// let $tabContent = document.getElementById('tabContent')


// $tabContent.innerHTML = `
// <div>
// <img src="${data[0].image}">
// </div>`



// for (let i = 0; i < $tabBtn.length; i++) {

//     $tabBtn[i].addEventListener('click', () => {
//         let htmlContent = `
//      <div>
//      <img width="400" src="${data[i].image}">
//      </div>`

//         $tabContent.innerHTML = htmlContent
//     })


// }
const swiper = new Swiper('.swiper',{
    navigation
});
let btn1 = document.querySelector('.tabBtn1'),
    btn2 = document.querySelector('.tabBtn2'),
    btn3 = document.querySelector('.tabBtn3'),
    btn4 = document.querySelector('.tabBtn4');

btn1.addEventListener('click', (e) => {
   
    swiper.slideTo(0, 210)
})
btn2.addEventListener('click', (e) => {

    swiper.slideTo(1, 210)
})
btn3.addEventListener('click', (e) => {

    swiper.slideTo(2, 210)
})
btn4.addEventListener('click', (e) => {
    swiper.slideTo(3, 210)
});
