

      // input

      
      const bookTitle = document.getElementById('bookTitle')
      const Author = document.getElementById('Author')
      const Typ = document.getElementsByClassName('Typ')
      const price = document.getElementById('price')
      const reference = document.getElementById('reference')
      const nbrofpages = document.getElementById('nbrofpages')
      const Date = document.getElementById('Date')
      var lng =document.getElementById("lng")

      // errors

      const errorElementLanguage = document.getElementById('errorr1')
      const errorElementTitle = document.getElementById('errorr2')
      const errorElementAuthor = document.getElementById('errorr3')
      const errorElementType = document.getElementById('errorr4')
      const errorElementPrice = document.getElementById('errorr5')
      const errorElementreference = document.getElementById('errorr6')
      const errorElementnbrofpages = document.getElementById('errorr7')
      const errorElementDate = document.getElementById('errorr8')








        //   ----- Language-----:::::::::::::::::::::::::::::::::::

      form.addEventListener('submit', (e) => {
         if(lng.value == ""){
            errorElementLanguage.innerHTML="Choisit la langue de livre"
         }
 
         else{
            errorElementLanguage.innerHTML="bien"
            errorElementLanguage.style.color ="green";
         }
      })

        



 




       //   ----- Title -----  


      form.addEventListener('submit', (e) => {

         let messages = []
         if (bookTitle.value === '' || bookTitle.value === null) {
            messages.push('Saisit le titre de livre *')
         }
         
         

         if(bookTitle.value.length >= 30){
            messages.push('Le titre doit etre moins de 30 caractéres')
            
            errorElementTitle.style.color ="red";
         }


         if(messages.length > 0){
            e.preventDefault()
            errorElementTitle.innerText  = messages.join(', ')
         }
         
         else{
            errorElementTitle.innerHTML="bien"
            errorElementTitle.style.color ="green";
         }
      })











      

      // -------------- Author -----------



      form.addEventListener('submit', (e) => {

         let messages = []
         if (Author.value === '' || Author.value === null) {
            messages.push("Saisit le nom de l'auteur ")
         }
         if(Author.value.length >= 30){
            messages.push("Le nom de l'auteur ne doit pas contenir plus de 30 caracteres")
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementAuthor.innerText  = messages.join(', ')
         }
         else{
            errorElementAuthor.innerHTML="Bien"
            errorElementAuthor.style.color ="green";
         }

      })

      







      // -------- Type  ----------

      var types = document.getElementsByClassName("Typ")

      form.addEventListener('submit', (e) => {
         if (!(types[0].checked || types[1].checked || types[2].checked)){
            errorElementType.innerHTML="Saisit le type de livre *"

         }

         else{
            errorElementType.innerHTML="bien"
            errorElementType.style.color ="green";
         }

      })











      //  ---------------- price---------


      form.addEventListener('submit', (e) => {

         let messages = []


         if (price.value === '' || price.value === null || price.value<=0) {
            messages.push('Saisit le prix de livre*')
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementPrice.innerText  = messages.join(', ')
         }
         else {
            errorElementPrice.innerHTML =("bien");
            errorElementPrice.style.color ="green";
         }
      })











      //  ------------ --------------- reference--------------


      form.addEventListener('submit', (e) => {

         let messages = []
         if (reference.value === '' || reference.value === null) {
            messages.push('Saisit le code de reference  *')
         }

         if(messages.length > 0){
            e.preventDefault()
            errorElementreference.innerText  = messages.join(', ')
         }
         
      else {
         errorElementreference.innerHTML =("Bien");
         errorElementreference.style.color ="green";
      }

      })










   // =======================   cover   ==================



   form.addEventListener('submit', (e) => {

      let messages = []
      if (nbrofpages.value === '' || nbrofpages.value === null) {
         messages.push('Choisit le nombre de page *')
      }

      if(messages.length > 0){
         e.preventDefault()
         errorElementnbrofpages.innerText  = messages.join(', ')
      }
      else {
         errorElementnbrofpages.innerHTML =("Bien");
         errorElementnbrofpages.style.color ="green";
      }

   })












   

   // =======================   date   ==================



   form.addEventListener('submit', (e) => {
      if (Date.value == ""){
         errorElementDate.innerHTML =("Saisit la date de publication")
      }
      else {
         errorElementDate.innerHTML =("Bien");
         errorElementDate.style.color ="green";
      }


})

//;;;;;;;;;;;;;;;;;;;;; tableau insertion;;;;;;;;;;;;;;;;;;;;;;;;;;

var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
       
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    }


    //;;;;;;;;;;;;;;;;;;;;;recuperer les inputs;;;;;;;;;



function readFormData(){
   var formData = {};
   formData["lng"] = document.getElementById("lng").value;
   formData["bookTitle"] = document.getElementById("bookTitle").value;
   formData["Author"] = document.getElementById("Author").value;
   formData['Typ'] = document.querySelector('input[name="fav_language"]:checked').value;
   formData["price"] = document.getElementById("price").value;
   formData["reference"] = document.getElementById("reference").value;
   formData["nbrofpages"] = document.getElementById("nbrofpages").value;
   formData["Date"] = document.getElementById("Date").value;
   return formData;
}
//;;;;;;;;;;;;;;;;;;;;;;;Insertion des imputs;;;;;;;;;;;;;;;;;;;;;


function insertNewRecord(data){
   
       var table = document.getElementById("listt").getElementsByTagName('tbody')[0];
       var newRow = table.insertRow(table.length);

       var cell1 = newRow.insertCell(0);
       cell1.innerHTML = data.Language;

       var cell2 = newRow.insertCell(1);
       cell2.innerHTML = data.bookTitle;

       var cell3 = newRow.insertCell(2);
       cell3.innerHTML = data.Author;

       var cell4 = newRow.insertCell(3);
       cell4.innerHTML = data.Typ;

       var cell5 = newRow.insertCell(4);
       cell5.innerHTML = data.price;

       var cell6 = newRow.insertCell(5);
       cell6.innerHTML = data.reference;

       var cell7 = newRow.insertCell(6);
       cell7.innerHTML = data.nbrofpages;

       var cell8 = newRow.insertCell(7);
       cell8.innerHTML = data.Date;

       var cell10 = newRow.insertCell(8);
       cell10.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
       
}
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;modification des imputs;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('lng').value = selectedRow.cells[0].innerHTML;
    document.getElementById('bookTitle').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Author').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Typ').value = selectedRow.cells[3].innerHTML;
    document.getElementById('price').value = selectedRow.cells[4].innerHTML;
    document.getElementById('reference').value = selectedRow.cells[5].innerHTML;
    document.getElementById('nbrofpages').value = selectedRow.cells[6].innerHTML;
    document.getElementById('Date').value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.lng;
    selectedRow.cells[1].innerHTML = formData.bookTitle;
    selectedRow.cells[2].innerHTML = formData.Author;
    selectedRow.cells[3].innerHTML = formData.Typ;
    selectedRow.cells[4].innerHTML = formData.price;
    selectedRow.cells[5].innerHTML = formData.reference;
    selectedRow.cells[6].innerHTML = formData.nbrofpages;
    selectedRow.cells[7].innerHTML = formData.Date;
}

// Supprimer les imputs
function onDelete(td){
   if(confirm('Do you want to delete this record?')){
       row = td.parentElement.parentElement;
       document.getElementById('listt').deleteRow(row.rowIndex);
   }
   resetForm();
}



