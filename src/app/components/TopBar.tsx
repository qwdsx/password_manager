"use client"
import { useState } from "react";
import AddEntryDialog from "./AddEntryDialog";
import { toast } from "react-toastify";

interface SearchBarProps {
	entriesCount: number,
    setSearch?: React.Dispatch<React.SetStateAction<string>>
}

function TopBar({ entriesCount }: SearchBarProps) {
	const [search, setSearch] = useState("");
	const [showAdd, setShowAdd] = useState(false);

	const onSearch = (formData: any) => {
		console.log(formData);
	}

    // const notify = () => toast(`Stored password to database!`);

	return (
		<div className="bg-neutral-900 w-full border-b-2 border-neutral-700 p-4">
			<div className="p-4 flex flex-row items-center gap-3 rounded">
				<div className="pl-2 flex flex-row items-center bg-white rounded">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-neutral-500">
						<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
					</svg>
					<form className="flex items-center mr-1">
						<input
							className="p-2 caret-black outline-none rounded w-full"
							onChange={(e) => onSearch(e.target.value)}
							type="text"
							placeholder="Search passwords.."
						/>
						<button type="submit" className="bg-neutral-200 p-1 rounded hover:bg-neutral-300 transition ease-in-out">
							Search
						</button>
					</form>
				</div>
				<div onClick={() => setShowAdd((!showAdd) ? true : false)} className="p-2 border cursor-pointer border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out">
					{(!showAdd) ?
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-neutral-100">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
					:
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-neutral-100">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
					}
				</div>
			</div>
			<h1 className="text-xl text-neutral-600 pl-6 pb-4">Passwords stored ({entriesCount})</h1>
			{(showAdd) && <AddEntryDialog />}
		</div>
	);
}

export default TopBar;