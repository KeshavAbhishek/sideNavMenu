var overLappingWidget = document.getElementById('overLap')

document.querySelector('#frame-1').addEventListener('mouseover',()=>{
    overLappingWidget.style.display='block';
    overLappingWidget.style.top='6%';

    document.querySelector('#frame-2 span').style.color='white'
    document.querySelector('#frame-2 i').style.color='white'

    document.querySelector('#frame-3 span').style.color='white'
    document.querySelector('#frame-3 i').style.color='white'

    document.querySelector('#frame-4 span').style.color='white'
    document.querySelector('#frame-4 i').style.color='white'

    document.querySelector('#frame-5 span').style.color='white'
    document.querySelector('#frame-5 i').style.color='white'

    document.getElementById('preview').innerHTML=`<i class='fa fa-home'></i>`;
})
document.querySelector('#frame-2').addEventListener('mouseover',()=>{
    overLappingWidget.style.display='block';
    overLappingWidget.style.top='24%';

    document.querySelector('#frame-1 span').style.color='white'
    document.querySelector('#frame-1 i').style.color='white'

    document.querySelector('#frame-3 span').style.color='white'
    document.querySelector('#frame-3 i').style.color='white'

    document.querySelector('#frame-4 span').style.color='white'
    document.querySelector('#frame-4 i').style.color='white'

    document.querySelector('#frame-5 span').style.color='white'
    document.querySelector('#frame-5 i').style.color='white'

    document.getElementById('preview').innerHTML=`<i class='fa fa-id-card'></i>`;
})
document.querySelector('#frame-3').addEventListener('mouseover',()=>{
    overLappingWidget.style.display='block';
    overLappingWidget.style.top='43%';

    document.querySelector('#frame-1 span').style.color='white'
    document.querySelector('#frame-1 i').style.color='white'

    document.querySelector('#frame-2 span').style.color='white'
    document.querySelector('#frame-2 i').style.color='white'

    document.querySelector('#frame-4 span').style.color='white'
    document.querySelector('#frame-4 i').style.color='white'

    document.querySelector('#frame-5 span').style.color='white'
    document.querySelector('#frame-5 i').style.color='white'

    document.getElementById('preview').innerHTML=`<i class="fa fa-phone-square"></i>`;
})
document.querySelector('#frame-4').addEventListener('mouseover',()=>{
    overLappingWidget.style.display='block';
    overLappingWidget.style.top='61%';

    document.querySelector('#frame-1 span').style.color='white'
    document.querySelector('#frame-1 i').style.color='white'

    document.querySelector('#frame-2 span').style.color='white'
    document.querySelector('#frame-2 i').style.color='white'

    document.querySelector('#frame-3 span').style.color='white'
    document.querySelector('#frame-3 i').style.color='white'

    document.querySelector('#frame-5 span').style.color='white'
    document.querySelector('#frame-5 i').style.color='white'

    document.getElementById('preview').innerHTML=`<i class='fa fa-gift'></i>`;
})
document.querySelector('#frame-5').addEventListener('mouseover',()=>{
    overLappingWidget.style.display='block';
    overLappingWidget.style.top='79%';

    document.querySelector('#frame-1 span').style.color='white'
    document.querySelector('#frame-1 i').style.color='white'

    document.querySelector('#frame-2 span').style.color='white'
    document.querySelector('#frame-2 i').style.color='white'

    document.querySelector('#frame-3 span').style.color='white'
    document.querySelector('#frame-3 i').style.color='white'

    document.querySelector('#frame-4 span').style.color='white'
    document.querySelector('#frame-4 i').style.color='white'

    document.getElementById('preview').innerHTML=`<i class='fa fa-calendar'></i>`;
})

document.getElementById('frame-1').addEventListener('mouseout',()=>{
    if(document.getElementById('overLap').style.top=='6%'){
        document.querySelector('#frame-1 span').style.color='rgb(38,152,245)'
        document.querySelector('#frame-1 i').style.color='rgb(38,152,245)'
    }
})
document.getElementById('frame-2').addEventListener('mouseout',()=>{
    if(document.getElementById('overLap').style.top=='24%'){
        document.querySelector('#frame-2 span').style.color='rgb(38,152,245)'
        document.querySelector('#frame-2 i').style.color='rgb(38,152,245)'
    }
})
document.getElementById('frame-3').addEventListener('mouseout',()=>{
    if(document.getElementById('overLap').style.top=='43%'){
        document.querySelector('#frame-3 span').style.color='rgb(38,152,245)'
        document.querySelector('#frame-3 i').style.color='rgb(38,152,245)'
    }
})
document.getElementById('frame-4').addEventListener('mouseout',()=>{
    if(document.getElementById('overLap').style.top=='61%'){
        document.querySelector('#frame-4 span').style.color='rgb(38,152,245)'
        document.querySelector('#frame-4 i').style.color='rgb(38,152,245)'
    }
})
document.getElementById('frame-5').addEventListener('mouseout',()=>{
    if(document.getElementById('overLap').style.top=='79%'){
        document.querySelector('#frame-5 span').style.color='rgb(38,152,245)'
        document.querySelector('#frame-5 i').style.color='rgb(38,152,245)'
    }
})
