//Gobal Variables
let score = 0
let sonicSound1 = new Audio('Sounds/sonic-ring-sound-1.mp3');
let sonicSound2 = new Audio('Sounds/sonic-ring-sound-2.mp3');

//Question 1
let userInputQuestion1 = function() {
    let radios = document.getElementsByName('choice')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }
    
    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "Super Speed") {
        document.getElementById('card-1').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        enable++;
        return score

    //Incorrect
    } else {
        document.getElementById('card-1').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        enable++;
        return score
    }
}

//Question 2
let userInputQuestion2 = function () {
    let radios = document.getElementsByName('choice2')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "Dr Ivo Robotnik") {
        document.getElementById('card-2').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-2').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 3 
let userInputQuestion3 = function () {
    let radios = document.getElementsByName('choice3')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "No") {
        document.getElementById('card-3').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-3').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 4
let userInputQuestion4 = function () {
    let radios = document.getElementsByName('choice4')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "3 Stages") {
        document.getElementById('card-4').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-4').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 5
let userInputQuestion5 = function () {
    let radios = document.getElementsByName('choice5')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "No") {
        document.getElementById('card-5').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-5').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 6
let userInputQuestion6 = function () {
    let radios = document.getElementsByName('choice6')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "7 Zones") {
        document.getElementById('card-6').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    
    //Incorrect
    } else {
        document.getElementById('card-6').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 7
let userInputQuestion7 = function () {
    let radios = document.getElementsByName('choice7')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "Labyrinth Zone") {
        document.getElementById('card-7').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-7').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 8
let userInputQuestion8 = function () {
    let radios = document.getElementsByName('choice8')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "1991") {
        document.getElementById('card-8').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-8').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 9
let userInputQuestion9 = function () {
    let radios = document.getElementsByName('choice9')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')

    //Correct
    } else if (val == "6 Emeralds") {
        document.getElementById('card-9').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-9').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}

//Question 10
let userInputQuestion10 = function () {
    let radios = document.getElementsByName('choice10')
    let val = ""
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    //Empty
    if (val == "") {
        alert('please select a choice.')
    
    //Correct
    } else if (val == "2 Endings") {
        document.getElementById('card-10').style.backgroundImage = "url(Images/green-checker-pattern.jpg)";
        alert('Correct!')
        sonicSound1.play()
        score++;
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score

    //Incorrect
    } else {
        document.getElementById('card-10').style.backgroundImage = "url(Images/red-checker-pattern.jpg)";
        alert('Incorrect!')
        sonicSound2.play()
        let resultsContainer = document.getElementById('results')
        resultsContainer.innerHTML = `${score} out of 10 Questions`;
        return score
    }
}