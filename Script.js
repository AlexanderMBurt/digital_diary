let Titles = [];
let Bodies = [];

//stops existing data from being saved as one item in local storage
window.onload = () => {

var Titles2 = JSON.parse(localStorage.getItem("1Titles"));
var Bodies2 = JSON.parse(localStorage.getItem("2Bodies"));

if (Titles2 !== null || Bodies2 !== null) {

for (let i = 0; i < Titles2.length; i++) {
    Titles.push(Titles2[i]);
    Bodies.push(Bodies2[i]);
        }
    }
}

//displays recent items on the index page
function Display() {

    const SavedCards = document.getElementById('grid1');
    const div = document.getElementById('example')

    var Titles3 = JSON.parse(localStorage.getItem("1Titles"));
    var Bodies3 = JSON.parse(localStorage.getItem("2Bodies"));

     if (Titles3.length > 4) {

        const Titles4 = Titles3.slice(0, 5);
        const Bodies4 = Bodies3.slice(0, 5);

        for (let x = 0; x < 5; x++) {

            const div = document.getElementById('example')
            SavedCards.removeChild(div)

            const div2 = document.createElement('div');
            div2.classList = 'box';

            const h3_2 = document.createElement('h3');
            h3_2.textContent = Titles4[x];

            const p2 = document.createElement('p');
            p2.textContent = Bodies4[x];

            SavedCards.appendChild(div2);
            div2.appendChild(h3_2);
            div2.appendChild(p2);
            
        }
    } 
}

//displays cards below the text input so they can be saved to local storage
function CreateCard() {
       
            const title = document.getElementById('title_in').value;
            const main = document.getElementById('main_in').value;
            
            if (title !== '' && main !== '') {

                const cards = document.getElementById('grid2');

                const div = document.createElement('div');
                div.classList = 'box';

                const h3 = document.createElement('h3');
                h3.textContent = title;

                const p = document.createElement('p');
                p.textContent = main;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('RemoveButton');
                removeButton.onclick = () => cards.removeChild(div);

                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save';
                saveButton.classList.add('SaveButton');

                saveButton.onclick = () => {
                Titles.unshift(h3.textContent);
                Bodies.unshift(p.textContent);
                localStorage.setItem("1Titles", JSON.stringify(Titles));
                localStorage.setItem("2Bodies", JSON.stringify(Bodies));
                };

                cards.appendChild(div);
                div.appendChild(removeButton);
                div.appendChild(saveButton);
                div.appendChild(h3);
                div.appendChild(p);
                
                
            } else {
                alert('Please enter a Title and Text.');
            }
        }

//displays all local storage items as cards 
function Save() {

    const SavedCards = document.getElementById('grid3');

    var Titles3 = JSON.parse(localStorage.getItem("1Titles"));
    var Bodies3 = JSON.parse(localStorage.getItem("2Bodies"));

    if (Titles3 === null || Bodies3 === null || Titles3.length === 0 || Bodies3.length === 0) {
        alert('Nothing Saved');   
    } else  {
        for (let x = 0; x < Titles3.length; x++) {

            const div2 = document.createElement('div');
            div2.classList = 'box';

            const h3_2 = document.createElement('h3');
            h3_2.textContent = Titles3[x];

            const p2 = document.createElement('p');
            p2.textContent = Bodies3[x];

            const value = Titles3[x];

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('RemoveButton');
            removeButton.onclick = () => {
                
                SavedCards.removeChild(div2);

                const index = Titles3.indexOf(value)
                
                if (index !== -1) {
                    Titles3.splice(index, 1);
                    Bodies3.splice(index, 1);
                }
                localStorage.setItem("1Titles", JSON.stringify(Titles3));
                localStorage.setItem("2Bodies", JSON.stringify(Bodies3));
            }

            SavedCards.appendChild(div2);
            div2.appendChild(removeButton);
            div2.appendChild(h3_2);
            div2.appendChild(p2);
        }
    }
}