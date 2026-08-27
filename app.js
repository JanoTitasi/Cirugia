document.getElementById("guardar").addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const cirugia = document.getElementById("cirugia").value;

    if (nombre === "" || edad === "" || cirugia === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    alert("Registro guardado correctamente.");

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("cirugia").value = "";

});
