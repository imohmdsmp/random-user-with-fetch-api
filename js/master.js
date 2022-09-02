async function users() {
    const xhttp = await fetch('https://randomuser.me/api/?results=50')
    let data = await xhttp.json()
    let error = document.getElementsByClassName('error')[0]
    let _outp = document.getElementById('output')
    let _inpEmail = document.getElementById('email').value
    let _inpPass = document.getElementById('pass').value
    error.style.display = 'block'
    _outp.innerHTML = '<div></div>'

    data.then()
    for (i = 0; i < data.results.length; i++) {
        let _email = data.results[i].email
        let _pass = data.results[i].login.password

        if ((_inpEmail == _email) && (_inpPass == _pass)) {
            let userInfo = `
                <div>
                    <img src='${data.results[i].picture.large}'>
                    <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
                    <p>${data.results[i].phone}</p>
                    <p>${data.results[i].registered.date} ${data.results[i].registered.age}</p>
                    <p>${data.results[i].location.city} ${data.results[i].location.country} ${data.results[i].location.state}</p>
                    <p>${data.results[i].gender}</p>
                    <p>${data.results[i].location.street.name} ${data.results[i].location.postcode}</p>
                    
                    </div>
                    `
            _outp.innerHTML = userInfo
            error.style.display = 'none'
        }
    }
}