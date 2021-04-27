import {useRouter} from "next/router";
import Header from "../../../components/Header";
import {getFilteredEvents} from "../../../dummy-data";
import EventList from "../../../components/Event_List";
import ErrorAlert from "../../../components/error-alert/error-alert";

function Slug() {
    const router = useRouter();
    const filterData = router.query.slug;
    //array with two elements - Year and Month - 
    // "2021" - "2"
    
    if(!filterData){
        return <p className="flex items-center justify-content">Loading...</p>
    }

    const filteredYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filteredYear; //transform string to month 
    const numMonth = +filterMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear< 2021 || numMonth < 1 || numMonth > 12 ){
        return <ErrorAlert>Invalid filter.. please adjust the values</ErrorAlert>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if(!filteredEvents || filteredEvents.length === 0) {
        return <ErrorAlert>No events found for the chosen filter</ErrorAlert>
    }
    return (
        <div>
         <Header/>
           <EventList items={filteredEvents} />
        </div>
    )
}

export default Slug
