import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Note} from "./components/Note";
import {CreateNote} from "./components/CreateNote";
import {useState, useEffect} from "react";
import axios from 'axios';




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

    useEffect(()=>{
        const fetchNotes=()=>{
            axios.get('https://localhost:3001/api/notes').then((response)=>{

            }).catch(error)
        }
    },[])


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

