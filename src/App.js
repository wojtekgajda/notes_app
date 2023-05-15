import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Note} from "./components/Note";
import {CreateNote} from "./components/CreateNote";
import {useState} from "react";

export const App = () => {
    const [notes, setNotes] = useState([])

    const getNote = (note) => {
        setNotes((prevState) => [...prevState, note])
    }

    const deleteItem = (id) => {
        setNotes((prevState) => {
            return prevState.filter((item, index) => index !== id)
        })
    }
    return (
        <>
            <Header/>
            <CreateNote getNote={getNote}/>
            {notes.map((note, index) => {
                return (
                    <Note deleteNote={deleteItem} key={index} id={index} title={note.title} content={note.content}/>
                )
            })}
            <Footer/>
        </>
    )
}

