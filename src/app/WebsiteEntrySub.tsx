import { toast } from "react-toastify";
import { editPassword } from "../actions/actions";
import { useState } from "react";

interface WebsiteEntrySubProps {
    entry: any,
    canEdit: boolean,
    canEditHandler: (state: boolean) => void,
}

const WebsiteEntrySub = ({ entry, canEdit, canEditHandler }: WebsiteEntrySubProps) => {
    const editPasswordWithId = editPassword.bind(null, entry);

    const [showPassword, setShowPassword] = useState(false);

    const notify = () => toast(`Stored password on website ${entry.website} to database!`);

    const notifyAndCanEditHandler = () => {
        canEditHandler(false);
        notify();
    }

    const passwordWithStars = () => {
        return (showPassword) ? `${entry.passwordHash}` : "********";
    }

	return (
        <div className="text-neutral-400 py-4">
            {(!canEdit) ?
            <div>
                <p>Username: {entry.username}</p>
                <div className="flex gap-2">
                    <p>Password: {passwordWithStars()}</p>
                    <div
                        onClick={() => setShowPassword((!showPassword) ? true : false)}
                        className="p-2 border cursor-pointer border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out"
                        >
                        {(showPassword) ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        }
                    </div>
                </div>
            </div>
            :
            <div>
                <form action={editPasswordWithId} className="flex flex-col gap-1">
                    <p>Username:</p>
                    <input
                        className="caret-white rounded outline-none p-1 pl-2 bg-neutral-900"
                        type="text"
                        name="username"
                        placeholder={entry.username}
                    />
                    <p>Password:</p>
                    <input
                        className="caret-white rounded outline-none p-1 pl-2 bg-neutral-900"
                        type="text"
                        name="password"
                        placeholder={entry.passwordHash}
                    />
                    <div className="flex justify-center">
                        <button onClick={notifyAndCanEditHandler} className="w-1/2 mt-2 p-2 border cursor-pointer text-neutral-100 border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
            }

            <div className="flex justify-center mt-2">
            </div>
        </div>
	);
}

export default WebsiteEntrySub;