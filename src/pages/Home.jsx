import NavBar from "../component/NavBar.jsx";


function Home() {
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
                <button id="submitButton">submit</button>
                <br/>
                <hr/>
                <label htmlFor="gameToDel">Delete Game: </label>
                <input type="text" id="gameToDel" name="gameToDel" placeholder="game to delete"/>
                <br/>
                <button id="deleteButton">delete</button>
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
                <button id="modifyButton">modify</button>
            </form>
        </>
    )
}

export default Home