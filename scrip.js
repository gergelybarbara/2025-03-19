console.log("Üdv, én vagyok a script!")
//document.getElementsByTagName("div")[0].innerHTML="Hello, hello"

let gykosar= document.getElementsByClassName("gykosar")[0]

let s=""
for (let i = 1; i < 7; i++)
{
   //s+='<div calss="box">'+i+'</div>'
   //s+=`<div calss="box"><img src="./FruitsPics/FruitsPics/image${i}.jpg" alt="Gyümölcs">
  // </div>`

let box = document.createElement("div")
box.className = "box"
gykosar.appendChild(box)

let h3 = document.createElement("h3")
h3.innerHTML = "Fruits..."
box.appendChild(h3)

let image = document.createElement("img")
image.src=`./FruitsPics/FruitsPics/image${i}.jpg`

image.alt="Gyümölcs"
box.appendChild(image)

let bekezdes = document.createElement("p")
bekezdes.innerHTML ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, commodi! Aut, beatae."
box.appendChild(bekezdes)

let a = document.createElement("a")
a.href="#"
a.className="btn"
a.innerHTML="Részletek"
box.appendChild(a)

}

// document.getElementsByClassName("gykosar")[0].innerHTML=s
