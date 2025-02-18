// FRONT-END (CLIENT) JAVASCRIPT HERE

//let x = 0;

const modify = async function( event ){
    event.preventDefault()

    const form = document.getElementById("theForm");
    const formData = new FormData(form);

    const oldGame = formData.get("oldGame")
    const modifyfavGame = formData.get("modifyfavGame")
    console.log(modifyfavGame)
    const modifyGenre = formData.get("modifyGenre")
    const modifyDescription = formData.get("modifyDescription")

    const sending = "old:" + oldGame + "pnew:" + modifyfavGame + " newG:" + modifyGenre + " newD:" + modifyDescription

    await fetch("/modify", {
        method: 'POST',
        body: sending,
        headers: {
            contentType: "text/plain"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error);
        })
}

const del = async function( event ){
    event.preventDefault()

    const form = document.getElementById("theForm");
    const formData = new FormData(form);

    const delGame = formData.get('gameToDel')

    await fetch("/delete", {
        method: 'POST',
        body: delGame,
        headers: {
            contentType: "text/plain",
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

        }).catch((error) => {
            console.log(error);
        })
}


const submit = async function( event ) {
    const form = document.getElementById("theForm");
    const formData = new FormData(form);

    const formCheck = formData.get('favGame');
    const genre = formData.get('genre')
    const desc = formData.get('description')

    const formOutput = "game:" + formCheck + " genre:" + genre + " descrip:" + desc
    console.log(formOutput)

    const data = Object.fromEntries(formData);

    console.log(data)

    await fetch("/click-handler", {
        method: 'POST',
        body: formOutput,
        headers: {
            contentType: "text/plain",
        },

    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error);
        })
}


window.onload = function() {
    const button = document.getElementById("submitButton");
    const delButton = document.getElementById("deleteButton")
    const modifyButton = document.getElementById("modifyButton")
    button.onclick = submit;
    delButton.onclick = del;
    modifyButton.onclick = modify;
}
