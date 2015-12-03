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
    var type = $("<h2>");
    var temp = $("<h2>");
    var pup = $("<p>");
    var pup1 = $("<p>");
    type.text("Weather Type");
    temp.text("Temperature (f)");
    divup.attr("id", "newweath");
    update.append(divup);
    divup.append(type);
    divup.append(pup);
    divup.append(temp);
    divup.append(pup1);
    
    if (localStorage.getItem("APIkey") !== null)
        idbtn.hide();
    
    function saveapikey() {
        if (typeof(localStorage) === "undefined"){
            alert("Local Storage not supported");
        }
        else { 
            
            var apikey = $("#apikey").val();
            localStorage.setItem("APIkey", apikey);
            if (localStorage.getItem("APIkey") !== null)
                idbtn.hide();
        }
    }
    
    function zipcode() {
        var zipcode = $.trim($("#zip").val());
        var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&units=imperial&appid=" + localStorage.getItem("APIkey");
        $.ajax( {
            url: url,
            success: function(data){
                if (data.cod === "404") {
                    pup.text("Invalid Zip Code");
                    pup1.text("Invalid Zip Code");
                }
                else {
                    var temper = data.main.temp;
                    pup.text(data.weather[0].description);
                    pup1.text(temper);
                }
            }
        })
    }
    
    keybutton.click(saveapikey); 
    zipbutton.click(zipcode);
    
    
    
});