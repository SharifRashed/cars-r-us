import { getWheels, setWheels } from "./database.js"


const wheels = getWheels()

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
        if (changeEvent.target.id === "wheel") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

// export const Wheels = () => {
//     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItems = wheels.map(wheel => {

//         return `<li>
//         <input type="radio" value="1" name="resource"> First option
//         </li>`
//     })


//     // Join all of the strings in the array into a single string
//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

export const Wheels = () => {
    return `
        <select id="wheels">
            <option value="0">Select wheels</option>
            ${wheels.map(
        (wheels) => {
            return `<option value="${wheels.id}">${wheels.wheel}</option>`
        }
    ).join("")
        }
        </select>
    `
}

