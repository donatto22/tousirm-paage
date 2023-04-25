let toggles = document.getElementsByClassName('toggle')
let contentDiv = document.getElementsByClassName('content')
let icons = document.getElementsByClassName('icon')

for(let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px"
            toggles[i].style.color = "#00BFA6"
            toggles[i].style.fontWeight = "bold"
            icons[i].classList.remove('bi-plus')
            icons[i].classList.add('bi-dash')
        }

        else {
            contentDiv[i].style.height = "0px"
            toggles[i].style.color = ""
            toggles[i].style.fontWeight = ""
            icons[i].classList.remove('bi-dash')
            icons[i].classList.add('bi-plus')
        }

        for(let j = 0; j < contentDiv.length; j++) {
            if(j !== i) {
                contentDiv[j].style.height = "0px"
                toggles[j].style.color = ""
                toggles[j].style.fontWeight = ""
                icons[j].classList.remove('bi-dash')
                icons[j].classList.add('bi-plus')
            }
        }
    })
}