window.addEventListener('load',function(){
    // 绑定跳转事件
    var pcli1 = document.querySelector('#pcli1');
    var pcli2 = document.querySelector('#pcli2');
    var pcli3 = document.querySelector('#pcli3');
    var mli1 = document.querySelector('#mli1');
    var mli2 = document.querySelector('#mli2');
    pcli1.addEventListener('click',function(){
        location.assign('projectBranchs/pctransition1/PCtransition1.html');
    })
    pcli2.addEventListener('click',function(){
        location.assign('projectBranchs/emailtransition/PCtransition1.html');
    })
    pcli3.addEventListener('click',function(){
        location.assign('projectBranchs/newstransition/PCtransition1.html');
    })
    mli2.addEventListener('click',function(){
        location.assign('projectBranchs/mjdtransition/mjdtransition.html');
    })
    mli1.addEventListener('click',function(){
        location.assign('projectBranchs/mtransition1/mtransition1.html');
    })
    var eleli1 = document.querySelector('#eleli1');
    var eleli2 = document.querySelector('#eleli2');
    var elevatorul = document.querySelector('.elevatorul');
    var mbutton = document.querySelector('#mbutton');
    var mol = document.querySelector('.mol');
    window.addEventListener('scroll',function(){
        var pagey = window.pageYOffset;
        if(pagey>300){
            elevatorul.style.position = 'fixed';
            eleli2.className = '';
            eleli1.className = 'elecurrent';
            if(pagey>700){
                eleli1.className = '';
                eleli2.className = 'elecurrent';
            }
        }else{
            elevatorul.style.position = '';
            eleli1.className = '';
            eleli2.className = '';
        }
    })
    eleli1.addEventListener('click',function(){
        window.scroll(window,350);
    })
    eleli2.addEventListener('click',function(){
        window.scroll(window,880);
    })
    mbutton.addEventListener('click',function(){
        if(mol.style.display == 'block'){
            mol.style.display = 'none';
        }else{
            mol.style.display = 'block'
        }    
    })
})