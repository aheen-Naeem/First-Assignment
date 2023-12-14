"use strict";
// Question no 16
// More Guests: You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// part 1
let guestlist2 = ["doe", "joe", "lorem"];
console.log("i found a bigger dinner table");
// part 2
guestlist2.unshift("duke");
// part 3
guestlist2.splice(2, 0, "farman");
guestlist2.push("Milikian");
for (let guest of guestlist2) {
    console.log(`${guest} You are invited to dinner tonight`);
}
;
