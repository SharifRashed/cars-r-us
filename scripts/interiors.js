import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}"  /> ${interior.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}