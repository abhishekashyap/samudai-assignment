export type CalendarEventListProps = {
  events: CalendarEventType[];
};

export type CalendarEventType = {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
};
