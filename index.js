function calc() {
    var v = document.getElementById('volts').value;
    var w = document.getElementById('watts').value;
    var r = document.getElementById('res').value;
    var i = document.getElementById('amps').value;   
    var r_v,r_i,r_w,r_r;
    if( v!=0 && i!=0){
        r_r = v/i;
        r_w = v*i;
        document.getElementById('ohms_result').innerHTML = r_r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = r_w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';

    }
    else if(w!=0 && i!=0){
        r_r = w/(i*i);
        r_v = r_r*i;
        document.getElementById('ohms_result').innerHTML = r_r + ' ohms';
        document.getElementById('volts_result').innerHTML = r_v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';
    }
    else if(v!=0 && r!=0){
        r_w = (v*v)/r;
        r_i = v/r;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = r_w + ' watts';
        document.getElementById('amps_result').innerHTML = r_i + ' amps';
    }
    else if(v!=0 && w!=0){
        r_i = w/v;
        r_r = v/r_i;
        document.getElementById('ohms_result').innerHTML = r_r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = r_i + ' amps';
    }
    else if(r!=0 && i!=0){
        r_w = r*(i*i);
        r_v = r*i;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = r_v + ' volts';
        document.getElementById('watts_result').innerHTML = r_w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';
    }
    else if(r!=0 && w!=0){
        r_v = Math.sqrt(w*r);
        r_i = r_v/r;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = r_v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = r_i + ' amps';
    }
    else if(v!=0 && r!=0 && i!=0){
        r_w = v*i;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = r_w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';
    }
    else if(v!=0 && w!=0 && i!=0){
        r_r = v/i;
        document.getElementById('ohms_result').innerHTML = r_r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';
    }
    else if(v!=0 && r!=0 && w!=0){
        r_i = v/r;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = r_i + ' amps';
    }
    else if(w!=0 && r!=0 && i!=0){
        r_v = r*i;
        document.getElementById('ohms_result').innerHTML = r + ' ohms';
        document.getElementById('volts_result').innerHTML = r_v + ' volts';
        document.getElementById('watts_result').innerHTML = w + ' watts';
        document.getElementById('amps_result').innerHTML = i + ' amps';
    }
    
}
function reset(){
    document.getElementById('volts').value.reset();
    document.getElementById('watts').value.reset();
    document.getElementById('res').value.reset();
    document.getElementById('amps').value.reset();   
    document.getElementById('ohms_result').innerHTML.reset();
    document.getElementById('volts_result').innerHTML.reset();
    document.getElementById('watts_result').innerHTML.reset();
    document.getElementById('amps_result').innerHTML.reset();

}