const drawer = document.querySelector("#drawer-toggle");
const  btnToggleDrawer= document.querySelector("#btn-toggle-drawer")



btnToggleDrawer.addEventListener("click",toggleDrawerState)

function toggleDrawerState(){
    
    let drawerFlexShrink = Number(window.getComputedStyle(drawer).getPropertyValue("flex-shrink"));
    console.log(drawerFlexShrink)
    if(drawerFlexShrink>0){
        drawer.style.flexShrink=0;
    }else{
       
        drawer.style.flexShrink=2;
    }




}

