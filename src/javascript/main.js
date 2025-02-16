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
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault()

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
            /*
                        const table = document.getElementById("myTable");
                        const newRow = table.insertRow();
                        const cell1 = newRow.insertCell();
                        const cell2 = newRow.insertCell();
                        const cell3 = newRow.insertCell();


                        const num = data.indexOf('genre:')
                        const num2 = data.indexOf("descrip:")

                        cell1.textContent = data.substring(5, num-1)
                        cell2.textContent = data.substring(num+6, num2-1)
                        cell3.textContent = data.substring(num2+8, data.length)




                        cell1.style.border = "2px solid lightcyan"
                        cell2.style.border = "2px solid lightcyan"
                        cell1.style.width = "1em"
                        cell2.style.width = "1em"
                        cell1.style.borderCollapse = "collapse"
                        cell2.style.borderCollapse = "collapse"
                        cell1.style.textAlign = "center"
                        cell2.style.textAlign = "center"
                        cell1.style.padding = "0.5em"
                        cell2.style.padding = "0.5em"
                        cell3.style.border = "2px solid lightcyan"
                        cell3.style.width = "1em"
                        cell3.style.borderCollapse = "collapse"
                        cell3.style.textAlign = "center"
                        cell3.style.padding = "0.5em"
            */
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
