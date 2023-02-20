let projectgrid = document.querySelector("projects-grid")
let announcementgrid = document.querySelector("announcement-grid")
let trendinggrid = document.querySelector("trending-grid")

for(let counter = 0; counter < 6; counter++){
    projectgrid.append(makeProjectCard("project-" + counter))
}

for(let counter = 0; counter < 3; counter++){
    announcementgrid.append(makeAnnouncementCard("announcement-" + counter))
}

for(let counter = 0; counter < 4; counter++){
    trendinggrid.append(makeTrendingCard("trending-" + counter))
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

    let favbutton = document.createElement("button")
    favbutton.className = "project-card-update"
    favbutton.id = idString + "-fav"

    let watchbutton = document.createElement("button")
    watchbutton.className = "project-card-watch"
    watchbutton.id = idString + "-watch"

    let sharebutton = document.createElement("button")
    sharebutton.className = "project-card-share"
    sharebutton.id = idString + "-share"

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