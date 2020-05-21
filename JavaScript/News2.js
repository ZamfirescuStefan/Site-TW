function Display_Txt_File() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.status == 200  && this.readyState == 4) {
        if(typeof Display_Txt_File.status== 'undefined'){
        var x = this.responseText;
        var elem = document.createElement("p");
        elem.innerHTML = x;
        document.getElementById("continut").appendChild(elem);
        Display_Txt_File.status = 1;
      }

    }
    };
    request.open("GET", "Paragraf_text.txt", true);
    request.send();
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function Change_Background(){
  var Lista_Bground = [ './Photos/Bground.jpg', './Photos/Bground1.jpg', './Photos/Bground2.jpg'];
    var random_number = Math.floor((Math.random() * 10000)) % Lista_Bground.length;
  var item = document.getElementById("bd");
  item.style.backgroundImage = 'url(' + Lista_Bground[random_number] + ')';
  // item.style.backgroundImage = 'url(Bground1.jpg)';

}