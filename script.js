
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
    let card = makeAnnouncementCard("announcement-" + counter)
    announcementgrid.append(card)
    if (counter != 2){
        let cardcontent = document.querySelector("#announcement-" + counter + "-content")
        cardcontent.style.borderBottomColor = "lightgrey"
        cardcontent.style.borderBottomStyle = "solid"
    }
}

for(let counter = 0; counter < 4; counter++){
    trendinggrid.append(makeTrendingCard("trending-" + counter))
}

addMessage("#project-0-title", "Super Cool Project", "#project-0-content", "This project is an imitation admin dashboard.")
addMessage("#project-1-title", "Less Cool Project", "#project-1-content", "I should link these up to other projects i made.")
addMessage("#project-2-title", "Impossible App", "#project-2-content", "My SQL Java applet could go here.")
addMessage("#project-3-title", "Easy Peasy App", "#project-3-content", "Maybe some Python code I wrote for processing X12 files.")
addMessage("#project-4-title", "Ad Blocker", "#project-4-content", "Don't have an ad blocker.")
addMessage("#project-5-title", "Money Maker", "#project-5-content", "I'll put my LinkedIn profile here, because I make money through a job.")

addMessage('#announcement-0-title', "Site Maintenance", "#announcement-0-content", "This is a site maintenance notification. I'm not maintaining it at all")
addMessage('#announcement-1-title', "Community Share Day", "#announcement-1-content", "There is no community share day. The only people I'm sharing this with is future employers.")
addMessage('#announcement-2-title', "Updated Privacy Policy", "#announcement-2-content", "You tell me things, I forget them. I don't even remember things about you, let alone share it with others.")

addTrending("#trending-0-userat", "@tegan", "#trending-0-desc", "World Peace Builder", "#trending-0-icon", "./icons/abacus.svg")
addTrending("#trending-1-userat", "@morgan", "#trending-1-desc", "Super Cool Project", "#trending-1-icon", "./icons/abugida-devanagari.svg")
addTrending("#trending-2-userat", "@kendall", "#trending-2-desc", "Life Changing App", "#trending-2-icon", "./icons/account-cash.svg")
addTrending("#trending-3-userat", "@alex", "#trending-3-desc", "No Traffic Maker", "#trending-3-icon", "./icons/advertisements.svg")

function addMessage(titleID, titleString, contentID, contentString){
    let projectcardtitle = document.querySelector(titleID)
    projectcardtitle.textContent = titleString
    let projectcardcontent = document.querySelector(contentID)
    projectcardcontent.textContent = contentString
}

function addTrending(useratID, useratString, descID, descString, imgID, imgsrc){
    let trendinguserat = document.querySelector(useratID)
    trendinguserat.textContent = useratString
    let trendingdesc = document.querySelector(descID)
    trendingdesc.textContent = descString
    let trendingimg = document.querySelector(imgID)
    trendingimg.src = imgsrc
}

function makeProjectCard(idString){
    let card = document.createElement("div")
    card.className = "project-card"
    card.id = idString

    let title = document.createElement("div")
    title.className = "project-card-title"
    title.id = idString + "-title"
    
    let content = document.createElement("div")
    content.className = "project-card-content"
    content.id = idString + "-content"

    let buttons = document.createElement("div")
    buttons.className = "project-card-buttons"

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
    buttons.append(favbutton)
    buttons.append(watchbutton)
    buttons.append(sharebutton)
    card.append(buttons)
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
    content.className = "announcement-card-content"
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