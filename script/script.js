const nextPage = () => {
    event.preventDefault()
    let email = document.getElementById("enterEmail").value
    let password = document.getElementById("enterPassword").value
    if (email == "admin@user.com" && password == "123456") {
        document.getElementById("jsPage").style.visibility = "hidden";
        document.getElementById("loginPage").style.visibility = "hidden";
        document.getElementById("usernamePage").style.visibility = "visible";
        notify("Succesful Login", "success")
    }
    else {
        notify("Wrong Credential", "error")
    }
}
const usernameInHeader = () => {
    event.preventDefault()
    let userName = document.getElementById("fullName").value
    userName = userName.trim()
    if (userName.length < 3) {
        notify("Enter Full Neme", "error")
        return
    }
    let greet
    let date = new Date()
    date = date.getHours()
    if (date > 4 && date < 10) {
        greet = "Good Morning"
    }
    else if (date >= 10 && date < 14) {
        greet = "Good Noon"
    }
    else if (date >= 14 && date < 18) {
        greet = "Good Evening"
    }
    else {
        greet = "Good Night"
    }

    document.getElementById("jsPage").style.visibility = "visible";
    document.getElementById("jsPage").style.background = 'none';
    document.getElementById("loginPage").style.visibility = "hidden";
    document.getElementById("usernamePage").style.visibility = "hidden";
    let show = greet + " " + userName
    document.getElementById("headerName").innerHTML = '<span style="color:white;">' + show + '</span>'
}
let cities = [];
const printCities = () => {
    document.getElementById("output").innerHTML = " "
    for (var i = 0; i < cities.length; i++) {
        output.innerHTML += (i + 1) + ")" + cities[i] + "<br>"
        console.log(cities[i])
    }
    if (i == 0) {
        notify("NO city is added yet", "error")
        document.getElementById("output").innerHTML = '<span style="color:red; font-size:28px;">No City is Added Yet</span> '
    }
}
const addCities = () => {
    let Original = document.getElementById("inputForCities").value
    if (Original.length < 3) {
        notify("Enter complete Name", "error")
        return
    }
    let value1 = Original.slice(0, 1).toUpperCase();
    let value2 = Original.slice(1).toLowerCase();
    let valueOriginal = value1 + value2
    if (!valueOriginal) {
        notify("Enter City name", "error")
        return
    }
    for (let z = 0; z < cities.length; z++) {
        if (valueOriginal == cities[z]) {
            document.getElementById("output").innerHTML = 'The city <span style="color:red; font-size:28px;">"' + valueOriginal + '"</span> is already in list'
            return
        }
    }
    cities.push(valueOriginal)
    notify("New City Added", "success")
    document.getElementById("output").innerHTML = 'The city <span style="color:green; font-size:28px;">"' + valueOriginal + '"</span> is successfully added in list'

}
const notify = (msg, type) => {
    let color = "black"
    switch (type) {
        case "success":
            color = "linear-gradient(to right,#82CD47,#379237)"
            break
        case "error":
            color = "linear-gradient(to right,#E21818,#EA5455)"
            break
        default:
            color = color
    }
    Toastify({
        text: msg,
        duration: 3000,
        colse: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: color, },
    }).showToast();
}
const clear1=()=>{
    document.getElementById("inputForCities").value=""
}