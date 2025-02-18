import NavBar from "../component/NavBar.jsx";

function Home() {

    const submit = async (e) => {

        e.preventDefault()

        const form = document.getElementById("theForm");
        const formData = new FormData(form);

        const formCheck = formData.get('favGame');
        const genre = formData.get('genre')
        const desc = formData.get('description')

        const formOutput = "game:" + formCheck + " genre:" + genre + " descrip:" + desc
        console.log(formOutput)

        const data = Object.fromEntries(formData);

        console.log(data)

        await fetch('/api/click-handler', {
            method: 'POST',
            body: formOutput,
            headers: {
              contentType: "text/plain"
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
    }


    const del = async (e) => {
        e.preventDefault()
        const form = document.getElementById("theForm");
        const formData = new FormData(form);

        const delGame = formData.get('gameToDel')

        await fetch("/api/delete", {
            method: 'POST',
            body: delGame,
            headers: {
                contentType: "text/plain"
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
        }


    const modify = async (e) => {
        e.preventDefault()

        const form = document.getElementById("theForm");
        const formData = new FormData(form);

        const oldGame = formData.get("oldGame")
        const modifyfavGame = formData.get("modifyfavGame")
        console.log(modifyfavGame)
        const modifyGenre = formData.get("modifyGenre")
        const modifyDescription = formData.get("modifyDescription")

        const sending = "old:" + oldGame + "pnew:" + modifyfavGame + " newG:" + modifyGenre + " newD:" + modifyDescription

        await fetch('/api/modify', {
            method: 'POST',
            body: sending,
            headers: {
                contentType: "text/plain"
            }
        }) .then((response) => response.json())
            .then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
    }



    return (

        <>
            <NavBar/>
            <h1 className="myName">AJ Aguiar</h1>
            <h1 id="assignment">CS4241 Assignment 3</h1>
            <form id="theForm">
                <label htmlFor="favGame">Favorite Game: </label>
                <input type="text" id="favGame" name="favGame" placeholder="type fave game here"/>
                <br/>
                <label htmlFor="genre">Genre: </label>
                <input type="text" id="genre" name="genre" placeholder="type genre here"/>
                <br/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" placeholder="description here"></textarea>
                <br/>
                <button onClick={ submit } id="submitButton">submit</button>
                <br/>
                <hr/>
                <label htmlFor="gameToDel">Delete Game: </label>
                <input type="text" id="gameToDel" name="gameToDel" placeholder="game to delete"/>
                <br/>
                <button onClick={ del } id="deleteButton">delete</button>
                <hr/>
                <label htmlFor="oldGame">Old Game: </label>
                <input type="text" id="oldGame" name="oldGame" placeholder="type game to change"/>
                <br/>
                <label htmlFor="modifyfavGame">Changed Favorite Game: </label>
                <input type="text" id="modifyfavGame" name="modifyfavGame" placeholder="type new fave game here"/>
                <br/>
                <label htmlFor="modifyGenre">New Genre: </label>
                <input type="text" id="modifyGenre" name="modifyGenre" placeholder="type new genre here"/>
                <br/>
                <label htmlFor="modifyDescription">New Description: </label>
                <textarea id="modifyDescription" name="modifyDescription" placeholder="new description here"></textarea>
                <br/>
                <button onClick={ modify } id="modifyButton">modify</button>
            </form>
        </>
    )
}

export default Home