var customise=document.querySelector(".customise");
var customiseSection=document.querySelector(".customise-section");
var moreOptions=document.querySelector(".more-options")
var options=document.querySelector(".options");
var recentElements=document.querySelectorAll(".recents div")
var ellepsis=document.querySelector(".recents div .fa-ellipsis-v")
var customiseButtons=document.querySelectorAll(".content2 .left ul li");
var background=document.querySelectorAll(".right>.contents>.content1>div");
var body=document.querySelector("body");
var currentBodyBackground=body.style.backgroundImage;
var customiseCancelButton=document.querySelector(".cancel");
var customiseDoneButton=document.querySelector(".done");
var profile=document.querySelector(".profile");
var accountSection=document.querySelector(".account-section");
var uploadFile=document.querySelector(".file");

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


// Customise section

customise.addEventListener("click",function(){
    customiseSection.classList.toggle("hide");
})



customiseButtons.forEach(listItem=>{
    var id=listItem.id;
    listItem.addEventListener("click",()=>{
        fun(id);
    })})

function fun(id){
    var items=document.querySelectorAll(".right>.contents>div");
    items.forEach(ele=>{
        ele.classList.add("hide");
    })
    var selected=document.querySelector(`.right .contents .content${id}`);
    selected.classList.remove("hide");
}



//Background

background.forEach(element=>{
    element.addEventListener("click",()=>{
        var url=element.firstElementChild.style.backgroundImage;
        body.style.backgroundImage=url;
        body.style.background="contain";
    })
})

//Uploading background

function uploadHandler(){
    var bg=uploadFile.files[0].name;
    var url=`./img/${bg}`;
    console.log(`url("${url}")`);
    body.style.backgroundImage=`url("${url}")`
}

// Customise Cancel and Save

customiseCancelButton.addEventListener("click",()=>{
    body.style.backgroundImage=currentBodyBackground;
    customiseSection.classList.toggle("hide");
})

customiseDoneButton.addEventListener("click",()=>{
    currentBodyBackground=body.style.backgroundImage;
    customiseSection.classList.toggle("hide");
})

//Profile Section

profile.addEventListener("click",()=>{
    accountSection.classList.toggle("hide");
})