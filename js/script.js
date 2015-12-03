$(document).ready(function() {
    
   console.log("hello"); 
    
    var idbtn = $(".apikey");
    var keybutton = $("<button>");
    keybutton.attr("type", "button");
    keybutton.text("submit api key");
    idbtn.append(keybutton);
    var zipbtn = $("#zip");
    var zipbutton = $("<button>");
    zipbutton.attr("type", "button");
    zipbutton.text("Get weather");
    zipbtn.after(zipbutton);
   
    
    var update = $("#weather");
    var divup = $("<div>");
    divup.attr("id", "newweath");
    update.append(divup);
    
    
    
    function saveapikey() {
        var apikey = $("#apikey").val();
        localStorage.setItem("APIkey", apikey);
    }
    
    function zipcode() {
        var zipcode = $("#zip").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&units=imperial&appid=" + localStorage.getItem("APIkey");
        $.ajax( {
            url: url,
            success: function(data){
                console.log(data.weather[0].main);
                
                var temper = data.main.temp;
                divup.append($("<h2>").text("Weather Type"));
                divup.append($("<p>").text(data.weather[0].main));
                divup.append($("<h2>").text("Temperature (f)"));
                divup.append($("<p>").text(temper));
            }
        })
    }
    
    keybutton.click(saveapikey); 
    zipbutton.click(zipcode);
    
    
    
});