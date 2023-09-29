import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { createZodDto, ZodValidationPipe } from 'nestjs-zod';
import { eventDTOSchema } from 'src/types/types.zod';

class EventZodDTO extends createZodDto(eventDTOSchema.strict()) {}

@Controller('zod')
export class ZodController {
  @Post('')
  @UsePipes(ZodValidationPipe)
  async createEvent(@Body() eventDTO: EventZodDTO) {
    /*
        ZodValidationPipe auto validates the DTO and throws a list of errors about what's wrong
        strict validation can be achived by adding script to the zod schema object

        normal: class EventZodDTO extends createZodDto(eventDTOSchema) {}
        strict: class EventZodDTO extends createZodDto(eventDTOSchema.strict()) {}
    */
    console.log('Validation passed', eventDTO);
  }
}
