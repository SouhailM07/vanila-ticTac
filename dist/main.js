// variables
let button = document.querySelectorAll('#n1');
let header = document.querySelector('header');
var turn = 'x';
let container = document.querySelector('.container');
// console.log(container.children)
button.forEach(function (e) {
    e.addEventListener('click', function () {
        if (e.textContent.length === 0) {
            e.textContent = turn;
            if (turn == 'x') {
                turn = 'o';
            }
            else if (turn == 'o') {
                turn = 'x';
            }
            header.textContent = `it,s ${turn} turn`;
            let a1 = [n1, n2, n3];
            let m1 = a1.every(function (e) {
                return e == 'x' ? true : false;
            });
            console.log(m1);
        }
    });
});
let n1 = document.querySelector('.n-1'), n2 = document.querySelector('.n-2'), n3 = document.querySelector('.n-3'), n4 = document.querySelector('.n-4'), n5 = document.querySelector('.n-5'), n6 = document.querySelector('.n-6'), n7 = document.querySelector('.n-7'), n8 = document.querySelector('.n-8'), n9 = document.querySelector('.n-9');
if(n1.textContent=='x'&&n2.textContent=='x'&&n3.textContent=='x'){
    alert('x won')
}
