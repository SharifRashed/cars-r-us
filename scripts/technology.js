import { getTechnology } from "./database.js"


const technology = getTechnology()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "paint") {
//             window.alert(`User chose paint ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technology.map(technology => {

        <select id="resource">
            <option value="0">Prompt to select resource...</option>
            <option value="1">First option</option>
            <option value="2">Second option</option>
            <option value="3">Third option</option>
            <option value="4">Fourth option</option>
        </select>

        return `<li>
        <input type="radio" value="1" name="resource"> First option
        <input type="radio" value="2" name="resource" checked> Second option
        <input type="radio" value="3" name="resource" checked> Third option
        <input type="radio" value="4" name="resource" checked> Fourth option
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")
    html += "</ul>"

    return html
}

