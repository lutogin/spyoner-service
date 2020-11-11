export interface IEvent {
  readonly id: string,
  readonly description: string,
  readonly eventTopic: string,
  readonly eventId: string,
  readonly processId: string,
  readonly processName: string,
}
