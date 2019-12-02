window.addEventListener('load', loadPage);
function loadPage(){
  document.getElementById('bloc1').style.display = 'none';
  document.getElementById('bloc2').style.display = 'none';
  document.getElementById('bloc3').style.display = 'none';
};
window.addEventListener('scroll', scrollVert);
function scrollVert(){
  var scrollValue = window.scrollY;
  if(scrollValue > 80){
    document.getElementById('bloc1').style.display = 'block';
  }
  if(scrollValue > 400){
    document.getElementById('bloc2').style.display = 'block';
  }
  if(scrollValue > 600){
    document.getElementById('bloc3').style.display = 'block';
  }
};
