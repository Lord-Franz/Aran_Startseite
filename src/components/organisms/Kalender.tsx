import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

type CalendarEvent = {
    id: number;
    title: string;
    start: Date;
    end: Date;
    color?: string;
};

moment.locale('de');

const localizer = momentLocalizer(moment);

const Kalender = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/termine.json');

                if (!response.ok) {
                    setError(`HTTP-Fehler: ${response.status}`);
                    setLoading(false);
                    return;
                }

                const jsonEvents : CalendarEvent[] = await response.json();

                const formattedEvents: CalendarEvent[] = jsonEvents.map(event => ({
                    ...event,
                    start: new Date(event.start),
                    end: new Date(event.end)
                }));

                setEvents(formattedEvents);
            } catch (err) {
                setError('Fehler beim Laden der Termine');
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents().catch(err => {
            setError('Fehler beim Laden der Termine');
            console.error('Fetch error:', err);
            setLoading(false);
        });
    }, []);

    const eventStyleGetter = (event: CalendarEvent) => ({
        style: {
            backgroundColor: event.color || '#3174ad',
            borderRadius: '4px',
            border: 'none'
        }
    });

    if (loading) return <div>Lade Termine...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className={"dark:text-white pt-5"} style={{ height: 500, margin: '20px' }}>
            <Calendar
                dayPropGetter={(date) => {
                    const isToday = moment(date).isSame(new Date(), 'day');
                    return {
                        style: {
                            backgroundColor: isToday ? '#404040' : '',
                            fontWeight: isToday ? 'bold' : 'normal'
                        }
                    };
                }}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={['month']}
                eventPropGetter={eventStyleGetter}
                culture="de"
                components={{
                    toolbar: () => null
                }}
            />
        </div>
    );
}; export default Kalender;