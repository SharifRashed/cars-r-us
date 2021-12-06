import { getWheels, setWheels } from "./database.js"


const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "wheel") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )



export const Wheels = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheels" value="${wheel.id}"  /> ${wheel.wheel}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

