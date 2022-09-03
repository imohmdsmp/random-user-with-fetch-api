async function users() {
    await fetch('json/users.json')
        .then(function (response) {
            response.json()
                .then(function (data) {
                    let error = document.getElementsByClassName('error')[0]
                    let _outp = document.getElementById('output')
                    let _inpEmail = document.getElementById('email').value
                    let _inpPass = document.getElementById('pass').value
                    error.style.display = 'block'
                    _outp.innerHTML = '<div></div>'
                    for (i = 0; i < data.results.length; i++) {
                        let _email = data.results[i].email
                        let _pass = data.results[i].login.password

                        if ((_inpEmail == _email) && (_inpPass == _pass)) {
                            let userInfo = `
                        <div class='parent-user'>
                        <figure>
                            <img src='${data.results[i].picture.large}'>
                            </figure>
                            <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
                            <p><b>Tel:</b> ${data.results[i].phone}</p>
                            <p><b>Date of Birth:</b> ${data.results[i].registered.date}</p>
                            <p><b>Nationality:</b> ${data.results[i].location.city} - ${data.results[i].location.country} - ${data.results[i].location.state}</p>
                            <p><b>Gender:</b> ${data.results[i].gender}</p>
                            <address><b>Address:</b> ${data.results[i].location.street.name} ${data.results[i].location.postcode}</address>
                            
                            </div>
                            `
                            _outp.innerHTML = userInfo
                            error.style.display = 'none'
                        }
                    }
                })
        })
}

function enter(e){
    if(e.which == 13){
        users()
    }
}