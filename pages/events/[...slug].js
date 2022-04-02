import { useRouter } from "next/router";

function FilteredEventsPage() {

    const { query } = useRouter();

    return (
        <div>
            <h1>The filtered events page</h1>
            <p>{query.slug?.join(', ')}</p>
        </div>
    )
}

export default FilteredEventsPage;
