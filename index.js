/* Do While Loppis also useful for when we always want to execute a block of code at least once, but still have some logic in place to stop after some condition is met.

Challenge.

1/ write a 'do while loop' that iterates through the usernames,and for each username logs a valid HTML paragraph tag to the console containing only the LAST username (e.g <p> username </p>) 

Requirement.

1/ the output must match exactly, and only the last username must be included.
*/

// iterate through the Array
let usernames = ["nicky", "zara", "seb", "has", "lieh", "stacy", "sara", "lisa", "nancy", "joey"];

let i = usernames.length -1 
// We could access the 2nd or 3rd and so on..from last item by 'length -1 -1 -1'

do {
  console.log (`<p>${usernames[i]} </p>`)

  i++;
  

} 
while (i < usernames.length);