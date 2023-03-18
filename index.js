const secondContainer = document.getElementById("secondContainer")
const title = document.getElementById("title")
const date = document.getElementById("date")
const addbtn = document.getElementById("add-btn")
let eventTitleName = []
let eventDate = []
let warning = document.getElementById("warning")
function render() {
    addbtn.style.background = "blue"
    let name = title.value
    let sDate = date.value
    title.value = ''
    date.value = ""
    if (sDate === "") {
        warning.textContent = "Date can't be null"
    }
    else {
        warning.textContent = ""
        eventTitleName.push(name)
        const rev = sDate.split("-")
        newS = ""
        for (let i = rev.length - 1; i >= 0; i--) {
            if (i == 0) {
                newS += rev[i]
            }
            else {
                newS += rev[i] + "-"
            }
        }
        eventDate.push(newS)
        let s = ""
        for (let i = 0; i < eventDate.length; i++) {
            s += `<div id="${i}" class="appointment">
                <h2 class="title">${eventTitleName[i]}</h2>
                <h3>date: ${eventDate[i]}</h3>
            </div>`
        }
        secondContainer.innerHTML = s
    }

}
