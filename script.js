function myFunction() {
  var date = document.getElementById("date").value;
  console.log(date);
  var entry = document.getElementById("entry").value;
  console.log(entry);
  if (date == "" || entry == ""){
    alert("Required field missing");
  }
  else{
    let data =
    'Date: ' + date + '\n' + entry;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = ''+ date + '.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
    alert('Entry made successfully!');
  }
  // alert("Hello");
}
function WriteToFile(passForm) {
    var fso = CreateObject("Scripting.FileSystemObject");
    var s   = fso.CreateTextFile("F:/Entries/"+ date + ".txt", True);
    var firstName = document.getElementById('date').value;
    var lastName  = document.getElementById('entry').value;
    s.writeline("Date :" + firstName);
    s.writeline("Entry :" + lastName);
    s.writeline("-----------------------------");
    s.Close();
 }
