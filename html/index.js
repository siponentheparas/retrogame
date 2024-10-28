(async () => {
    async function loadTemplate(templateId, filePath) {
        const response = await fetch(filePath);
        const text = await response.text()
    
        const container = document.createElement('div')
        container.innerHTML = text
    
        document.body.appendChild(container.querySelector(`#${templateId}`))
    }
    
    await loadTemplate('game-info-template', './templates/game-info-template.html')

    const res = await fetch('http://localhost:3000/api/game')
    const games = await res.json()

    games.games.forEach(element => {
        const template = document.getElementById('game-info-template')
        const clone = template.content.cloneNode(true);
    
        const styleLink = document.createElement('link')
        styleLink.rel = 'stylesheet'
        styleLink.href = './templates/game-info.css'
        clone.appendChild(styleLink)
    
        const name = clone.querySelector(".name")
        const desc = clone.querySelector(".description")
        const maker = clone.querySelector(".maker")
        const year = clone.querySelector(".year")
        const button = clone.querySelector(".show")

        name.innerText = element.game_name.fi
        desc.innerText = element.description.fi
        maker.innerText = element.maker
        year.innerText = element.launched_year

        button.onclick = () => {console.log(element.ID)}
        document.getElementById("games-list").appendChild(clone);
    });

    document.getElementById('info-loading').innerText = ""   
})()