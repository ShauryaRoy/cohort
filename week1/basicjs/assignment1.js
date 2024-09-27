// Objects
function greet() {
    console.log(`hello ${user.name} and you are ${user.age}. Isn't that crazy?`)
}

let user = {
    name: "Shaurya",
    age: 20
}
greet()

///

function greet() {
    if (user.age > 18) {

        console.log(`hello ${user.gender === "female" ? "Mr" : "Mrs"} ${user.name} and you are ${user.age}.You can vote now.. Isn't that crazy?`)
    } else {
        console.log(`hello ${user.gender = "male" ? "Mr" : "Mrs"} ${user.name} and you are ${user.age}.You can't vote now.. Isn't that crazy?`)
    }
}

let user = {
    name: "Shaurya",
    age: 20,
    gender: "male"
}
greet()


//////

var user = [{
    name: "Shaurya",
    age: 20,
    gender: "male"
},
{
    name: "Tanisha",
    age: 25,
    gender: "female"
}, {
    name: "Good Shaurya",
    age: 12,
    gender: "male"
}]

function solve() {

    let arr = []
    for (i = 0; i < user.length; i++) {
        if (user[i].age > 18 && user[i].gender === "male") {
            arr.push(user[i])
        }
    }
    console.log(arr)
}
solve()