let addNumber;
let index = 0;

// create new array for each circle

const Array = function () {
    this.tab = [];
}

Array.prototype.addNumber = function (tabLength) {
    for (let i = 0; i <= tabLength; i++) {
        this.tab.push(i);
    }
}

// circle One

const circleOne = new Array()
circleOne.addNumber(50)

// circle Two

const circleTwo = new Array()
circleTwo.addNumber(35)

// circle Three

const circleThree = new Array()
circleThree.addNumber(80)

//----------------------------------------

const letCount = () => {
    let numberOne = document.querySelector('.circle1');
    let numberTwo = document.querySelector('.circle2');
    let numberThree = document.querySelector('.circle3');
    if (index < circleOne.tab.length) {
        numberOne.innerHTML = circleOne.tab[index];
        index++
    }

    if (index < circleTwo.tab.length) {
        numberTwo.innerHTML = circleTwo.tab[index];
        index++
    }
    if (index < circleThree.tab.length) {
        numberThree.innerHTML = circleThree.tab[index];
        index++
    }
}


function addInterval(e) {
    if (e.target.documentElement.scrollTop > 100) {
        addNumber = setInterval(letCount, 200)
    }

}

window.addEventListener('scroll', addInterval);