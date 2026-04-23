/*
import {calculate} from "./calculate.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync(); // Initialize prompt-sync

let cur_force = parseInt(prompt("Atual peso(kg): "));
let new_force = parseInt(prompt("Novo peso(kg): "));

let result = calculate(cur_force, new_force);
//let result = calculate(100, 25);
console.log("Número de roldanas necessárias: " + result);
*/
import { calculate } from "./calculate.js";

function calcular_roldanas() {
    const peso = parseFloat(document.getElementById("peso").value);
    const forca = parseFloat(document.getElementById("forca").value);

    let result = calculate(peso, forca);

    if (peso > 0 && forca > 0) {
        document.getElementById("resultado").textContent =
            `Número de roldanas necessárias: ${result}`;
    }
    else {
        document.getElementById("resultado").textContent =
            "Digite valores válidos!";
    }
}
document.getElementById("btnCalcular").addEventListener("click", calcular_roldanas);