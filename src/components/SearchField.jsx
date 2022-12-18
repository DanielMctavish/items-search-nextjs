import Head from "next/head";
import { useState } from "react";
import axios from "axios";

function SearchField() {
    const [filtersearch, setFiltersearch] = useState([])
    const [clickresult, setClickresult] = useState([])

    async function getServerDatabase(valueEvent) {
        let server = await axios.get("http://localhost:3000/api/server")
        const filter = await server.data.filter((el, index) => {
            return el.title.toUpperCase().includes(valueEvent.toUpperCase())
        })
        setFiltersearch(filter);
        //console.log(filtersearch[0]);
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="searchfield.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <div className="searchfield">
                <form action="/resultsearch" method="GET">
                    <div className="input-field-group">
                        <input type="text" name="" id="input-user-search" onChange={event => {
                            getServerDatabase(event.target.value)
                            document.querySelector(".additional-inputs").style.display = "flex"
                            if (!event.target.value) {
                                document.querySelector(".additional-inputs").style.display = "none";
                            }
                        }} />
                        <div className="additional-inputs">
                            <input type="text" value={filtersearch[0] == undefined ? "" : filtersearch[0].title} readOnly onClick={() => {
                                document.getElementById("input-user-search").value = filtersearch[0].title;
                            }} />
                            <input type="text" value={filtersearch[1] == undefined ? "" : filtersearch[1].title} readOnly onClick={() => {
                                document.getElementById("input-user-search").value = filtersearch[1].title;
                            }} />
                            <input type="text" value={filtersearch[2] == undefined ? "" : filtersearch[2].title} readOnly onClick={() => {
                                document.getElementById("input-user-search").value = filtersearch[2].title;
                            }} />
                        </div>
                    </div>
                    <button>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </form>

            </div>

        </>
    )
}

export default SearchField;
