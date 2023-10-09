const closeBtn = document.getElementById("closePopup");
const openBtn = document.getElementById("openPopButton")
const continueBtn = document.getElementById("continue");
const saveBtn = document.getElementById("tableSaveBtn");
const deleteBtn = document.getElementById("tableDeleteBtn");
closeBtn.addEventListener("click", () => {
document.getElementById("popup").style.display = "none";  
});

openBtn.addEventListener("click", () => {
    document.getElementById("popup").style.display = "flex";  
    });

continueBtn.addEventListener("click", () => {

    document.getElementById("popup").style.display = "none"; 
    let column = document.getElementById("widthInput").value;
    let row = document.getElementById("heightInput").value; 
    let table = "<table>";
    for (let i = 0; i < row; i++) {

        table += `<tr id="row_${i}">`;
        for (let j = 0; j < column; j++) {
            if ((i + j) % 2 === 0) {
                table += `<td id="column_${i}_${j}" contenteditable='true' style='background-color: white;'></td>`;
            } else {
                table += `<td id="column_${i}_${j}" contenteditable='true' style='color: white;' ></td>`;
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    

    document.getElementById("tableContainer").innerHTML = table;
    document.getElementById("widthInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("buttonBox").style.display="flex";
    });



saveBtn.addEventListener("click", () => {
    console.log("Obsah byl úspěšně uložen")
});

deleteBtn.addEventListener("click", () => {

});


    
