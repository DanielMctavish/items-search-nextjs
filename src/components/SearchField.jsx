import Head from "next/head";


function SearchField() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="searchfield.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <div className="searchfield">
                <form action="">
                    <div className="input-field-group">
                        <input type="text" name="" id="" onChange={event => {
                            //console.log(event.target.value)
                            document.querySelector(".additional-inputs").style.display = "flex"
                            if(!event.target.value){
                                document.querySelector(".additional-inputs").style.display = "none";
                            }
                        }} />
                        <div className="additional-inputs">
                            <input type="text" readOnly/>
                            <input type="text" readOnly/>
                            <input type="text" readOnly/>
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