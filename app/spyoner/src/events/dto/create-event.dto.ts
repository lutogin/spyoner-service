import { IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsOptional()
  @IsString()
  readonly description: string;

  @IsString()
  readonly eventTopic: string;

  @IsString()
  readonly eventId: string;

  @IsString()
  readonly processId: string;

  @IsString()
  readonly processName: string;
}
