// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images=document.getElementsByClassName("modalSource")
var modalElement = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
    images[i].onclick=function(){
        modal.style.display = "block";
        modalElement.src = this.src;
        captionText.innerHTML = this.alt; 
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}