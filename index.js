const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function getCharacters1() {
    let password1 = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber1 = Math.floor( Math.random() * characters.length )
        randomCharacter = characters[randomNumber1]
        password1 += randomCharacter
        }
        return password1
}

function getCharacters2() {
    let password2 = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber2 = Math.floor( Math.random() * characters.length )
        randomCharacter = characters[randomNumber2]
        password2 += randomCharacter
        }
        return password2
}

let passwordEl1 = document.getElementById("pw-1")
let passwordEl2 = document.getElementById("pw-2")

function generatePasswords() {
    passwordEl1.textContent = getCharacters1()
    passwordEl2.textContent = getCharacters2()
}
