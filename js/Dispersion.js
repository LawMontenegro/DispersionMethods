class Hashing {
    method;
    numBits;
    lengtharray;
    hashingKey;
    numHashing;


    constructor(method, keys, numBits, lengtharray, numGroups) {
        this.method = method;
        this.key = keys;
        this.numBits = numBits;
        this.lengtharray = lengtharray;
        this.numGroups = numGroups;
        let num = this.key;

    }
    selectMethod(method) {
        switch (method) {
            case "division":
                this.division(this.key, this.lengtharray);
                break;

            case "midsquare":
                this.midsquare(this.key, this.numBits);
                break;

            case "folding":
                this.folding(this.key, this.numGroups);
                break;

            case "transformation":
                this.transformation(key, numBase, lengtharray);
                break;

            default:
                break;
        }

    }

    division(key, lengtharray) {
        let num = key % lengtharray;
        console.log(num);
        return num;

    }

    midsquare(key, numCentral) {
        let num = (key**2);
        num = num.toString(2);
        console.log(num);
        numCentral = num.substr(center(num) - ((numCentral / 2)-1), numCentral);
        num = Number.parseInt(numCentral, 2);
        console.log(num);
        return num;
        //this.lengtharray = 2 ** (this.numBits);
    }
    folding(key, numGroups) {
        let num = key.toString(2);
        console.log(num);
        //var aux = reverse(num);
        let stack = new Stack();
        let queue = new Queue();
        let numArray = 0;
        console.log("groups " + numGroups);
        /*
        while(num.length>0){
            stack.push(String(num).substr(-4));
            String(num).substr(0 , num.length-4 >= 0 ? num.length-4 : 0);
        }
        */
        num = num.split("");
        //console.log(num);
        while (num.length > 0) {
            let temp = "";
            for (let i = 0; i < numGroups; i++) {
                console.log(num);
                if (num.length > 0) {
                    temp += String(num.pop());
                }
            }
            queue.enqueue(temp.split("").reverse().join(""));
        }
        console.log(queue);
        while (!queue.isEmpty()) {
            num = queue.dequeue();
            num = Number.parseInt(num, 2);
            numArray ^= num;
            console.log(numArray);
        }
        return numArray;
    }
    transformation(num, numBase, lengtharray) {
        num = num.toString(numBase);
        num =num.split("");
        for(let i=0; i< num.length;i++){
            num[i] = num[i].toString(16);
            num[i] = parseInt(num[i], 16);
            num[i] = num[i].toString(2);
            console.log(num);
        }
        num = num.join('');
        console.log(num);
        num = Number.parseInt(num, 2);
        console.log("cambio  a decimal");
        console.log(num);
        let numHashing = num % lengtharray;
        console.log(numHashing);
        return numHashing;
    }

}

class ListNode {
    data;
    next;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {

    head;

    constructor() {
        this.head = null;
    }

    enqueue(data) {
        var newNode = new ListNode(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let nodeParent = this.findTail();
            nodeParent.next = newNode;
        }
    }

    findTail() {
        let pivot = this.head;
        while (pivot.next != null) {
            pivot = pivot.next;
        }
        return pivot;
    }

    dequeue() {

        var removed = this.head;
        var next = this.head.next;

        this.head = next;
        return removed.data;
    }

    isEmpty() {
        return this.head == null;
    }
}

class Stack {

    head;

    constructor() {
        this.head = null;
    }

    push(data) {

        if (this.head != null) {
            var newNode = new ListNode(data);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var newNode = new ListNode(data);
            this.head = newNode;
        }
    }

    pop() {

        var removed = this.head;
        var next = this.head.next;

        this.head = next;
        return removed.data;
    }

    isEmpty() {
        return this.head == null;
    }
}


function center(num) {//
    let center;
    if (num % 2 == 0) {
        console.log("impar " + num.length);
        return center = Math.floor(num.length / 2);

    } else {
        console.log("par " + num.length);
        return center = Math.floor((num.length / 2) - 1);
    }
}
function esPrimo(key) {
    // Casos especiales
    if (key == 0 || key == 1 || key == 4) return false;
    for (let x = 2; x < key / 2; x++) {
        if (key % x == 0) return false;
    }
    return true;

}

let tree;

let hash = new Hashing();
$("#insertKey").attr("readonly", true);
$("#insertLenght").attr("readonly", true);
$("#insertCenterBits").attr("readonly", true);
$("#insertGroup").attr("readonly", true);
$("#insertBase").attr("readonly", true);
$("#insertKey").attr("disabled", true);

function initMethod() {
    //hash.selectMethod($('input:radio[name=metodos]:checked').val());
    switch ($('input:radio[name=metodos]:checked').val()) {
        case "division":
            $("#insertKey").attr("readonly", false);
            $("#insertLenght").attr("readonly", false);

            $("#insertCenterBits").attr("readonly", true);
            $("#insertGroup").attr("readonly", true);
            $("#insertBase").attr("readonly", true);
            break;

        case "midsquare":
            $("#insertKey").attr("readonly", false);
            $("#insertCenterBits").attr("readonly", false);

            $("#insertLenght").attr("readonly", true);
            $("#insertGroup").attr("readonly", true);
            $("#insertBase").attr("readonly", true);
            break;

        case "folding":
            $("#insertKey").attr("readonly", false);
            $("#insertGroup").attr("readonly", false);

            $("#insertLenght").attr("readonly", true);
            $("#insertCenterBits").attr("readonly", true);
            $("#insertBase").attr("readonly", true);
            break;

        case "transformation":
            $("#insertKey").attr("readonly", false);
            $("#insertBase").attr("readonly", false);
            $("#insertLenght").attr("readonly", false);


            $("#insertCenterBits").attr("readonly", true);
            $("#insertGroup").attr("readonly", true);
            break;

        default:
            break;
    }
    $("#insertKey").attr("disabled", false);
}
function start() {
    let res;
    switch ($('input:radio[name=metodos]:checked').val()) {
        case "division":
            if ($("#insertKey").val() != ""  && $("#insertLenght").val() != "") {
                if((esPrimo($("#insertLenght").val()))){
                    res = hash.division(parseInt($("#insertKey").val()), parseInt($("#insertLenght").val()));
                }else{
                    alert('El tamaño del arreglo deben ser un numero PRIMO');
            }                
            } else {
                alert('Todos los datos deben estar digitados');
            }
            break;

        case "midsquare":
            if ($("#insertKey").val() != "" && $("#insertCenterBits").val() != "") {
                res = hash.midsquare(parseInt($("#insertKey").val()), parseInt($("#insertCenterBits").val()));
            } else {
                alert('Todos los datos deben estar digitados o la llave debe ser mayor al numero de bits');
            }
            break;

        case "folding":
            if ($("#insertKey").val() != "" && $("#insertGroup").val() != "") {
                res = hash.folding(parseInt($("#insertKey").val()), parseInt($("#insertGroup").val()));
            } else {
                alert('Todos los datos deben estar digitados');
            }
            break;

        case "transformation":
            if ($("#insertKey").val() != "" && $("#insertBase").val() != "" && $("#insertLenght").val() != "") {
                if($("#insertBase").val()<=16){
                    res = hash.transformation(parseInt($("#insertKey").val()), parseInt($("#insertBase").val()),  parseInt($("#insertLenght").val()));
                }else{
                    alert('La base debe ser menor a 16');
                }
                
            } else {
                alert('Todos los datos deben estar digitados');
            }
            break;

        default:
            break;

    }
    $("#responseData").html(res);
    //console.log($('input:radio[name=metodos]:checked').val());
}


//hash.transformation(10,2,197);
//hash.midsquare(1522756,6);
//(hash.division(1234,13);
