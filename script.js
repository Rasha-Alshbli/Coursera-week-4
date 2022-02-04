var names = new Array();
names[0] = "Rasha";
names[1] = "John";
names[2] = "Jen";
names[3] = "jason";
names[4] = "paul";
names[5] = "Franc";
names[6] = "Lary";
names[7] = "Paulq";
names[8] = "Nola";
names[9] = "Joe";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
        console.log("Goodbye " + names[i]);
    }
    else {
        console.log("Hello " + names[i]);
    }
} 
