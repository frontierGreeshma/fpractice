import { useState } from "react"
import { IState as Props } from "../App"
import App from "../App"

interface IListProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
        age: number;
        note?: string | undefined;
        url?: string | undefined;
    }[]>>
}

const AddPeopleList: React.FC<IListProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        url: "",
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.note || !input.url) {
            return
        }

        let newNumber = new Date();
        let newNumberID = newNumber.getSeconds();

        setPeople([
            ...people,
            {
                id: newNumberID,
                name: input.name,
                age: parseInt(input.age),
                note: input.note,
                url: input.url
            }
        ])

        setInput({
            name: "",
            age: "",
            note: "",
            url: "",
        })
    }

    return (
        <div style={{"display":"flex", "flexDirection":"column", "width":"40%", "margin":"0px auto"}}>
            <input
                style={{"margin":"5px", "padding":"10px", "borderRadius":"5px", "border":"1px solid #ccc"}}
                type="text"
                placeholder="Name"
                value={input.name}
                onChange={handleInput}
                name="name"
            />
            <input
                style={{"margin":"5px", "padding":"10px", "borderRadius":"5px", "border":"1px solid #ccc"}}
                type="text"
                placeholder="Age"
                value={input.age}
                onChange={handleInput}
                name= "age"
            />
            <textarea
                style={{"margin":"5px", "padding":"10px", "borderRadius":"5px", "border":"1px solid #ccc"}}
                placeholder="Notes"
                value={input.note}
                onChange={handleInput}
                name="note"
            />
            <input
                style={{"margin":"5px", "padding":"10px", "borderRadius":"5px", "border":"1px solid #ccc"}}
                type="text"
                placeholder="Url"
                value={input.url}
                onChange={handleInput}
                name="url"
            />
            <button onClick={handleClick}
                style={{"background":"#31bcfd","padding":"10px","border":"none", "borderRadius":"5px", "color":"white"}}
            >Add person</button>
        </div>
    )
}

export default AddPeopleList