function getLocation (){
var x = document.getElementById("demo");
if (navigator.geolocation){
    
    
    navigator.geolocation.getCurrentPosition(showpostion);
    
    
    
    
    
}else{
    
    x.innerHTML = "Geolocation is not supported by this browser.";
    
    
    }




}function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
