import { getInterior } from "./database.js"

const interior = getInterior()



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
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Interior = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements

    // for (const metal of metals) {
    //     html += `<li>
    //         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    //     </li>`
    // }

    const listItems = interior.map(interior => {

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

    html += listItems.join("")
    html += "</ul>"

    return html
}

