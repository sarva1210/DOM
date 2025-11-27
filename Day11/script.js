const p = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = p.innerText

let iteration = 0
p.addEventListener("mouseenter", ()=>{
    setInterval(()=>{
        const str = text.split('').map((char, index) => {  //map returns array in return 
            if (index < iteration){
                return char
            }
            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("")

        p.innerText = str

        iteration += 0.2
    },30)

})