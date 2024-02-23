var resume = document.querySelector(".grad-header");

resume.onmouseenter = function(){

    resume.innerHTML = "Download resume"; 
};

resume.onmouseout = function(){
    resume.innerHTML = "Since Graduating"; 
};