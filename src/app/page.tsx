import prisma from "../lib/prisma";
import TopBar from "./components/TopBar";
import WebsiteEntryList from "./WebsiteEntryList";
import { Entry } from "../types/dbTypes";

const Home = async () => {
    const entries: Entry[] = await prisma.entry.findMany();
	const entriesCount = await prisma.entry.count();
	return (
		<main className="bg-neutral-900 h-screen">
			<div>
				<TopBar entriesCount={entriesCount} />
				<WebsiteEntryList entries={entries} />
			</div>
		</main>
	);
}

export default Home;