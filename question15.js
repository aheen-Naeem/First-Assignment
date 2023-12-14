"use strict";
// Question no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// part 1
let guestlist1 = ["doe", "joe", "lorem"];
let guestWhoCannotCome = "doe";
console.log(`${guestWhoCannotCome} can't join us at dinner`);
// part 2
guestlist1.splice(0, 1, "epsum");
// part 3
for (let guest of guestlist1) {
    console.log(`Asalam walikum ,${guest} you are invited to dinner tonight`);
}
;
