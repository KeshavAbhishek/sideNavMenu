document.querySelector('#menuLink-1').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-home" style="cursor: pointer;"></i>`;
})
document.querySelector('#menuLink-2').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-users" style="cursor: pointer;"></i>`;
})
document.querySelector('#menuLink-3').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-box-open" style="cursor: pointer;">`;
})
document.querySelector('#menuLink-4').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-chart-pie" style="cursor: pointer;">`;
})
document.querySelector('#menuLink-5').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=`<i class="fas fa-tools" style="cursor: pointer;">`;
})