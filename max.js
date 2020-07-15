function openNav() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("brand-colors");
  var z = document.getElementById("slide-images");
  var a = document.getElementById("imgae-twos");
  var b = document.getElementById("nav-cookers");
  var c = document.getElementById("more-products");
  var d = document.getElementById("review-images");
  var e = document.getElementById("storys");
  var f = document.getElementById("footers");


  if (x.style.display === "block") {
    x.style.display = "none";  
    // y.style.display = "block";
    // z.style.display = "block";
    // a.style.display = "block";
    // b.style.display = "block";
    // c.style.display = "block";
    // d.style.display = "block";
    // e.style.display = "block";
    // f.style.display = "block";
    
  } else {
     x.style.display = "block";
    // y.style.display = "none";
    // z.style.display = "none";
    // a.style.display = "none";
    // b.style.display = "none";
    // c.style.display = "none";
    // d.style.display = "none";
    // e.style.display = "none";
    // f.style.display = "none";
    
  }
   }
   
  // var icon_tracker = 'f';

  // function change(){
  //   var icon = document.getElementById('socical');
  //   if(icon_tracker === 'f'){
  //     image.src = 'images/icons8-search-24.png';
  //     image_tracker = 't';
  //   }else{
  //     image.src = 'images/icons8-search-24.png';
  //     image_tracker = 'f';
  //   }
    
  // } 

  function myFunction(x) {
    x.classList.toggle("change");
  }

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

 