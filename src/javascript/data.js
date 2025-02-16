const load = async function( event ) {
    await fetch("/getData")
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error!`)
            }
            return response.json()
        })
        .then(data => {

            //console.log(data.values())
            const table = document.getElementById("myTable")
            for (let i = 0; i < data.length; i++) {
                const newRow = table.insertRow();
                const cell1 = newRow.insertCell();
                const cell2 = newRow.insertCell();
                const cell3 = newRow.insertCell();

                console.log(data[i].game)
                console.log(data[i].genre)
                console.log(data[i].desc)


                //const num = data.indexOf('genre:')
                //const num2 = data.indexOf("descrip:")

                cell1.textContent = data[i].game//data.substring(5, num-1)
                cell2.textContent = data[i].genre//data.substring(num+6, num2-1)
                cell3.textContent = data[i].desc//data.substring(num2+8, data.length)




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
            }


            console.log(data);
        }).catch(error => {
            console.error('Problem with fetch operation')
        });
}


window.onload = function () {
    const datatLoad = document.getElementById("loadData")
    datatLoad.onclick = load;
}