import { getTechnologies, setTechnology } from "./database.js"


const technologies = getTechnologies()

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
        if (changeEvent.target.id === "technology") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technologies.map(technology => {

        return `<li>
        <input type="radio" name="technology" value="${technology.id}" /> ${technology.packageType}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")
    html += "</ul>"

    return html
}

