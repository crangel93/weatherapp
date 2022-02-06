var getWeather = function () {
  // format the github api url
  var city2=document.querySelector("#city").value;
  var cityDisplay=document.querySelector("#cityCurrent")
  var d= new Date();
  var month= d.getMonth()+1;
  var day= d.getDate();
  var year= d.getFullYear();
  cityDisplay.textContent=city2 +"("+month+"/"+day+"/"+year+")";
  //alert(city2);
  var city="boston";
  var apiUrlForecast="https://api.openweathermap.org/data/2.5/forecast?q="+city2+"&units=imperial&appid=b7d95a22a77bcae92910a5fb48b8821e"
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=imperial&appid=b7d95a22a77bcae92910a5fb48b8821e";
//alert(apiUrl);
  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
    //console.log(data);
    var currentTemp=document.querySelector("#temp");
    currentTemp.textContent="Temp: "+data.main.temp+" °F";
    var currentHumid=document.querySelector("#humid");
    currentHumid.textContent="Humidity: "+data.main.humidity+" %";
    //var currentUv=document.querySelector("#uv");
    //currentUv.textContent="Humidity: "+data.main.humidity;
    var currentWind=document.querySelector("#wind");
    currentWind.textContent="Wind: "+data.wind.speed+" MPH";
    
    });
  });
  fetch(apiUrlForecast).then(function (response) {
    response.json().then(function (data) {
     //done still need to do icon display
     var d1= new Date();
  var month1= d.getMonth()+1;
  var day1= d.getDate()+1;
  var year1= d.getFullYear();
     var date1=document.querySelector("#date1");
     date1.textContent="("+month1+"/"+day1+"/"+year1+")";
      var temp1=data.list[0].main.temp;
      var humid1=data.list[0].main.humidity;
      var wind1=data.list[0].wind.speed;
      var picture1=data.list[0].weather[0].icon;
      var imgSrc1="http://openweathermap.org/img/w/"+ picture1+".png";
      var pictureIcon1=document.getElementById("picture1");
      pictureIcon1.src=imgSrc1;
     
      var cityTemp1=document.querySelector("#temp1");
      cityTemp1.textContent="Temp: "+temp1+" °F";
      var cityHumid1=document.querySelector("#humid1");
      cityHumid1.textContent="Humidity: "+humid1+"%";
      var cityWind1=document.querySelector("#wind1");
      cityWind1.textContent="Wind: "+wind1+" MPH";
  //done still need to do icon display
  var d2= new Date();
  var month2= d.getMonth()+1;
  var day2= d.getDate()+2;
  var year2= d.getFullYear();
     var date2=document.querySelector("#date2");
     date2.textContent="("+month2+"/"+day2+"/"+year2+")";
   var temp2=data.list[1].main.temp;
      var humid2=data.list[1].main.humidity;
      var wind2=data.list[1].wind.speed;
      var picture2=data.list[1].weather[0].icon;
      var imgSrc2="http://openweathermap.org/img/w/"+ picture2+".png";
      var pictureIcon2=document.getElementById("picture2");
      pictureIcon2.src=imgSrc2;
      var cityTemp2=document.querySelector("#temp2");
      cityTemp2.textContent="Temp: "+temp2+" °F";
      var cityHumid2=document.querySelector("#humid2");
      cityHumid2.textContent="Humidity: "+humid2+"%";
      var cityWind2=document.querySelector("#wind2");
      cityWind2.textContent="Wind: "+wind2+" MPH";
      //done still need to do icon display
      var d3= new Date();
  var month3= d.getMonth()+1;
  var day3= d.getDate()+3;
  var year3= d.getFullYear();
     var date3=document.querySelector("#date3");
     date3.textContent="("+month3+"/"+day3+"/"+year3+")";
      var temp3=data.list[2].main.temp;
      var humid3=data.list[2].main.humidity;
      var wind3=data.list[2].wind.speed;
      var picture3=data.list[2].weather[0].icon;
      var imgSrc3="http://openweathermap.org/img/w/"+ picture3+".png";
      var pictureIcon3=document.getElementById("picture3");
      pictureIcon3.src=imgSrc3;
      
      var cityTemp3=document.querySelector("#temp3");
      cityTemp3.textContent="Temp: "+temp3+" °F";
      var cityHumid3=document.querySelector("#humid3");
      cityHumid3.textContent="Humidity: "+humid3+"%";
      var cityWind3=document.querySelector("#wind3");
      cityWind3.textContent="Wind: "+wind3+" MPH";
      //done still need to do icon display
      var d4= new Date();
  var month4= d.getMonth()+1;
  var day4= d.getDate()+4;
  var year4= d.getFullYear();
     var date4=document.querySelector("#date4");
     date4.textContent="("+month4+"/"+day4+"/"+year4+")";
      var temp4=data.list[3].main.temp;
      var humid4=data.list[3].main.humidity;
      var wind4=data.list[3].wind.speed;
      var picture4=data.list[3].weather[0].icon;
      var imgSrc4="http://openweathermap.org/img/w/"+ picture4+".png";
      var pictureIcon4=document.getElementById("picture4");
      pictureIcon4.src=imgSrc4;
      var cityTemp4=document.querySelector("#temp4");
      cityTemp4.textContent="Temp: "+temp4+" °F";
      var cityHumid4=document.querySelector("#humid4");
      cityHumid4.textContent="Humidity: "+humid4+"%";
      var cityWind4=document.querySelector("#wind4");
      cityWind4.textContent="Wind: "+wind4+" MPH";
      //
      var d5= new Date();
  var month5= d.getMonth()+1;
  var day5= d.getDate()+5;
  var year5= d.getFullYear();
     var date5=document.querySelector("#date5");
     date5.textContent="("+month5+"/"+day5+"/"+year5+")";
      var temp5=data.list[4].main.temp;
      var humid5=data.list[4].main.humidity;
      var wind5=data.list[4].wind.speed;
      var picture5=data.list[4].weather[0].icon;
      var imgSrc5="http://openweathermap.org/img/w/"+ picture5+".png";
      var pictureIcon5=document.getElementById("picture5");
      pictureIcon5.src=imgSrc5;
      var cityTemp5=document.querySelector("#temp5");
      cityTemp5.textContent="Temp: "+temp5+" °F";
      var cityHumid5=document.querySelector("#humid5");
      cityHumid5.textContent="Humidity: "+humid5+"%";
      var cityWind5=document.querySelector("#wind5");
      cityWind5.textContent="Wind: "+wind5+" MPH";
 
    
    });
  });
 

}



;