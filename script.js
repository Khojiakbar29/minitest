function mainFunction () {
    let userName = '';
    function nameIdentify() {
        userName = prompt("Please, enter your name?", '');

        if (userName) {
            document.getElementById('username').innerHTML = `${userName}, nice to see you`;
        } else if (userName == null) {
            document.getElementById('username').innerHTML = `Please enter your name :)`;
        }
    }

    setTimeout(nameIdentify, 3000);

    if (userName) {
        let changeStatus = function() {
            document.getElementById('maintext').innerHTML = `Are you ready? ${userName}?`; 
        };

        setTimeout(changeStatus, 5000);
    }
        // function changeState() {
        //     let sec;
        //     document.getElementById('maintext').innerHTML = `Are you ready? ${userName}?`;
        //     function init() {
        //         sec = 0;
        //         setInterval(tick, 1000);
        //     }
        //     init();   
        //     function tick() {
        //         while(sec <= 5){
        //             sec++;
        //         }
        //         document.getElementById('username').innerHTML = `Test will start in ${sec}`;
        //     }
            
        // }
        // setTimeout(changeState, 7000);


}

mainFunction();