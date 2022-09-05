async function users(self) {
    await fetch('json/users.json')
        .then(function (response) {
            response.json().then(function (data) {
                let _outp = document.getElementById('output')
                let _inpEmail = document.getElementById('email').value
                let _inpPass = document.getElementById('pass').value
                document.getElementById('error').style.top = '-35%'
                setTimeout(() => {
                    document.getElementById('check').style.top = '-50%'
                    document.getElementById('spinner').style.cssText = 'top:140%;display:none'
                    document.getElementById('error').style.top = '50%'
                }, 2000);
                for (i = 0; i < data.results.length; i++) {
                    let _email = data.results[i].email
                    let _pass = data.results[i].login.password



                    document.getElementById('sign-in').style.top = '120%'
                    document.getElementById('spinner').style.cssText = 'top:36%; animation: rotateSpin infinite 20s ease;'
                    if ((_inpEmail == _email) && (_inpPass == _pass)) {
                        let userInfo = `
                        <div class='parent-user'>
                        <figure>
                            <img src='${data.results[i].picture.large}'>
                            </figure>
                            <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
                            <p><i class='bi-telephone-fill'></i><b>Tel: </b> ${data.results[i].phone}</p>
                            <p><i class='bi-calendar2-date-fill'></i><b>Date of Birth: </b> ${data.results[i].registered.date}</p>
                            <p><i class='bi-flag-fill'></i><b>Nationality: </b> ${data.results[i].location.city} - ${data.results[i].location.country} - ${data.results[i].location.state}</p>
                            <p><i class='bi-people-fill'></i><b>Gender: </b> ${data.results[i].gender}</p>
                            <address><i class='bi-door-open-fill'></i><b>Address: </b> ${data.results[i].location.street.name} ${data.results[i].location.postcode}</address>
                            
                            </div>
                            `


                        // button animation
                        setTimeout(() => {
                            document.getElementById('check').style.top = '50%'
                            document.getElementById('spinner').style.cssText = 'top:140%;display:none'
                            document.getElementById('error').style.top = '-35%'
                        }, 2000);

                        setTimeout(() => {
                            document.querySelectorAll('main > section > div:nth-of-type(2)')[0].style.right = '330px';
                            document.querySelectorAll('main > section > div:nth-of-type(3)')[0].style.left = '230px'
                        }, 3000);

                        setTimeout(() => {
                            _outp.style.transform = 'translateX(150px)'
                        }, 3500);

                        setTimeout(() => {
                            document.querySelectorAll('#output h2')[0].style.transform = 'translateY(-200px)'
                            document.querySelectorAll('#output > figure')[0].style.transform = 'translate(-50%, -800px)'
                            document.getElementsByClassName('user-info')[0].innerHTML = userInfo
                            document.getElementsByClassName('user-info')[0].style.cssText = 'transform: translate(-50%, -43%)'
                            document.getElementsByClassName('bg-users')[0].style.transform = 'scale(1)'
                            document.getElementsByClassName('sign-in-again')[0].style.top = '25px'
                        }, 4000);
                    }



                }
            })
        })
}




function enter(e) {
    if (e.which == 13) {
        users()
    }
}

let _inp = document.getElementsByTagName('input')
for (m = 0; m < _inp.length; m++) {
    _inp[m].addEventListener('click', (event) => {
        event.target.previousElementSibling.style.transform = 'translatey(-35px)'
        event.target.style.borderColor = '#3e66ff'
    })
}


document.getElementsByClassName('open')[0].addEventListener('click', () => {
    document.getElementsByClassName('bi-chevron-right')[0].style.transform = 'scale(1)'
    if (document.getElementsByTagName('aside')[0].style.left != '0px') {
        document.getElementsByTagName('aside')[0].style.left = '0px'
        document.getElementsByClassName('bi-chevron-right')[0].style.transform = 'scale(-1)'
    } else {
        document.getElementsByTagName('aside')[0].style.left = '-290px'
    }

})

