import { useState } from "react";

type Props = {}

const Greet = (props: Props) => {
    const [greet, setGreet] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGreet(e.currentTarget.username.value);
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl font-bold">Buenos dias {greet ?? `, ${greet}`}</div>

            <form action='' onSubmit={handleSubmit}  className="flex flex-col gap-5 justify-start items-start">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Nombre de usuario</label>
                    <input className="bg-amber-50 rounded-[5px] text-black px-2 py-[2px]" type="text" name="username" onChange={handleChange} />
                </div>
                <button className="bg-purple-500 rounded-[5px] px-10 py-1" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Greet
