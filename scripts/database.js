/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    interior: [
        { id: 1, style: "Beige Fabric", price: 5000 },
        { id: 2, style: "Charcoal Fabric", price: 7100 },
        { id: 3, style: "White Leather", price: 9650 },
        { id: 4, style: "Black Leather", price: 9650 }
    ],
    paint: [
        { id: 1, paint: "Silver", price: 405 },
        { id: 2, paint: "Midnight Blue", price: 782 },
        { id: 3, paint: "Firebrick Red", price: 1470 },
        { id: 4, paint: "Spring Green", price: 1997 }
    ],
    technology: [
        { id: 1, technology: "Basic Package -basic sound system", price: 106 },
        { id: 2, technology: "Navigation Package- includes integrated navigation controls", price: 321.4 },
        { id: 3, technology: "Visibility Package- includes side and reat cameras", price: 558.9 },
        { id: 4, technology: "Ultra Package -includes navigation and visibility packages", price: 795.45 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 43.42 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 59.4 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 81.9 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 95.45 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}

export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}
export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}
export const getPaint = () => {
    return database.paint.map(paint => ({ ...paint }))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

