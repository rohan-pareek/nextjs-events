import EventItem from "./EventItem";
import css from '../../styles/event-list.module.css';

function EventList({ events }) {
    return (
        <ul className={css.list}>
            {events.map(event => <EventItem key={event.id} event={event} />)}
        </ul>
    )
}

export default EventList;
