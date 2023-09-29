import { BadRequestException, Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe, createZodDto } from 'nestjs-zod';
import { createCheckers } from 'ts-interface-checker';
import { AppService } from './app.service';
import { EventDTO } from './types';
import exportedTypeSuite from './types-ti';
import { eventDTOSchema } from './types.zod';

class EventZodDTO extends createZodDto(eventDTOSchema.strict()) {}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/tsInterChecker')
  async createEvent1(@Body() eventDTO: EventDTO) {
    const { EventDTO } = createCheckers(exportedTypeSuite);

    /*
      Methods to validate with ts-interface-checker
      1. check - throws an error if object not valid
      2. test - returns true or false
      3. validate - returns a non-empty array of error objects describing the errors

      * each method have also a "strict" function,
        which checks that objects and tuples have no extra members
    */

    try {
      EventDTO.strictCheck(eventDTO);
    } catch (error) {
      throw new BadRequestException();
    }

    if (EventDTO.test(eventDTO)) {
      throw new BadRequestException();
    }

    const errors = EventDTO.validate(eventDTO);
    if (errors) {
      throw new BadRequestException(errors);
    }

    console.log('Validation passed', eventDTO);
  }

  @Post('/zod')
  @UsePipes(ZodValidationPipe)
  async createEvent2(@Body() eventDTO: EventZodDTO) {
    /*
      ZodValidationPipe auto validates the DTO and throws a list of errors about what's wrong
      strict validation can be achived by adding script to the zod schema object

      normal:
      class EventZodDTO extends createZodDto(eventDTOSchema) {}

      strict:
      class EventZodDTO extends createZodDto(eventDTOSchema.strict()) {}
    */
    console.log('Validation passed', eventDTO);
  }
}
