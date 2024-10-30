export async function loadTemplate(templateId, filePath) {
    const response = await fetch(filePath);
    const text = await response.text()

    const container = document.createElement('div')
    container.innerHTML = text

    document.body.appendChild(container.querySelector(`#${templateId}`))
}

export function unloadTemplate(templateId) {
    const template = document.querySelector(`#${templateId}`)
    template.remove()
}

export function createGameInfoTemplate(name, desc, maker, year, show, cb) {
    const template = document.getElementById('game-info-template')
    const clone = template.content.cloneNode(true);

    const styleLink = document.createElement('link')
    styleLink.rel = 'stylesheet'
    styleLink.href = './templates/game-info.css'
    clone.appendChild(styleLink)

    const cName = clone.querySelector(".name")
    const cDesc = clone.querySelector(".description")
    const cMaker = clone.querySelector(".maker")
    const cYear = clone.querySelector(".year")
    const cButton = clone.querySelector(".show")

    cName.innerText = name
    cDesc.innerText = desc
    cMaker.innerText = maker
    cYear.innerText = year
    cButton.innerText = show

    cButton.onclick = () => {cb()}

    return clone
}