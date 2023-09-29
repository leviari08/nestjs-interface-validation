export interface EventDTO {
    id: string,
    color?: string,
    timeWindow: TimeWindow
}

export interface TimeWindow {
    id: string,
    startTime: string,
    endTime: string
}