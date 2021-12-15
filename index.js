//1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

//2) Create an unordered list using JavaScript and save it in a variable
let newUl = document.createElement("ul")
let ulParent = document.getElementsByClassName('js-list-container')

ulParent[0].appendChild(newUl)

let newUlNode = document.getElementsByTagName("ul")
//3) Cycle the array and create a list-item via JavaScript for every element
for (let i = 0; i < genres.length; i++) {
    let newLi = document.createElement("li")
    newLi.innerText = genres[i]    
    newUlNode[0].appendChild(newLi)
}


//1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text

let colorPickerContainer = document.getElementById('color-input')
colorPickerContainer.innerHTML = " <input type='color' id='picker1'> <label for='picker1'> Set background color </label> <br> <input type='color' id='picker2'> <label for='picker2'> Set text color </label> <br> <button id='button1'> Apply Colors </button> "

//2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"

let listItems = document.getElementsByTagName('li')

//3) Grab the inputs references via DOM manipulation and save them in variables

let picker1 = document.getElementById('picker1')
let picker2 = document.getElementById('picker2')

//4) Create a function and attach it to the "Apply Colors" button click event

const applyColors = function () {
    for (let listItem of listItems) {
        console.log(listItem)
        listItem.style.backgroundColor = picker1.value
        listItem.style.color = picker2.value
        

    }
}

let button1 = document.getElementById('button1')
button1.addEventListener('click', applyColors)

//5) Cycle listItems inside the function. Verify that the function and the loop work by logging 
//in the console each item from the loop every time the button gets clicked

//6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.