import { interior } from "./interior.js"
import { paint } from "./paint.js"
import { technology } from "./technology.js"
import { wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
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
        <h1>CarsRUs</h1>

        <article class="choices">
            <section class="choices__interior options">
                <h2>interior</h2>
                ${interior()}
                </section>
            <section class="choices__paint options">
                <h2>paint</h2>
                ${paint()}
            </section>
            <section class="choices__technology options">
                <h2>technology</h2>
                ${technology()}
            </section>
            <section class="choices__wheels options">
                <h2>wheels</h2>
                ${wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}



