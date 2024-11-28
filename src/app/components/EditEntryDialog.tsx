import { Entry } from "@prisma/client"
import { useState } from "react";
import WebsiteEntrySub from "../WebsiteEntrySub";


interface EditEntryDialogProps {
    entry: Entry
}

const EditEntryDialog = ({ entry }: EditEntryDialogProps) => {
    const [canEdit, setCanEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const setCanEditHandler = (state: boolean) => {
        setCanEdit(state);
    }

    return (
        <div className="z-10 p-24 flex bg-neutral-900 backdrop-blur-sm backdrop-opacity-10 w-full h-full fixed top-0 left-0">
            <div className="bg-neutral-800 rounded w-full">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="bg-neutral-800 py-2 px-4">
                    <h1 className="text-4xl">{entry.website}</h1>
                    <div className="flex flex-row gap-1">
                        <div
                            onClick={() => setCanEdit((!canEdit) ? true : false)}
                            className="p-2 border cursor-pointer border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out"
                        >
                            {(!canEdit) ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            }
                        </div>
                        <div className="p-2 border cursor-pointer border-neutral-600 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition ease-in-out">
                            {/* <form>
                                <button type="submit"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                {/* </button>
                            </form> */}
                        </div>
                    </div>
                    <WebsiteEntrySub
                        entry={entry}
                        canEdit={canEdit}
                        canEditHandler={setCanEditHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditEntryDialog;