// Question no 17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.Print your list to make sure you actually have an empty list at the end of your program.

// part 1

// let guestlist: string[] = ["duke", "doe", "farman", "joe","lorem","Milikian"]

// // console.log("sorry I have small table to dinner so i only invite two people for dinner")

//                         // part 2

// console.log(guestlist.pop(),"sorry i can't invite you at dinner")

// console.log(guestlist.pop(), "sorry i can't invite you at dinner")

// console.log(guestlist.pop(), "sorry i can't invite you at dinner")

// console.log(guestlist.pop(), "sorry i can't invite you at dinner")

//                             // part 3

// for(let guest of guestlist){
//     console.log(`${guest} you are still invited at dinner tonight`)
// };

//                             // part 4

// guestlist.pop()
// guestlist.pop()

// console.log(guestlist);