const secondContainer = document.getElementById("secondContainer")
const title = document.getElementById("title")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addbtn = document.getElementById("add-btn")
let appointmentDetails = [{ name: "Mahadev", date: "09-03-2022", time: "12:45", star: false }, { name: "Saiteja", date: "09-03-2023", time: "12:30", star: false }]
// let appointmentDetails = []
let warning = document.getElementById("warning")
let starredBtnActive = false
const starredBtn = document.getElementById("starred")
render(appointmentDetails)
function render(details) {
    secondContainer.innerHTML = ""
    let s = ""
    for (let i = 0; i < details.length; i++) {
        s = `<div id="app-${i}" class="appointment">
                <h2 class="title">${details[i].name}</h2>
                <h3>Date: ${details[i].date}</h3>
                <h3>Time: ${details[i].time}</h3>
                <i id="star-${i}" onclick="star(this.id)" class="fa-regular fa-star star"></i>
                <i id="delete-${i}" onclick="delApp(this.id)" class="fa-solid fa-trash delete"></i>
            </div>`
        secondContainer.innerHTML += s
        if (details[i].star === true) {
            const starBtn = document.getElementById(`star-${i}`)
            starActive(starBtn)
        }
        else {
            const starBtn = document.getElementById(`star-${i}`)
            starFalse(starBtn)
        }
    }

}
addbtn.addEventListener("click", function () {
    if (title.value === "" || date.value === "" || time.value === "") {
        warning.textContent = "One of the field is Empty"
    }
    else {
        warning.textContent = ""
        let objDetails = {
            name: title.value,
            date: date.value,
            time: time.value,
            star: false
        }
        title.value = ""
        date.value = ""
        time.value = ""
        const rev = objDetails.date.split("-")
        newS = ""
        for (let i = rev.length - 1; i >= 0; i--) {
            if (i == 0) {
                newS += rev[i]
            }
            else {
                newS += rev[i] + "-"
            }
        }
        objDetails.date = newS
        appointmentDetails.push(objDetails)

    }
    render(appointmentDetails)
})

function star(id) {
    const starBtn = document.getElementById(id)
    const index = Number(id.charAt(id.length - 1))
    if (appointmentDetails[index].star === false) {
        appointmentDetails[index].star = true
        starActive(starBtn)
    }
    else {
        appointmentDetails[index].star = false
        starFalse(starBtn)
    }

}
function starActive(starBtn) {
    starBtn.style.color = "#e6ee00"
    starBtn.style.fontWeight = "900"
}
function starFalse(starBtn) {
    starBtn.style.color = "black"
    starBtn.style.fontWeight = "100"
}

starredBtn.addEventListener("click", function () {
    if (starredBtnActive === false) {
        starredBtnActive = true
        starredBtn.style.background = "#0059dd"
        starredBtn.style.color = "whitesmoke"
        let starredObj = []
        for (let i = 0; i < appointmentDetails.length; i++) {
            if (appointmentDetails[i].star === true) {
                starredObj.push(appointmentDetails[i])
            }
        }
        render(starredObj, starredBtnActive)
    }
    else {
        starredBtnActive = false
        starredBtn.style.background = "whitesmoke"
        starredBtn.style.color = "#0059dd"
        render(appointmentDetails, starredBtnActive)
    }
})

function delApp(id) {

    const index = Number(id.charAt(id.length - 1))
    console.log(index)
    appointmentDetails.splice(index, 1)
    console.log(appointmentDetails)
    render(appointmentDetails)

}

const deleteAll = document.getElementById("deleteAll")
deleteAll.addEventListener('click', function () {
    appointmentDetails = []
    render(appointmentDetails)
})
