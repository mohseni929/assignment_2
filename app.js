
// Data
// notes array 

// let notesArray = [
//     {
//         title: 'note one',
//         body: 'some text 1',
//     },
//     {
//         title: 'note two',
//         body: 'some text 2',
//     },
// ];


// Functions
function hideTextArea() {
    let cancelBtnEl = document.getElementById("cancelBtn");
    let saveBtnEl = document.getElementById("saveBtn");
    let textAreaEl = document.getElementById("textArea");

    cancelBtnEl.classList.add("Hidden");
    saveBtnEl.classList.add("Hidden");
    textAreaEl.classList.add("Hidden");
}

function setActive() {
    let cancelBtnEl = document.getElementById("cancelBtn");
    let saveBtnEl = document.getElementById("saveBtn");
    let textAreaEl = document.getElementById("textArea");

    console.log(textAreaEl.value);

    if (!textAreaEl.classList.contains('Hidden') &&  textAreaEl.value !== '') {

        console.log(textAreaEl.value);

        // clear text area 
        textAreaEl.value = '';
    }

    cancelBtnEl.classList.remove("Hidden");
    saveBtnEl.classList.remove("Hidden");
    textAreaEl.classList.remove("Hidden");

}

function toggleTheme() {

    // get elements
    let textAreaContainerEl = document.getElementById("textAreaContainer");
    let themeBtnEl = document.getElementById("themeBtn");
    let newNoteBtnEL = document.getElementById("newNoteBtn");
    let saveBtnEl = document.getElementById("saveBtn");
    let cancelBtnEl = document.getElementById("cancelBtn");
    let notesSidebarContainerEl = document.getElementById("notesSidebarContainer");

    if (themeBtnEl.innerHTML === 'Dark Theme') {
        // change btn text 
        themeBtnEl.innerHTML = "Light Theme";

        // change to dark theme "
        textAreaContainerEl.style.backgroundColor = 'rgb(65,65,65)';
        themeBtnEl.style.backgroundColor = 'rgb(91,91,91)';
        newNoteBtnEL.style.backgroundColor = 'rgb(103,103,103)';
        saveBtnEl.style.backgroundColor = 'rgb(117,117,117)';
        cancelBtnEl.style.backgroundColor = 'rgb(143,143,143)';
        notesSidebarContainerEl.style.backgroundColor = 'rgb(166,166,166)'
    } else {
        // change btn text 
        themeBtnEl.innerHTML = 'Dark Theme';

        //change to light theme
        textAreaContainerEl.style.backgroundColor = '#baeef7';
        themeBtnEl.style.backgroundColor = '#cf5b5b';
        newNoteBtnEL.style.backgroundColor = '#3b967f';
        saveBtnEl.style.backgroundColor = '#370df0';
        cancelBtnEl.style.backgroundColor = '#d44286';
        notesSidebarContainerEl.style.backgroundColor = '#271b5c'
    }
}

let notesArray = [
    {
        title: 'note one',
        body: 'some text 1',
    },
    {
        title: 'note two',
        body: 'some text 2',
    },
];

function saveNewNote() {
    let textAreaEl = document.getElementById("textArea");

    let lines = textAreaEl.value.split('\n');


    let newNoteTitle = lines[0];

    lines.shift();

    let newNoteBody = lines.join();
    
    let newNoteObj = {
        title: newNoteTitle,
        body: newNoteBody
    }

    notesArray.push(newNoteObj);

    // add list item 
    let listItem = document.createElement('LI');
    let titleText = document.createTextNode(newNoteTitle);
    listItem.appendChild(titleText);
    document.getElementById("noteTitles").appendChild(listItem);

}

