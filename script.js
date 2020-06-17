
var moreOptions=document.querySelector(".more-options")
var options=document.querySelector(".options");
var recentElements=document.querySelectorAll(".recents div")
var ellepsis=document.querySelector(".recents div .fa-ellipsis-v")
function openOptionsTab(){
     moreOptions.classList.toggle("hide");
}

function moreOptionsHidden(){
    if(moreOptions.classList.contains("hide"))
        return 1;
    else
        return 0;
}

// Using escape with key code 13

document.addEventListener("keyup",(e)=>{
   if(moreOptions.classList.contains("hide"))
    {
    }
    else{
        (e.which===27)
        openOptionsTab();
    }
})

// Clicking outside the option-menu closes it;
document.addEventListener("click",function(event){
   
    if((moreOptionsHidden()===1)&&(event.target===options))
    {
        openOptionsTab();
    }
    else
    {
        var isCLickedInside=moreOptions.contains(event.target);
        if(!isCLickedInside)
        {
            moreOptions.classList.add("hide");
        }
    }
})



//Adding ellepsis on hover on recents

// recentElements.forEach(element=>{
//     this.addEventListener("mouseover",function(){
//         console.log("hello");
    
//     })
// })
// ellepsis.addEventListener("hover",function(){
//     console.log("hello");
//     this.classList.toggle("hide");
// })