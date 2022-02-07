var innerHTMLValue = `<div id="iconColorManager">
<label id="redValueLabel" for="redValue">Red:</label>
<input min=0 max=255 step=1 value=255 type="range" id="redValue">
<label id="greenValueLabel" for="greenValue">Green:</label>
<input min=0 max=255 step=1 value=255 type="range" id="greenValue">
<label id="blueValueLabel" for="blueValue">Blue:</label>
<input min=0 max=255 step=1 value=255 type="range" id="blueValue">
<label id="alphaValueLabel" for="alphaValue">Alpha:</label>
<input min=0 max=1 step=0.1 value=1 type="range" id="alphaValue">
</div>`;

document.querySelector('#menuLink-1').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=innerHTMLValue+`<i class="fas fa-home" style="cursor: pointer;"></i>`;
    available();
})
document.querySelector('#menuLink-2').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=innerHTMLValue+`<i class="fas fa-users" style="cursor: pointer;"></i>`;
    available();
})
document.querySelector('#menuLink-3').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=innerHTMLValue+`<i class="fas fa-box-open" style="cursor: pointer;">`;
    available();
})
document.querySelector('#menuLink-4').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=innerHTMLValue+`<i class="fas fa-chart-pie" style="cursor: pointer;">`;
    available();
})
document.querySelector('#menuLink-5').addEventListener('mouseover',()=>{
    document.getElementById('preview').innerHTML=innerHTMLValue+`<i class="fas fa-tools" style="cursor: pointer;">`;
    available();
})

function available(){
    document.getElementById('redValue').oninput=()=>{
        document.querySelector("#preview i").style.color=`rgba(${document.getElementById('redValue').value},${document.getElementById('greenValue').value},${document.getElementById('blueValue').value},${document.getElementById('alphaValue').value})`
    }
    document.getElementById('greenValue').oninput=()=>{
        document.querySelector("#preview i").style.color=`rgba(${document.getElementById('redValue').value},${document.getElementById('greenValue').value},${document.getElementById('blueValue').value},${document.getElementById('alphaValue').value})`
    }
    document.getElementById('blueValue').oninput=()=>{
        document.querySelector("#preview i").style.color=`rgba(${document.getElementById('redValue').value},${document.getElementById('greenValue').value},${document.getElementById('blueValue').value},${document.getElementById('alphaValue').value})`
    }
    document.getElementById('alphaValue').oninput=()=>{
        document.querySelector("#preview i").style.color=`rgba(${document.getElementById('redValue').value},${document.getElementById('greenValue').value},${document.getElementById('blueValue').value},${document.getElementById('alphaValue').value})`
    }
}