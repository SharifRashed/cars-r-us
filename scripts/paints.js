import { getPaints } from "./database.js"


const paints = getPaints()

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

export const paint = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = paints.map(paint => {

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

