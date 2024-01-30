

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
  
    var donate = document.getElementById('donate');
    if (donate.style.display='none'){
        donate.style.display='block';
        if(document.getElementById('donate').style.display='none'){
            document.getElementById('donate').style.display='block';
            document.getElementById('role').style.display='none';
        }
    }
}

function func() {
    var div = document.getElementById('vlastelin');
    var e = document.getElementById('moder');
    div.style.display = div.style.display == "none" ? "block" : "none";
    if(e.style.display='block'){
        div.style.display='none';
    }

}
function func2() {
    var div = document.getElementById('vlastelin');
    var e = document.getElementById('moder');
    e.style.display = e.style.display == "none" ? "block" : "none";
    if(div.style.display='block'){
        e.style.display='none';
    }
}