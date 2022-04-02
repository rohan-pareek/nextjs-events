import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {

    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>The home page</h1>
            <EventList events={featuredEvents} />
        </div>
    )
}

export default HomePage;
