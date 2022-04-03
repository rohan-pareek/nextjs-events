import { useRouter } from "next/router";
import ErrorAlert from "../../components/event-detail/error-alert";
import ResultsTitle from "../../components/event-detail/results-title";
import EventList from "../../components/events/EventList";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {

    const { query } = useRouter();

    if (!query.slug) {
        return <p className="center">Loading...</p>
    }

    const [year, month] = query.slug;

    const filteredEvents = getFilteredEvents({ year: parseInt(year), month: parseInt(month) });

    if (filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <div>No event found!</div>
                </ErrorAlert>
                <div className="center">
                    <Button href='/events'>Show all events</Button>
                </div>
            </>
        )
    }

    return (
        <>
            <ResultsTitle date={new Date(year, month - 1)} />
            <EventList events={filteredEvents} />
        </>
    )
}

export default FilteredEventsPage;
