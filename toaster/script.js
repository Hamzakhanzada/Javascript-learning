function createToast(config) {
    return function (notification) {
        let parent = document.createElement("div")
        let div = document.createElement("div");
        div.className = ` inline-block bg-blue-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right"? "right-10":"left-10"} ${config.positionY === "top"? "top-10":"bottom-10"} `
        parent.className = "flex flex-col  items-start p-2  gap-4"
        parent.appendChild(div);
        document.body.appendChild(parent);
        div.textContent = notification

        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    } 
}

let toaster =  createToast({
    positionX:"left",
    positionY:"bottom",         
    theme:"dark",
    duration: 3
})

toaster("This is a dummy notification !")
setTimeout(()=>{
toaster("SomeOne Accepted Your Request")
},2000)
