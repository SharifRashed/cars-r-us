import { getPaints, setPaint } from "./database.js"


const paints = getPaints()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "paint") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

export const Paints = () => {
    let html = "<ul>"

    const listItems = paints.map(paint => {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}"  /> ${paint.paint}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}