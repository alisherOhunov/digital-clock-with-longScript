var clock = [
  [0, 1, 2, 3, 4, 5],
  [1, 2],
  [0, 1, 6, 4, 3],
  [0, 1, 2, 3, 6] ,
  [5, 6, 1, 2],
  [0, 5, 6, 2, 3],
  [0, 5, 4, 3, ,6],
  [0, 1, 2],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 6]
];
function timedText() {
  setTimeout(myTimeout1, 100) 
  setTimeout(myTimeout2, 4000) 
}
function myTimeout1() {
  document.getElementById("box").style.backgroundColor = "#4b5488";
}
function myTimeout2() {
  document.getElementById("box").style.backgroundColor = "#242466";
}
//this function for  turning off days light 
function dayFunction() {
    var d, e;
    d = document.querySelectorAll(".day");
    for (e = 0; e < d.length; e++) {
        d[e].classList.add("off");
    }
  // ending off of days section
  // starting to run days section
    var day;
    switch (new Date().getDay()) {
      case 0:
        day =  d[0].classList.add("on") ;
        break;
      case 1:
        day =d[1].classList.add("on");
        break;
      case 2:
        day = d[2].classList.add("on");
        break;
      case 3:
        day = d[3].classList.add("on");
        break;
      case 4:
        day = d[4].classList.add("on");
        break;
      case 5:
        day = d[5].classList.add("on");
        break;
      case  6:
        day = d[6].classList.add("on");
    }
}
var dayvar = setInterval(dayFunction, 1000);
//over run days section 
function clock_run(){
    var time = new Date();
    var hours = "21";
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var h  = hours.split("");
    let hours1, hours2;
    if(hours <= 9) {
       hour1 = 0;
       hours2 = parseInt(h[0]);
    } else {
      hours1 = parseInt(h[0]);
      hours2 = parseInt(h[1]);
    }
    var  m  = minutes.split("");
    let min1, min2;
    if (minutes <=9){
      min1 = 0;
      min2 = parseInt(m[0]);
    } 
    else{
      min1 = parseInt(m[0]);
      min2 = parseInt(m[1]);
    }
    var  s = seconds.split("");
    let sec1, sec2;
    if (seconds <= 9){
      sec1 = 0;
      sec2 = parseInt(s[0]);
    }
    else {
      sec1 = parseInt(s[0]);
      sec2 = parseInt(s[1]);
    }
 
    var lamp, s;
    lamp = document.querySelectorAll(".line");
    for (s = 0; s < lamp.length; s++) {
        lamp[s].classList.add("switch-off");
    }
      if (hours == 0){
        hours2 ==(document.getElementById("first-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("first-number-right-top").classList.remove("switch-off"),
                  document.getElementById("first-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("first-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("first-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("first-number-left-top").classList.remove("switch-off"));
      }
      if (hours >= 0 && hours <=9 ){
          hours1 ==(document.getElementById("first-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("first-number-right-top").classList.remove("switch-off"),
                    document.getElementById("first-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("first-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("first-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("first-number-left-top").classList.remove("switch-off"));
      }
      if (hours == 1 || hours == 11 || hours == 21){
          hours2 ==(document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"));
      }
      if (hours == 2 || hours == 12 || hours == 22){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"),
                    document.getElementById("second-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle-bottom").classList.remove("switch-off"));
      }
      if (hours == 3 || hours == 13 || hours == 23){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"));
      }
      if (hours == 4 || hours == 14){
          hours2 ==(document.getElementById("second-number-left-top").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"),
                    document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"));
      }
      if (hours == 5 || hours == 15){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-left-top").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"));
      }
      if (hours == 6 || hours == 16){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-left-top").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"));
      }
      if (hours == 7 || hours == 17){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"));
      }
      if (hours == 8 || hours == 18){
          hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-top").classList.remove("switch-off"),
                    document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("second-number-left-top").classList.remove("switch-off"),
                    document.getElementById("second-number-middle").classList.remove("switch-off"));
      }
      if (hours == 9 || hours == 19){
        hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("second-number-right-top").classList.remove("switch-off"),
                  document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("second-number-left-top").classList.remove("switch-off"),
                  document.getElementById("second-number-middle").classList.remove("switch-off"));
      }
      if (hours >= 10 && hours < 20){
          hours1 ==(document.getElementById("first-number-right-top").classList.remove("switch-off"),
                    document.getElementById("first-number-right-bottom").classList.remove("switch-off")); 
      }
      if (hours == 10 || hours == 20 ){
        hours2 ==(document.getElementById("second-number-middle-top").classList.remove("switch-off"),
                document.getElementById("second-number-right-top").classList.remove("switch-off"),
                document.getElementById("second-number-right-bottom").classList.remove("switch-off"),
                document.getElementById("second-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("second-number-left-bottom").classList.remove("switch-off"),
                document.getElementById("second-number-left-top").classList.remove("switch-off"));
      }
      if (hours >= 20 && hours < 24){
        hours1 ==(document.getElementById("first-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("first-number-right-top").classList.remove("switch-off"),
                  document.getElementById("first-number-middle").classList.remove("switch-off"),
                  document.getElementById("first-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("first-number-middle-bottom").classList.remove("switch-off"));
      }
// minutes
      if (minutes == 0){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("fourth-number-left-bottom").classList.remove("switch-off"),
                document.getElementById("fourth-number-left-top").classList.remove("switch-off"));
      }
      if (minutes >= 0 && minutes <=9 ){
        min1 ==(document.getElementById("third-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("third-number-right-top").classList.remove("switch-off"),
                  document.getElementById("third-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("third-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("third-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("third-number-left-top").classList.remove("switch-off"));
      }
      if (minutes == 1 || minutes == 11 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51){
        min2 ==(document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"));
      }
      if (minutes == 2 || minutes == 12 || minutes == 22 || minutes == 32 || minutes == 42 || minutes == 52){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"));
      }
      if (minutes == 3 || minutes == 13 || minutes == 23 || minutes == 33 || minutes == 43 || minutes == 53){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"));
      }
      if (minutes == 4 || minutes == 14 || minutes == 24 || minutes == 34 || minutes == 44 || minutes == 54){
        min2 ==(document.getElementById("fourth-number-left-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"));
      }
      if (minutes == 5 || minutes == 15 || minutes == 25 || minutes == 35 || minutes == 45|| minutes == 55){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"));
      }
      if (minutes == 6 || minutes == 16 || minutes == 26 || minutes == 36 || minutes == 46 || minutes == 56){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"));
      }
      if (minutes == 7 || minutes == 17 || minutes == 27 || minutes == 37 || minutes == 47 || minutes == 57){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"));
      }
      if (minutes == 8 || minutes == 18 || minutes == 28 || minutes == 38 || minutes == 48 || minutes == 58){
        min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("fourth-number-left-top").classList.remove("switch-off"),
                  document.getElementById("fourth-number-middle").classList.remove("switch-off"));
      }
      if (minutes == 9 || minutes == 19 || minutes == 29 || minutes== 39 || minutes == 49 || minutes == 59){
      min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
                document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
                document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
                document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("fourth-number-left-top").classList.remove("switch-off"),
                document.getElementById("fourth-number-middle").classList.remove("switch-off"));
      }
      if (minutes >= 10 && minutes < 20){
        min1 ==(document.getElementById("third-number-right-top").classList.remove("switch-off"),
                  document.getElementById("third-number-right-bottom").classList.remove("switch-off")); 
      }
      if (minutes >= 20 && minutes < 30){
      min1 ==(document.getElementById("third-number-middle-top").classList.remove("switch-off"),
                document.getElementById("third-number-right-top").classList.remove("switch-off"),
                document.getElementById("third-number-middle").classList.remove("switch-off"),
                document.getElementById("third-number-left-bottom").classList.remove("switch-off"),
                document.getElementById("third-number-middle-bottom").classList.remove("switch-off"));
      }
      if (minutes >= 30 && minutes < 40){
      min1 ==(document.getElementById("third-number-middle-top").classList.remove("switch-off"),
              document.getElementById("third-number-right-top").classList.remove("switch-off"),
              document.getElementById("third-number-right-bottom").classList.remove("switch-off"),
              document.getElementById("third-number-middle-bottom").classList.remove("switch-off"),
              document.getElementById("third-number-middle").classList.remove("switch-off"));
      }
      if (minutes >= 40 && minutes < 50){
      min1 ==(document.getElementById("third-number-left-top").classList.remove("switch-off"),
              document.getElementById("third-number-middle").classList.remove("switch-off"),
              document.getElementById("third-number-right-top").classList.remove("switch-off"),
              document.getElementById("third-number-right-bottom").classList.remove("switch-off"));
      }
      if (minutes >= 50 && minutes < 60){
      min1 ==(document.getElementById("third-number-middle-top").classList.remove("switch-off"),
              document.getElementById("third-number-right-bottom").classList.remove("switch-off"),
              document.getElementById("third-number-middle-bottom").classList.remove("switch-off"),
              document.getElementById("third-number-left-top").classList.remove("switch-off"),
              document.getElementById("third-number-middle").classList.remove("switch-off"));
      }
      if (minutes == 10 || minutes == 20 || minutes == 30 || minutes == 40 || minutes == 50){
      min2 ==(document.getElementById("fourth-number-middle-top").classList.remove("switch-off"),
              document.getElementById("fourth-number-right-top").classList.remove("switch-off"),
              document.getElementById("fourth-number-right-bottom").classList.remove("switch-off"),
              document.getElementById("fourth-number-middle-bottom").classList.remove("switch-off"),
              document.getElementById("fourth-number-left-bottom").classList.remove("switch-off"),
              document.getElementById("fourth-number-left-top").classList.remove("switch-off"));
      }
      
// secods
          if (seconds == 0){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("sixth-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("sixth-number-left-top").classList.remove("switch-off"));
      }
      if (seconds >= 0 && seconds <=9 ){
          sec1 ==(  document.getElementById("fifth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("fifth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("fifth-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("fifth-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("fifth-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("fifth-number-left-top").classList.remove("switch-off"));
      }
      if (seconds == 1 || seconds == 11 || seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51){
          sec2 ==(document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"));
      }
      if (seconds == 2 || seconds == 12 || seconds == 22 || seconds == 32 || seconds == 42 || seconds == 52){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"));
      }
      if (seconds == 3 || seconds == 13 || seconds == 23 || seconds == 33 || seconds == 43 || seconds == 53){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"));
      }
      if (seconds == 4 || seconds == 14 || seconds == 24 || seconds == 34 || seconds == 44 || seconds == 54){
          sec2 ==(document.getElementById("sixth-number-left-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"));
      }
      if (seconds == 5 || seconds == 15 || seconds == 25 || seconds == 35 || seconds == 45|| seconds == 55){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"));
      }
      if (seconds == 6 || seconds == 16 || seconds == 26 || seconds == 36 || seconds == 46 || seconds == 56){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"));
      }
      if (seconds == 7 || seconds == 17 || seconds == 27 || seconds == 37 || seconds == 47 || seconds == 57){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"));
      }
      if (seconds == 8 || seconds == 18 || seconds == 28 || seconds == 38 || seconds == 48 || seconds == 58){
          sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-bottom").classList.remove("switch-off"),
                    document.getElementById("sixth-number-left-top").classList.remove("switch-off"),
                    document.getElementById("sixth-number-middle").classList.remove("switch-off"));
      }
      if (seconds == 9 || seconds == 19 || seconds == 29 || seconds== 39 || seconds == 49 || seconds == 59){
        sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                  document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                  document.getElementById("sixth-number-left-top").classList.remove("switch-off"),
                  document.getElementById("sixth-number-middle").classList.remove("switch-off"));
      }
      if (seconds >= 10 && seconds < 20){
          sec1 ==(document.getElementById("fifth-number-right-top").classList.remove("switch-off"),
                    document.getElementById("fifth-number-right-bottom").classList.remove("switch-off")); 
      }
      if (seconds >= 20 && seconds < 30){
        sec1 ==(document.getElementById("fifth-number-middle-top").classList.remove("switch-off"),
                  document.getElementById("fifth-number-right-top").classList.remove("switch-off"),
                  document.getElementById("fifth-number-middle").classList.remove("switch-off"),
                  document.getElementById("fifth-number-left-bottom").classList.remove("switch-off"),
                  document.getElementById("fifth-number-middle-bottom").classList.remove("switch-off"));
      }
      if (seconds >= 30 && seconds < 40){
        sec1 ==(document.getElementById("fifth-number-middle-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-right-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-right-bottom").classList.remove("switch-off"),
                document.getElementById("fifth-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("fifth-number-middle").classList.remove("switch-off"));
      }
      if (seconds >= 40 && seconds < 50){
        sec1 ==(document.getElementById("fifth-number-left-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-middle").classList.remove("switch-off"),
                document.getElementById("fifth-number-right-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-right-bottom").classList.remove("switch-off"));
      }
      if (seconds >= 50 && seconds < 60){
        sec1 ==(document.getElementById("fifth-number-middle-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-right-bottom").classList.remove("switch-off"),
                document.getElementById("fifth-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("fifth-number-left-top").classList.remove("switch-off"),
                document.getElementById("fifth-number-middle").classList.remove("switch-off"));
      }
      if (seconds == 10 || seconds == 20 || seconds == 30 || seconds == 40 || seconds == 50){
        sec2 ==(document.getElementById("sixth-number-middle-top").classList.remove("switch-off"),
                document.getElementById("sixth-number-right-top").classList.remove("switch-off"),
                document.getElementById("sixth-number-right-bottom").classList.remove("switch-off"),
                 document.getElementById("sixth-number-middle-bottom").classList.remove("switch-off"),
                document.getElementById("sixth-number-left-bottom").classList.remove("switch-off"),
                document.getElementById("sixth-number-left-top").classList.remove("switch-off"));
      } 
  }
var clock_on = setInterval(clock_run, 1000);