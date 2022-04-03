import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {

    const allEvents = getAllEvents();

    return (
        <>
            <EventSearch />
            <EventList events={allEvents} />
        </>
    )
}

export default AllEventsPage;
