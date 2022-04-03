import { useRouter } from 'next/router';
import ErrorAlert from '../../components/event-detail/error-alert';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Button from '../../components/ui/Button';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {

    const { query } = useRouter();

    const eventId = query.eventId;

    const event = getEventById(eventId);

    if (!event) {
        return (
            <>
                <ErrorAlert>
                    <div>No event found!</div>
                </ErrorAlert>
                <div className='center'>
                    <Button href='/events'>Show all events</Button>
                </div>
            </>
        );
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetailPage;
