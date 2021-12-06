import { getInteriors, getWheels, getTechnologies, getOrders, getPaints } from "./database.js"



const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const interiors = getInteriors()
    const foundInterior = interiors.find(
        (interiors) => {
            return interiors.id === order.interiorId
        }
    )

    const paints = getPaints()
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )


    const wheels = getWheels()
    const foundWheels = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelsId
        }
    )

    const technologies = getTechnologies()
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const totalCost = foundInterior.price + foundPaint.price + foundWheels.price + foundTechnology.price;
    // console.log(wheels)
    // console.log(paints)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
             Order #${order.id} costs ${costString}
<li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map((order) => buildOrderListItem(order))



    html += listItems.join("")
    html += "</ul>"

    return html
}

