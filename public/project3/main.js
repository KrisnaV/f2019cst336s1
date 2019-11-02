$(document).ready(function(){
    $('#btnSearch').click(function(){
        var city = $('#city').val();
        var key = "ccfe9bd0c4b632a564b5d0e13850a2e1";
        
        if (city != '') {
            $.ajax({
                
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key,
                type: "GET",
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    var weather = data.weather[0].main;
                   
                   $("#result").html("Current weather in " + data.name +" is: " + weather);
                   if (weather=="Clear") {
                       $("#img").html(<img src="img/clear.jpg" alt="clear">);
                   }
                   if (weather=="Clouds") {
                       $("#img").html(<img src="img/clear.jpg" alt="clear">);
                   }
                }
            });
            
        }else {
            $("error").html('*City name is required');
        }
        
    });
    
});