var getRand = function(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

var app = document.getElementById('app');

var dice6 = ['number_1', 'number_2', 'number_3', 'number_4', 'number_5', 'number_6'];

var zero = ['number_0'];

var getDice = function(arrDice) {
    DOMTokenList.prototype.remove.apply(app.classList, ['number_0'].concat(arrDice));
    app.classList.add(arrDice[getRand(0, arrDice.length - 1)]);
}

document.onmousedown = function(e) {
    e.preventDefault();
    document.body.style.cursor = '-webkit-grabbing';
    if (!app.classList.contains(zero)) {
        app.classList.add(zero);
    }
}

document.onmouseup = function(e) {
    e.preventDefault();
    document.body.style.cursor = '';
    getDice(dice6);  
};
	
document.body.addEventListener('contextmenu', function(e) { 
	 e.preventDefault();
	 return false;
});
