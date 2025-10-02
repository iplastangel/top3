document.addEventListener('DOMContentLoaded', function(){
  var pd = document.getElementById('pubdate');
  if(pd) pd.textContent = new Date().toLocaleDateString();
});