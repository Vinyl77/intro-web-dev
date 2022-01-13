window.onload = function(){
    var age = prompt("How old are you?");
    // alert("You are " + age + " years old");
    var dogAge = age * 7;
    alert(dogAge);

    var result = "You are " + dogAge + " years old in dog years."
    document.getElementById('dogAgeResult').innerHTML = result



}