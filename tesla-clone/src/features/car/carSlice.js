import {createSlice} from "@reduxjs/toolkit"

const inititalState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    inititalState,
    reducer: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer