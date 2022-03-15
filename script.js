const text1 = document.getElementById ("code1");
const text2 = document.getElementById ("code2");
const text3 = document.getElementById ("code3");

const weight1 = document.getElementById ("lb1");
const weight2 = document.getElementById("lb2");
const weight3 = document.getElementById ("lb3");


const error = document.getElementById("error");


const clothingCode = ["C101", "D101", "F101", "D101", "E101"];
const type = ["Cotton", "Denim", "Fur", "polyester", "leather"];
const price = ["1.20", "1.80", "3.65", "1.40", "1.30"];

let cArray = []; //sub total
let pArray = []; //

const btBill = document.getElementById("bill");
btBill.addEventListener ("click",btBillClick);

function btBillClick(event) {

   // console.log("Generate Bill");
    let clCode1 = text1.value;
    let clCode2 = text2.value;
    let clCode3 = text3.value;
    let clWeight1 = weight1.value;
    let clWeight2 = weight2.value;
    let clWeight3 = weight3.value;
    //let subtotal = [];

    let flg = 0;

    for (let i = 0; i < clothingCode.length; i++) {
        if (clCode1 === clothingCode[i]){
            flg = 1;
            //console.log(clCode1);
            //console.log(clothingCode[i]
            subtotal.push = (clWeight1 * price[i]);
            console.log(subtotal[0]);
        }
    }

    for (let i = 0; i < clothingCode.length; i++) {
        if (clCode2 === clothingCode[i]){
            flg = 1;
            subtotal.push = (clWeight2 * price[i]);
            console.log(subtotal);
        }
    }

    for (let i = 0; i < clothingCode.length; i++) {
        if (clCode3 === clothingCode[i]){
            flg = 1;
            subtotal.push = (clWeight3 * price[i]);
            console.log(subtotal);
        }
    }

    //console.log(subtotal);


    if (flg === 0) {
        error.innerHTML = "Error!";
    }
}

let calculate = (cArr,pArr) => {
    let sub = 0; //sub total
    let dry = 0; //dry total
    let total = 0;

    for (let i = 0; i < cArr.length; i++) {
        if (inputCode[i] == cArr[0]) {
            let num1 = parseInt (document.querySelector("lb").value);
            let sub = (num1 * pArr[0]);
            let dry = (num1 * 0.5)
        }

        if (inputCode[i] == cArr[1]) {
            let num2 = parseInt (document.querySelector("lb").value);
            let sub = (num2 * pArr[1]);
            let dry = (num2 * 0.5)

        }

        if (inputCode[i] == cArr[2]) {
            let num3 = parseInt (document.querySelector("lb").value);
            let sub = (num3 * pArr[2]);
            let dry = (num3 * 0.5)
        }
    }
    total = sub + dry;

    // console.log ('Sub total : $ ${sub}');
    alert('Customer Bill :');
    alert('Sub total : $ ${sub}');
    alert('Dryer Charge :$ ${sub}');
    alert('Customer Balance : ${total}');
}
