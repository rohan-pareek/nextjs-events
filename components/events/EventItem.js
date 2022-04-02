import css from '../../styles/event-item.module.css';
import AddressIcon from "../icons/address";
import ArrowRightIcon from "../icons/arrow-right";
import CalendarIcon from "../icons/calendar";
import Button from "../ui/Button";

function EventItem({ event }) {

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className={css.item}>
            <img src={event.image} alt={event.title} />
            <div className={css.content}>
                <div>
                    <h2>{event.title}</h2>
                    <div className={css.date}>
                        <CalendarIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={css.address}>
                        <AddressIcon />
                        <address>{event.location?.replace(', ', '\n')}</address>
                    </div>
                </div>
                <div className={css.actions}>
                    <Button href={{
                        pathname: '/events/[eventId]',
                        query: {
                            eventId: event.id
                        }
                    }}>
                        <span>Explore Event</span>
                        <span className={css.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
