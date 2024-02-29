var resume = document.querySelector(".grad-header");

resume.onmouseenter = function(){
    resume.innerHTML = "Download resume<span class=\"material-symbols-outlined\"> file_save</span>"; 
};

resume.onmouseout = function(){
    resume.innerHTML = "Since Graduating <span class=\"material-symbols-outlined\">file_save</span>"; 
};
