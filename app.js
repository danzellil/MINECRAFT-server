

function toggle_visibility2() {
   
    if(document.getElementById('donate').style.display='block'){
        document.getElementById('role').style.display='none';

    
        if(document.getElementById('role').style.display='none'){
            document.getElementById('role').style.display='block';
            document.getElementById('donate').style.display='none';
        }
    }
    
}
function toggle_visibility(){
    var role = document.getElementById('role');
    var donate = document.getElementById('donate');
    if (donate.style.display='none'){
        donate.style.display='block';
        if(document.getElementById('donate').style.display='none'){
            document.getElementById('donate').style.display='block';
            document.getElementById('role').style.display='none';
        }
    }
}
function func(){
    var vl = document.getElementById('vlastelin');
    if(vl.style.display='none'){
        vl.style.display='block';
        
    }
}