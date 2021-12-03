import { Interiors } from "./interiors.js"
import { paint } from "./paints.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
//import { Orders } from "./orders.js"
//import { renderAllHTML } from "./main.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
                </section>
            <section class="choices__paint options">
                <h2>Paints</h2>
                ${paint()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

    `
}



