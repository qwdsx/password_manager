import { storePassword } from "../../actions/actions";

const AddEntryDialog = () => {
	return (
        <div className="w-full p-6 border-t border-neutral-700">
            <h1 className="text-neutral-100 text-lg mb-2">Store a password:</h1>
            <form className="flex flex-col gap-3" action={storePassword}>
                <input
                    className="caret-white rounded outline-none p-1 pl-2 bg-neutral-800"
					type="text"
                    name="website"
					placeholder="Website"
				/>
                <input
                    className="caret-white rounded outline-none p-1 pl-2 bg-neutral-800"
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <input
                    className="caret-white rounded outline-none p-1 pl-2 bg-neutral-800"
					type="text"
                    name="password"
					placeholder="Password"
				/>
                <button className="px-4 py-2 border cursor-pointer text-neutral-100 border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out" type="submit">
                    Add
                </button>
            </form>
        </div>
	);
}

export default AddEntryDialog;