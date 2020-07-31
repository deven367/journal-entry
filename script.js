authors_list = ['Winston Churchill', 'Mark Twain', 'Keval Chavda'];
quotes_list = ['We make a living by what we get, but we make a life by what we give.', 'Get your facts first, then you can distort them as you please.', 'Life will always surprise you, just try to learn to predict those surprises to avoid them.'];

changeQuotes();

function myFunction() {
  var date = document.getElementById("date").value;
  console.log(date);
  var entry = document.getElementById("textbox").value;
  console.log(entry);
  if (date == "")
    alert("Date missing!");
  else if(entry == ""){
    alert("Please make an entry!");
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

 function getRandomInt (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function changeQuotes() {

    // alert("QUOTES");
    var quoteText = $("#quote-text").innerHTML;
    var authorText = $("#author-text").innerHTML;
    // console.log(dayvalue);
    // var rand = Math.floor(Math.random() * 3);
    var rand = getRandomInt(0, 2);
    // var pre_val = parseInt($('#prev').val());
    // console.log("Pre: " + pre_val);
    // var new_val;
    // while((new_val = getRandomInt(0, 2)) == pre_val);
    // console.log(new_val);
    // $('#result').html('Events Today' + new_val);
    // $('#prev').val(new_val);
    //
    // var rand = new_val;
    $("#author-text").html("- " + authors_list[rand]);
    $("#quote-text").html(quotes_list[rand]);
    // $("#").innerHTML = quotes_list[rand];


    // else {
    //   val = Number(dayvalue) + 1;
    // }
    // document.getElementById(dayid).innerHTML = val;

 }

 // (function json() {
 //   var mydata = JSON.parse(quotes);
 //   console.log(mydata);
 // })();
