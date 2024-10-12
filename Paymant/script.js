// script.js
document.getElementById('fillUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const name = document.getElementById('name').value;
    const Flatno = document.getElementById('Flat no.') 
    const Date = document.getElementById('Date').value;
    const payment = document.getElementById('pay').value;

    
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add text to the PDF
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Flat no.: ${number}`, 10, 20);
    doc.text(`Date: ${Date}`, 10, 40);
    doc.text(`Comments:`, 10, 50);
     doc.text(`payment:`, 10, 60);

    // Save the PDF
    doc.save('Fill-Up-Sheet.pdf');
      
});

document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault(); 
  document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
})





 
