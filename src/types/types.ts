export interface BaseEvent {
    id: string,
    timeWindow: TimeWindow,
}

export interface AerialEvent extends BaseEvent {
    color?: string,
    crewMembers: CrewMember[];
}

export interface GroundEvent extends BaseEvent {
    color?: string,
}

export interface TimeWindow {
    id: string,
    startTime: string,
    endTime: string
}

export interface CrewMember {
    id: string,
    name: string,
    unitId: string
}