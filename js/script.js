const scrollTop = function(){
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);

    const scrollBtnDisplay = function(){
        window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    const scrollWindow = function (){
        if(window.scrollY != 0){
            setTimeout(function(){
                window.scrollTo({
                    //0, window.scrollY-50,0
                    top:window.scrollY-50,
                    left:0,
                    behavior: 'instant'
                             });
                scrollWindow();
            }, 1);
        }
    };
    scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();



