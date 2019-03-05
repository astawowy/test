//ZEGAR
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function run_the_clock(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var hrPosition = hr*360/12 + ((min * 360/60)/12) ;
    var minPosition = (min * 360/60) + (sec* 360/60)/60;
    var secPosition = sec * 360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(run_the_clock, 1000);


//DZIEN TYGODNIA
function getWeekDay(date){
    var weekdays = new Array(
        "<div class='colYellow'>GORĄCA</div><div class='colWhite stretch'>NIEDZIELA</div>", "<div class='colYellow'>GORĄCY</div><div class='colWhite stretch'>PONIEDZIAŁEK</div>", "<div class='colYellow'>GORĄCY</div><div class='colWhite stretch'>WTOREK</div>", "<div class='colYellow'>GORĄCA</div><div class='colWhite stretch'>ŚRODA</div>", "<div class='colYellow'>GORĄCY</div><div class='colWhite stretch'>CZWARTEK</div>", "<div class='colYellow'>GORĄCY</div><div class='colWhite stretch'>PIĄTEK</div>", "<div class='colYellow'>GORĄCA</div><div class='colWhite stretch'>SOBOTA</div>"
    );
    var day = date.getDay();
    return weekdays[day];
}

var date = new Date();
var weekDay = getWeekDay(date);
$('#weekDay').html(weekDay);


// JUSTYFIKACJA DNIA TYGODNIA
const words = document.querySelector(".stretch"),
    wordsArray = words.innerText.split("").map(e => " " == e ? "<div>&nbsp</div>" : "<div>" + e + "</div>");
words.innerHTML = wordsArray.join("");



//ODLICZANIE
var current="On-line"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var counter = document.getElementById("counter");
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function countdown(yr,m,d){
    theyear=yr;themonth=m;theday=d
    var today=new Date()
    var todayy=today.getYear()
    if (todayy < 1000) todayy+=1900
    var todaym=today.getMonth()
    var todayd=today.getDate()
    var todayh=today.getHours()
    var todaymin=today.getMinutes()
    var todaysec=today.getSeconds()
    var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
    futurestring=montharray[m-1]+" "+d+", "+yr
    dd=Date.parse(futurestring)-Date.parse(todaystring)
    dday=Math.floor(dd/(60*60*1000*24)*1)
    dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
    dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
    dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
    if(dday<=0&&dhour<=0&&dmin<=0){
        counter.innerHTML=current
        return
    }else if(dday<=0&&dhour<=0){
        counter.innerHTML='<div class="relative">'+dmin+'<div class="counterBelow absolute w100 tCenter colBlack">minut</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dsec)+'<div class="counterBelow absolute w100 tCenter colBlack">sekund</div></div>'
        setTimeout("countdown(theyear,themonth,theday)",1000)
    }else if(dday<=0){
        counter.innerHTML='<div class="relative">'+dhour+'<div class="counterBelow absolute w100 tCenter colBlack">godzin</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dmin)+'<div class="counterBelow absolute w100 tCenter colBlack">minut</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dsec)+'<div class="counterBelow absolute w100 tCenter colBlack">sekund</div></div>'
        setTimeout("countdown(theyear,themonth,theday)",1000)
    }else{
        counter.innerHTML='<div class="relative">'+dday+'<div class="counterBelow absolute w100 tCenter colBlack">dni</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dhour)+'<div class="counterBelow absolute w100 tCenter colBlack">godzin</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dmin)+'<div class="counterBelow absolute w100 tCenter colBlack">minut</div></div>&nbsp;:&nbsp;<div class="relative">'+pad(dsec)+'<div class="counterBelow absolute w100 tCenter colBlack">sekund</div></div>'
        setTimeout("countdown(theyear,themonth,theday)",1000)
    }
}
countdown(2019,03,14)