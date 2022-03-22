const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

const confirmBtn = document.getElementById('confirm');
const updateBtn= document.getElementById('update');
const pendingBtn = document.getElementById('pending');
const cancel = document.getElementById('cancel');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

confirmBtn.addEventListener('click', function(){

        document.getElementById("update").disabled = true;
        document.getElementById("pending").disabled = true;
        document.getElementById("cancel").disabled = true;  
        
})
updateBtn.addEventListener('click', function(){

    document.getElementById("confirm").disabled = true;
    document.getElementById("pending").disabled = true;
    document.getElementById("cancel").disabled = true;  
    
})
pendingBtn.addEventListener('click', function(){
    document.getElementById("confirm").disabled=true;
    document.getElementById("update").disabled = true;
    document.getElementById("cancel").disabled = true; 
})
cancel.addEventListener('click', function(){
    document.getElementById("confirm").disabled=true;
    document.getElementById("update").disabled = true;
    document.getElementById("pending").disabled = true; 
})

confirmBtn.addEventListener('click', function(){
    document.getElementById('confirm').style.backgroundColor="green";
    setTimeout("confirmBtn()", 2000);

})
updateBtn.addEventListener('click', function(){
    document.getElementById('update').style.backgroundColor="green";
    setTimeout("updateBtn()", 2000);

})

pendingBtn.addEventListener('click', function(){
    document.getElementById('pending').style.backgroundColor="green";
    setTimeout("pendingBtn()", 2000);

})

cancel.addEventListener('click', function(){
    document.getElementById('cancel').style.backgroundColor="green";
    setTimeout("cancel()", 2000);

})





