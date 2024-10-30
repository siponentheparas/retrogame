import { loadTemplate, createGameInfoTemplate } from "./templateLoader.js";

(async () => {    
    await loadTemplate('game-info-template', './templates/game-info-template.html')

    const res = await fetch('http://localhost:3000/api/game')
    const games = await res.json()

    games.games.forEach(element => {
        const listItem = createGameInfoTemplate(element.game_name.fi, element.description.fi, element.maker, element.launched_year, "Näytä", () => {
            console.log(element.ID) 
        })

        document.getElementById("info-grid").appendChild(listItem);
    });

    document.getElementById('info-loading').innerText = ""
})()