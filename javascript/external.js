





// welcome text box propt and display at top of page

function welcome(){
let a = "Please enter your name.";
let b = " Type your name here.";
user_name = window.prompt(a,b);
message = "<h1>Hello, welcome to my webpage, " + user_name +"!</h1>"
return message
} ;




var webmaps=
[
 ["Zillow" ,"https://www.Zillow.com" , "The map allows the user to utilize multiple search queries to find the home they are looking at. " ],
["The Hiking Project" , "https://www.hikingproject.com/" , "The primary purpose of the application it to highlight hiking trail systems and provide user data on trails." ]
];


function webmap_table ()
{
document.write ("<table width = 100%>");
for (var row=0; row < webmaps.length; row++)
{
document.write("<tr>");
for (var column=0; column < webmaps[0].length; column++);
{
  if (column<2){
    document.write ("<td>" + webmaps [row][column] + "</td>");
  }
    else  {
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td colspan='2'>" + webmaps [row][column] + "<p></td>");
  }
}
document.write("</tr>");
}
document.write("</table>");
}
 ;


// Copy right stamp
 function copyright()
 {

   // Creates Variable today, sets as date
   var today = new Date();
   // Creates Variable years sets the full year
   var year = today.getFullYear();
   // writes line of script plus calls function for the year variable
   document.writeln("Copyright &copy; " + year);

 } ;
