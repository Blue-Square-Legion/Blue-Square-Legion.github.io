export type EventValue = { name: string; events: string[]; devOnly: boolean };
export type DayEvent = {
    [pair: string]: EventValue;
};