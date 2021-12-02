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
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements

    // for (const metal of metals) {
    //     html += `<li>
    //         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    //     </li>`
    // }

    const listItems = interiors.map(interior => {

        return `<li>
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.packageType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

