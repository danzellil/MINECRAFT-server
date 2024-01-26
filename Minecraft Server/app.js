

function toggle_visibility() {
   if (document.getElementById('donate')) {

       if (document.getElementById('donate').style.display == 'none') {
           document.getElementById('donate').style.display = 'block';
           document.getElementById('role').style.display = 'none';
       }
       else {
           document.getElementById('donate').style.display = 'none';
           document.getElementById('role').style.display = 'block';
       }
   }
}