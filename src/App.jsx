import React, {useEffect, useState} from 'react';
import "./App.css";
import Notes from "./components/Notes/Notes.jsx";
import Sidebar from "./components/Sidebar/SideBar.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
    const [isPhone, setIsPhone] = useState(false);
    const [display, setDisplay] = useState(false);
    const [selectedNote, setSelectedNote] = useState({});
    const [noteActive, setNoteActive] = useState(false);
    const [noteGroups, setNoteGroups] = useState(localStorage.getItem("noteGroups") ? JSON.parse(localStorage.getItem("noteGroups")) : []);
    const [newNoteGroup,setNewNoteGroup] = useState({
        id: "", name: "", notes: [], color: "",
    });

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className=" App flex flex-row">
                <Sidebar
                    display={display}
                    setDisplay={setDisplay}
                    isPhone={isPhone}
                    setNoteActive={setNoteActive}
                    noteGroups={noteGroups}
                    setSelectedNote={setSelectedNote}
                    selectedNote={selectedNote}
                />

                <Notes
                    display={display}
                    setDisplay={setDisplay}
                    selectedNote={selectedNote}
                    isPhone={isPhone}
                    noteActive={noteActive}
                />
            </div>

            <Modal
                noteActive={noteActive}
                setNoteActive={setNoteActive}
                noteGroups={noteGroups}
                setNewNoteGroup={setNewNoteGroup}
                setNoteGroups={setNoteGroups}
            />
        </>
    )
}
export default App
