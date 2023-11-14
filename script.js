function clock (){
    let montNames = ['January','February','March','April', 'May', 'June', 'July', 'August','September','October', 'November', 'December'];
    let weakname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let today = new Date();
    let date = document.getElementById ('date');
    date.innerHTML=(weakname[today.getDay()]+ " " + today.getDate()+ " " + montNames [today.getMonth()]+ " " + today.getFullYear());

    // time//
    let h= today.getHours();
    let m= today.getMinutes();
    let s= today.getSeconds();
    let day = h<11 ? 'AM' : 'PM';

    h= h < 10 ? '0' + h:h;

    m= m < 10 ? '0' + m:m;

    s= s < 10 ? '0' + s:s;
    let hours = document.getElementById('hours').innerHTML=h;
    let min = document.getElementById('min').innerHTML=m;
    let sec= document.getElementById('sec').innerHTML=s;
}
let inter = setInterval (clock,400);