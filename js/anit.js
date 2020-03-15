document.body.style.margin = "0px"
document.body.style.padding = "0px"
// document.body.innerHTM="<div class='container'></div>"
// document.body.style.display="inline-block"

header = () => {
    const div = document.createElement("div")
    div.setAttribute("class", "header")
    div.style.background = "blue"
    div.style.color = "white"
    div.style.width = "100vw"
    div.style.height="200px"
    div.style.padding = "5px 0px"
    div.style.display = "flex"
    // div.style.textAlign="center"
    div.style.justifyContent = "space-between"
    document.body.appendChild(div)

}

headerlogo = (ClassName) => {
    const logo = document.createElement("span")
    logo.appendChild(document.createTextNode("MyPage"))
    logo.style.color = "white"
    logo.style.fontSize="30px"
    // logo.style.background="red"
    logo.style.height="100%"
    logo.style.margin="10px"
    header = document.getElementsByClassName(ClassName)[0]
    header.appendChild(logo)
}

listul = (ClassName) => {
    const lista = document.createElement("ul")
    lista.setAttribute("id", "menul")
    lista.style.listStyle ="none"
    lista.style.marginRight="20px"
    lista.style.display="flex"
    lista.style.justifyContent="space-between"
    conteiner = document.getElementsByClassName(ClassName)[0]
    conteiner.appendChild(lista)

}
li = (container,text) => {

    const li = document.createElement("li")
    const a = document.createElement("a")
    li.setAttribute("class","listas")
    a.style.textDecoration="none"
    li.style.margin="0px 13px"
    a.style.color="white"
    a.setAttribute("href","#")
    a.appendChild(document.createTextNode(text))
    li.appendChild(a)
    contener = document.getElementById(container)
    contener.appendChild(li)

}

trans = () =>{
    const hed = document.getElementsByTagName("body")[0]
    const div = document.createElement("div")
    div.setAttribute("class", "container")
    div.style.display="flex"

    document.body.appendChild(div)
}
var xp = 200
crecer = () =>{
    const hed = document.getElementsByClassName("header")[0]
    const quij = document.getElementsByClassName("quij")[0]
    hed.style.height=xp.toString()+"px"
    
    hed.style.background= `rgb(5,{0},255)`.replace("{0}",(xp/2).toString())
    quij.style.background= `rgb(5,{0},255)`.replace("{0}",(xp/2).toString())
    xp +=1
}
quitardiente = (e) =>{
    div = e.target
    div.style.border = "1px dashed rgba(0,0,0,0.3)"
    // div.style.borderTop ="0px"
    div.style.background="transparent"
    // console.log(e.target.style.background[0])

    const sangre =  document.createElement("div")
    sangre.style.borderRadius="50%"
    num = Math.random() * 100
    pos1 = Math.random() * 1000
    pos2 = Math.random() * 1500
    sangre.style.width = "{0}px".replace("{0}",num.toString())
    sangre.style.height = "{0}px".replace("{0}",num.toString())
    sangre.style.position="fixed"
    sangre.zIndex="1000"
    sangre.style.background="red"
    sangre.style.top = "{0}px".replace("{0}",pos1.toString())
    sangre.style.left = "{0}px".replace("{0}",pos2.toString())
    sangre.style.right = "{0}px".replace("{0}",pos2.toString())
    sangre.style.bottom = "{0}px".replace("{0}",pos1.toString())
    document.body.appendChild(sangre)


}
squad = (clas)=>{
    const cuad =  document.createElement("div")
    cuad.addEventListener("click",(e)=>{quitardiente(e)})
    cuad.addEventListener("mouseover",(e)=>{e.target.style.cursor="pointer"})
    cuad.setAttribute("class","dientes")
    cuad.style.width="30px"
    cuad.style.height="30px"
    cuad.style.marginRight="30px"
    cuad.style.marginLeft="20px"
    cuad.style.border="1px solid red"
    cuad.style.background="red"
    const cont = document.getElementsByClassName(clas)[0]
    cont.appendChild(cuad)
}

age1 = (conten)=>{
    const eje = document.createElement("div")
    eje.style.borderRadius = "50px"
    eje.style.background="white"
    eje.style.position="absolute"
    eje.style.top="100px"
    eje.style.right="250px"
    eje.style.width="60px"
    eje.style.height="60px"
    const cont =  document.getElementsByClassName("header")[0]
    cont.appendChild(eje)

}
age2 = (conten)=>{
    const eje = document.createElement("div")
    eje.style.borderRadius = "50px"
    eje.style.background="white"
    eje.style.position="absolute"
    eje.style.top="100px"
    eje.style.left="250px"
    eje.style.width="60px"
    eje.style.height="60px"
    const cont =  document.getElementsByClassName("header")[0]
    cont.appendChild(eje)

}

quija = () =>{
    const div = document.createElement("div")
    div.style.display="flex"
    div.setAttribute("class","quij")
    // div.style.height="0px"
    div.style.background = "blue"
    div.style.color = "white"
    div.style.width = "100vw"
    div.style.height="100px"
    div.style.position="absolute"
    div.style.bottom="0px"
    document.body.appendChild(div)
}

diente = ()=>{

        const div = document.createElement("div")
        div.style.display="flex"
        div.style.marginTop="-32px"
        div.style.width = "100vw"
        div.style.height="100px"
        div.setAttribute("class","quijas")
        const diente = document.getElementsByClassName("quij")[0]
        diente.appendChild(div)


}


acheuno = (text) =>{
    const h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(text))
    h1.style.position="fixed"
    h1.style.top ="55%"
    h1.style.left ="37%"
    h1.style.zIndex="-1000"

    document.body.appendChild(h1)
}

win = () =>{
    const h1 =  document.createElement("h1")
    h1.style.fontSize="100px"
    h1.style.transform="rotate(-20deg)"
    h1.style.width="1350px"
    h1.style.height="1px"
    h1.style.color="Red"
    h1.appendChild(document.createTextNode("¡Capullooo! dame mis F dientes"))
    h1.style.position="fixed"
    h1.style.top = "27%"
    h1.style.left = "2%"
    document.body.appendChild(h1)
}

header()
headerlogo("header")
listul("header")
trans()
li("menul","home")
li("menul","About")
li("menul","More")
quija()
diente()
age1()
age2()
acheuno("QUE LO QUE TU DICI")

for (var i = 0; i<19; i++){
    squad("quijas")
    squad("container")

}
var intel = setInterval(()=>{crecer()
    if (xp >= 506){
        xp=200
    }

    CountD=0
    const dientes =  document.getElementsByClassName("dientes")
    for (var i =0; i< dientes.length-1;i++){
        if (dientes[i].style.background[0] == "t"){
            CountD++
        }
    }

    if (CountD>=dientes.length-1){
        clearInterval(intel)
        win()
        quitardiente = (e) =>{
            div = e.target
            div.style.border = "0px"
            div.style.border="1px solid red"
            div.style.background="red"

        }

    }

},0)



