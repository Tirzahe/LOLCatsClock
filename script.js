var time = new Date().getHours();
var earlyMorning = 3;
var morning = 7;
var noon = 12;
var evening = 17;
var partyTime = 19;
var night = 20;
var lateNight = 22;
var isPartyTime = false;

var updateClock = function() {
  var messageText;
  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImg = document.getElementById('lolcat');
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 
// Set the right messageText and image if time is partyTime 
  if (time == partyTime) {
    messageText = "PARTY TIME!"
    image = "https://i.ytimg.com/vi/HDOMbFRU-uk/hqdefault.jpg";
  } else if (time >= earlyMorning && time < morning) {
    messageText = "Top o' the Mornin'";
    image = "http://www.catster.com/wp-content/uploads/2015/03/st-patricks-day-cat-05.jpg";
    console.log(messageText);
  } else if (time >= morning && time < noon) {
    messageText = "Good Morning my friend!";
    image = "https://4.bp.blogspot.com/-Mr1ORZCZ6Z0/Vr57rgsXpmI/AAAAAAAA11I/OdSkGHDfFA8/s640/caturday.jpg";
    console.log(messageText);
  } else if (time >= noon && time < evening) {
    messageText = "Good Afternoon!";
    image = "http://cdn.fishki.net/upload/post/201408/20/1295699/7949510-r3l8t8d-650-funny-cats-if-it-fits-i-sits-21.jpg";
    console.log(messageText);
  } else if (time >= evening && time < night) {
    messageText = "Good Evening!";
    image = "https://s-media-cache-ak0.pinimg.com/originals/be/2d/6f/be2d6f2002e8c90bb0cf0f0e752591ed.jpg";
    console.log(messageText);
  } else if (time >= night && time < lateNight) {
    messageText = "Good Night!";
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2sXqk-hrbcKSPgKyFxh-nqcEy2Fr-TD609hHmc7WF2VGKOgD";
    console.log(messageText);
  } else if (time >= lateNight || time < earlyMorning) {
    messageText = "HOOT, HOOT!";
    image = "https://s-media-cache-ak0.pinimg.com/736x/6d/f4/5a/6df45a5e10c63cce0c047f3fc6f20f86.jpg";
    console.log(messageText);
  }

  timeEventJS.innerText = messageText;
  lolcatImg.src = image;

  var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours 
    if (hours >= noon) {
      meridian = "PM";
    }
    if (hours > noon) {
      hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };

  showCurrentTime();
}
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
// change time to partyTime if we click the button, then change it back to the current time if we click it again.
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "#0A8DAB";

  }
};
partyTimeButton.addEventListener('click', partyEvent);