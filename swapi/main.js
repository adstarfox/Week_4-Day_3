// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const button = document.querySelector(`#residentButton`)
const resContainer = document.querySelector(`#residentsContainer`)
const main = document.querySelector(`main`)

const logButton = evt => {
    // console.log(`button clicked`)
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`)
        .then(response => {
            // let {[0]: id} = response.data.results
            let {residents} = response.data.results[0]
            resContainer.innerHTML = ``

            residents.forEach((obj) => {
                axios.get(obj)
                    .then(response => {
                        let {name} = response.data
                        let heading = document.createElement(`h2`)
                        heading.textContent = name
                        resContainer.appendChild(heading)
                    })
                 .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
}

button.addEventListener(`click`, logButton)