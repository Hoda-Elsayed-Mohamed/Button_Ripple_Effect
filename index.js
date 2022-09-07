let btn =document.querySelector('.btn');




btn.addEventListener('mouseover', function getDimension(e){
  var x = (e.pageX - this.offsetLeft);
  var y = (e.pageY - this.offsetTop);
  btn.style.setProperty("--xPostion", x +"px");
  btn.style.setProperty("--yPostion", y +"px");

  // console.log(y)
    
});