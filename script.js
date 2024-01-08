let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "yoyohappybhai",
    "email": "yoyohappybhai@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault() // when u submit the form then it by default reloads
    console.log("Clicked!")
    resultcont.innerHTML = `<img width="60"  src="images/loading.svg" alt="">`

    let key = "ema_live_hakPAYMDCelvKsHSdikLKGPlDjbS4qrLPEFbTpak"
    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()

    // to display in textual form
    let str = ``
    // 
    // for (item of Object.keys(result)) {
    //     console.log(item)
    // }

    for (key of Object.keys(result)) {
        //it checks if the value is blank then it removed that 
        if (result[key] !== "" && result[key] !== "") {

            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)

    resultcont.innerHTML = str
})



