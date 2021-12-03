import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()



// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "interior") {
//             setInterior(parseInt(event.target.value))
//         }
//     }
// )

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Interiors = () => {
    return `
        <select id="interior">
            <option value="0">Select an interior</option>
            ${interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.style}</option>`
        }
    ).join("")
        }
        </select>
    `
}