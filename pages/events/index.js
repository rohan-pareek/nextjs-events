import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {

    const allEvents = getAllEvents();

    return (
        <div>
            <EventList events={allEvents} />
        </div>
    )
}

export default AllEventsPage;
