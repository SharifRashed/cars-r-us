// import { getInteriors, getPaintColors, getWheels, getTechnologies, getOrders } from "./database.js"
// const paints = getPaintColors()
// const interiors = getInteriors()
// const technologies = getTechnologies()
// const wheels = getWheels()


// const buildOrderListItem = (order) => {

//     const interiors = getInteriors();

//     // Remember that the function you pass to find() must return true/false
//     const foundInterior = interiors.find(
//         (interior) => {
//             return interior.id === order.interiorId
//         }
//     )
//     const paint = getPaint()
//     const foundPaint = paint.find(
//         (paint) => {
//             return paint.id === order.paintId
//         }
//     )
//     const wheels = getWheels()
//     const foundWheels = wheels.find(
//         (wheels) => {
//             return wheels.id === order.wheelsId
//         }
//     )
//     const technology = getTechnology()
//     const foundTechnology = technology.find(
//         (technology) => {
//             return technology.id === order.technologyId
//         }
//     )


//     // const jewelryTypes = getJewelryTypes()

//     // const foundJewelryType = jewelryTypes.find(
//     //     (jewelryType) => {
//     //         return jewelryType.id === order.jewelryTypeId
//     //     }
//     // )

//     const totalCost = foundInterior.price + foundPaint.price + foundWheels.price + foundTechnology

//     const costString = totalCost.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD"
//     })
//     return `<li>
//              Order #${order.id} was placed on ${order.timestamp}, item costs ${costString}.`

// }

// export const Orders = () => {
//     /*
//         Can you explain why the state variable has to be inside
//         the component function for Orders, but not the others?
//     */
//     const orders = getOrders()

//     let html = "<ul>"

//     const listItems = orders.map((order) => buildOrderListItem(order))


//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

