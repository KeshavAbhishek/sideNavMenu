document.querySelector('#menuLink-1').addEventListener('mousedown',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-home" style="cursor: pointer;"></i>`;
    document.getElementById('overLap').style.display='block';
    document.getElementById('overLap').style.top='0.85%';
    document.querySelector('#menuLink-1').style.color='rgb(38, 152, 245)';
    document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
})
document.querySelector('#menuLink-2').addEventListener('mousedown',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-users" style="cursor: pointer;"></i>`;
    document.getElementById('overLap').style.display='block';
    document.getElementById('overLap').style.top='20.8%';
    document.querySelector('#menuLink-2').style.color='rgb(38, 152, 245)';
    document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
})
document.querySelector('#menuLink-3').addEventListener('mousedown',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-box-open" style="cursor: pointer;">`;
    document.getElementById('overLap').style.display='block';
    document.getElementById('overLap').style.top='40.7%';
    document.querySelector('#menuLink-3').style.color='rgb(38, 152, 245)';
    document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
})
document.querySelector('#menuLink-4').addEventListener('mousedown',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-chart-pie" style="cursor: pointer;">`;
    document.getElementById('overLap').style.display='block';
    document.getElementById('overLap').style.top='60.3%';
    document.querySelector('#menuLink-4').style.color='rgb(38, 152, 245)';
    document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
})
document.querySelector('#menuLink-5').addEventListener('mousedown',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-tools" style="cursor: pointer;">`;
    document.getElementById('overLap').style.display='block';
    document.getElementById('overLap').style.top='80.15%';
    document.querySelector('#menuLink-5').style.color='rgb(38, 152, 245)';
    document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
})

document.querySelector('#menuLink-1').addEventListener('mouseup',()=>{
    if(document.getElementById('overLap').style.top=='0.85%'){
        document.querySelector('#menuLink-1').style.color='rgb(38, 152, 245)';
        document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-2').style.color='white';
        document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-3').style.color='white';
        document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-4').style.color='white';
        document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-5').style.color='white';
        document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
    }
})
document.querySelector('#menuLink-2').addEventListener('mouseup',()=>{
    if(document.getElementById('overLap').style.top=='20.8%'){
        document.querySelector('#menuLink-1').style.color='white';
        document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-2').style.color='rgb(38, 152, 245)';
        document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-3').style.color='white';
        document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-4').style.color='white';
        document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-5').style.color='white';
        document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
    }
})
document.querySelector('#menuLink-3').addEventListener('mouseup',()=>{
    if(document.getElementById('overLap').style.top=='40.7%'){
        document.querySelector('#menuLink-1').style.color='white';
        document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-2').style.color='white';
        document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-3').style.color='rgb(38, 152, 245)';
        document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-4').style.color='white';
        document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-5').style.color='white';
        document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
    }
})
document.querySelector('#menuLink-4').addEventListener('mouseup',()=>{
    if(document.getElementById('overLap').style.top=='60.3%'){
        document.querySelector('#menuLink-1').style.color='white';
        document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-2').style.color='white';
        document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-3').style.color='white';
        document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-4').style.color='rgb(38, 152, 245)';
        document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-5').style.color='white';
        document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
    }
})
document.querySelector('#menuLink-5').addEventListener('mouseup',()=>{
    if(document.getElementById('overLap').style.top=='80.15%'){
        document.querySelector('#menuLink-1').style.color='white';
        document.querySelector('#menuLink-1').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-2').style.color='white';
        document.querySelector('#menuLink-2').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-3').style.color='white';
        document.querySelector('#menuLink-3').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-4').style.color='white';
        document.querySelector('#menuLink-4').style.transition='color 0.5s ease';
        document.querySelector('#menuLink-5').style.color='rgb(38, 152, 245)';
        document.querySelector('#menuLink-5').style.transition='color 0.5s ease';
    }
})