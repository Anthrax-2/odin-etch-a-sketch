"use strict"

const body = document.querySelector("body")
const canvasContainer = document.createElement("div")
canvasContainer.classList.add("canvas-container")
body.appendChild(canvasContainer)

const colorPicker = document.querySelector("#color")

function createCanvas(side = 16) {
    if (side > 100 || side <= 0) {
        throw new Error("Input must be less than 100 and more than 0")
    }

    if (canvasContainer.hasChildNodes()) {
        canvasContainer.removeChild(canvasContainer.firstChild)
    }

    const canvas = document.createElement("div")
    canvas.classList.add("canvas")

    canvas.style.height = "550px"
    canvas.style.width = "550px"

    canvasContainer.appendChild(canvas)

    const pSide = parseInt(canvas.style.width) / side

    for (let i = 0; i < side * side; i++) {
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")

        pixel.style.height = `${pSide}px`
        pixel.style.width = `${pSide}px`

        canvas.appendChild(pixel)
    }

    draw()
}

createCanvas(10)

function draw() {

    const canvasPixels = document.querySelectorAll(".pixel")
    canvasPixels.forEach((canvasPixel) => {
        canvasPixel.addEventListener("mouseenter", () => {
            canvasPixel.style.backgroundColor = colorPicker.value
        })
    })
}