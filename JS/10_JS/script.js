<<<<<<< HEAD
function subtract (a,b) {
    console.log(a-b);
}

subtract(8,5);

function multiply (a,b) {
    console.log(a*b)
}

multiply (4,3)

function supercalculation (a,b) {
    console.log((a+b)/2*a);
}

supercalculation(5,6)

function printEasterDate(J) {
N = J - 1900;
A = N % 19;
B = (7*A + 1) / 19;
M = (11*A + 4 - B) % 29;
Q = N/4
W = (N*Q*31-M) % 7;
P = 25-M-W;
P = Math.round(P)
if (P>0) {
    console.log("Ostersonntag ist der " + P + ". April");
}
else  {
    console.log("Ostersonntag ist der " + (P+31) + ". März");
}
}

=======
function subtract (a,b) {
    console.log(a-b);
}

subtract(8,5);

function multiply (a,b) {
    console.log(a*b)
}

multiply (4,3)

function supercalculation (a,b) {
    console.log((a+b)/2*a);
}

supercalculation(5,6)

function printEasterDate(J) {
N = J - 1900;
A = N % 19;
B = (7*A + 1) / 19;
M = (11*A + 4 - B) % 29;
Q = N/4
W = (N*Q*31-M) % 7;
P = 25-M-W;
P = Math.round(P)
if (P>0) {
    console.log("Ostersonntag ist der " + P + ". April");
}
else  {
    console.log("Ostersonntag ist der " + (P+31) + ". März");
}
}

>>>>>>> 693522f8b9d2e458596aede2e68418c933eeb328
printEasterDate(2023)