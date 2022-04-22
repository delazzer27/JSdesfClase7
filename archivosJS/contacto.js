const formulario = document.querySelector("form")
const boton = document.querySelector (".boton");
const input = document.querySelectorAll ("input");

validarInput = () => {
    if (input.value == "") {
        input.className = "vacio";
    } 
    else {
        input.className = "validado";
    }
}

input.addEventListener ("input", validarInput)
boton.onclick = (e) => {
    validarInput ();
    e.preventDefault ();  
    alert ("Se envío el formulario correctamente");
    formulario.submit();

}

// const datosFormNombre = document.querySelector("#inputName");
// datosFormNombre.onchange = () => {
//     console.log (datosFormNombre.value);
// }
// const datosFormTel = document.querySelector("#inputTel");
// datosFormTel.onchange = () => {
//     console.log (datosFormTel.value);
// }
// const datosFormMail = document.querySelector("#inputEmail");
// datosFormMail.onchange = () => {
//     console.log (datosFormMail.value);
// }