import { Entry } from "@/src/types/dbTypes";
import WebsiteEntry from "./WebsiteEntry";

type WebsiteEntryListProps = {
    entries: Entry[]
}

const WebsiteEntryList = async ({ entries }: WebsiteEntryListProps) => {
	return (
        <div className="w-full bg-neutral-900 overflow-y-scroll overflow-x-hidden">
            {entries.sort((a, b) => a.website.localeCompare(b.website)).map((entry: any, index: number) => (
                <div key={index}>
                    <WebsiteEntry entry={entry} />
                </div>
            ))}
        </div>
	);
}

export default WebsiteEntryList;