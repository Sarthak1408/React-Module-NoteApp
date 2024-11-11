import React from 'react'
import NotePage from "../../pages/NotePage/NotePage.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";

const Notes = ({selectedNote, isPhone, display, setDisplay, noteActive}) => {
    return (<>
        {selectedNote && selectedNote.notes ? (<NotePage
            id={selectedNote.id}
            name={selectedNote.name}
            color={selectedNote.color}
            notes={selectedNote.notes}
            isPhone={isPhone}
            display={display}
            setDisplay={setDisplay}/>) : (<HomePage noteActive={noteActive} isPhone={isPhone}/>)}
    </>)
}
export default Notes
