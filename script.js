function mainFunction () {
    let userName = '';
    function nameIdentify() {
        userName = prompt("Please, enter your name?", '');

        if (userName) {
            document.getElementById('username').innerHTML = `${userName}, nice to see you`;
        } else if (userName == null || userName == '') {
            document.getElementById('username').innerHTML = `Please enter your name :)`;
        }
    }

    setTimeout(nameIdentify, 3000);

    if (userName != undefined) {
        let changeStatus = function() {
            document.getElementById('maintext').innerHTML = `Are you ready, ${userName}?`; 
        };

        setTimeout(changeStatus, 8000);

    }

    function changeState() {
        let sec = 10;
        let t;
        function tick() {
            sec-=1;
        }
        function add() {
            tick();
            document.getElementById('username').innerHTML = `Test will start in ${sec}`;
            timer();
        }
        function timer() {
            t = setTimeout(add, 1000);
            if (sec == 0) {
                clearTimeout(t);
            }
        }
        timer();
        
    }
    
    setTimeout(changeState, 7000);



}

mainFunction();