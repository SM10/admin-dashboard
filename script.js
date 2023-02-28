
let userName = "Stephen Man"
let atUser = "@stephen"

let userIconView = document.querySelectorAll("img.user-icon")

userIconView.forEach((iconView) => {
    iconView.src="./icons/ctee.jpg"
    iconView.style.width = "4vh"
    iconView.style.height = "4vh"
})

let userNameShort = document.querySelectorAll(".user-name.short")

userNameShort.forEach((object)=>{
    object.textContent = userName 
})

let userNameFull = document.querySelectorAll(".user-name.full")

userNameFull.forEach((object)=>{
    object.textContent = userName  + " (" + atUser + ")"
})

let projectgrid = document.querySelector(".projects-grid")
let announcementgrid = document.querySelector(".announcement-grid")
let trendinggrid = document.querySelector(".trending-grid")

for(let counter = 0; counter < 6; counter++){
    let card = makeProjectCard("project-" + counter)
    projectgrid.append(card)
}

for(let counter = 0; counter < 3; counter++){
    announcementgrid.append(makeAnnouncementCard("announcement-" + counter))
}

for(let counter = 0; counter < 4; counter++){
    trendinggrid.append(makeTrendingCard("trending-" + counter))
}

let projectcardtitle = document.querySelector("#project-0-title")
projectcardtitle.textContent = "Super Cool Project"
let projectcardcontent = document.querySelector("#project-0-content")
projectcardcontent.textContent = "This is card 0."

function makeProjectCard(idString){
    let card = document.createElement("div")
    card.className = "project-card"
    card.style.backgroundColor = "white"
    card.style.borderLeftColor = "gold"
    card.style.width = "auto";
    card.style.aspectRatio = "12/6"
    card.id = idString

    let title = document.createElement("div")
    title.className = "project-card-title"
    title.id = idString + "-title"
    
    let content = document.createElement("div")
    content.className = "project-card-content"
    content.id = idString + "-content"

    let favbutton = document.createElement("button")
    favbutton.className = "project-card-update"
    favbutton.id = idString + "-fav"
    let favicon = document.createElement("img")
    favicon.src="./icons/star-plus-outline.svg"
    favbutton.append(favicon)

    let watchbutton = document.createElement("button")
    watchbutton.className = "project-card-watch"
    watchbutton.id = idString + "-watch"
    let watchicon = document.createElement("img")
    watchicon.src = "./icons/eye-plus-outline.svg"
    watchbutton.append(watchicon)

    let sharebutton = document.createElement("button")
    sharebutton.className = "project-card-share"
    sharebutton.id = idString + "-share"
    let shareicon = document.createElement("img")
    shareicon.src = "./icons/share-variant-outline.svg"
    sharebutton.append(shareicon)

    card.append(title)
    card.append(content)
    card.append(favbutton)
    card.append(watchbutton)
    card.append(sharebutton)
    return card;
}

function makeAnnouncementCard(idString){
    let card = document.createElement("div")
    card.className = "announcement-card"
    card.id = idString

    let title = document.createElement("div")
    title.className = "announcement-card-title"
    title.id = idString +"-title"
    
    let content = document.createElement("div")
    content.className = "announcement-card-title"
    content.id= idString + "-content"

    card.append(title)
    card.append(content)
    return card;
}

function makeTrendingCard(idString){
    let card = document.createElement("div")
    card.className = "trending-card"
    card.id = idString

    let icon = document.createElement("img")
    icon.className = "trending-icon"
    icon.id = idString + "-icon"

    let userat = document.createElement("div")
    userat.className = "trending-userat"
    userat.id = idString + "-userat"

    let desc = document.createElement("div")
    desc.className = "trending-desc"
    desc.id = idString + "-desc"

    card.append(icon)
    card.append(userat)
    card.append(desc)
    return card
}