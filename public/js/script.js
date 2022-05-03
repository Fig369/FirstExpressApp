btn = document.getElementById('clickme');
btn.addEventListener('click', function(){
    quoteNumber = Math.floor(Math.random() * 10) + 1;
    url = 'movie'+movieNumber;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function (){
        if(this.status == 200){
           document.getElementById("movie").innerHTML = this.responseText;
        }
    };
    xhr.onerror = function (){
        console.log('error');
    };
    xhr.send();
});