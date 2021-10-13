let progress = document.querySelectorAll("button");
let i=0;
progress.forEach(function(){
    progress[i].addEventListener("click" , function(){
        let getSelection = this.getAttribute("name");
        let setSelection = document.querySelector("." + getSelection);
        let getCounter = document.querySelector("." + getSelection + "-counter").textContent;
        let setCounter = Number.parseInt(getCounter)+1;
        let currentWidth = setSelection.style.width;
        let newWidth = Number.parseInt(currentWidth) + 20;
        setSelection.classList.add("running");
        document.querySelector("#container").classList.add("running");
        setTimeout(() => {
            setSelection.classList.remove("running");
            document.querySelector("#container").classList.add("running");
        }, 1000);
        if(isNaN(newWidth)){
            setSelection.style.width = "20%";
        }
        else{
            if(newWidth <=100){
                setSelection.style.width = newWidth + "%";
            }
            else{
                setSelection.style.width = "0%"
                setCounter = 0;
            }
        };
        setSelection.getAttribute("style");
        document.querySelector("." + getSelection + "-counter").textContent = setCounter;

    })
    ++i;
})