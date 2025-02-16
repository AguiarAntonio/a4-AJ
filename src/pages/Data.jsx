import NavBar from "../component/NavBar.jsx";


 function Data() {
     return (
         <>
             <NavBar/>
             <h1 className="myName">AJ Aguiar</h1>
             <h1 id="assignment">CS4241 Assignment 3</h1>
             <table id="myTable">
                 <tbody>
                     <tr>
                         <th>Game</th>
                         <th>Genre</th>
                         <th>Description</th>
                     </tr>
                 </tbody>
             </table>
             <br/>
             <form id="dataForm">
                 <button type="button" id="loadData">load data</button>
             </form>
         </>
     )
 }

export default Data