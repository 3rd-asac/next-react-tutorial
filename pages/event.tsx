import { GetStaticProps } from "next";
import events from "../data/events.json";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      events,
    },
  };
};

interface EventsPageProps {
  events: typeof events;
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h1>{event.eventName}</h1>
          <p>{event.description}</p>
          <p>{event.detail}</p>
          <ul>
            {event.companies.map((company, idx) => (
              <li key={idx}>{company}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
