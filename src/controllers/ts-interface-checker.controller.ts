import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { EventDTO } from 'src/types/types';
import exportedTypeSuite from 'src/types/types-ti';
import { createCheckers } from 'ts-interface-checker';

@Controller('ts-interface-checker')
export class TsInterfaceCheckerController {
  @Post('')
  async createEvent(@Body() eventDTO: EventDTO) {
    const { EventDTO } = createCheckers(exportedTypeSuite);

    /*
      Methods to validate with ts-interface-checker
      1. check - throws an error if object not valid
      2. test - returns true or false
      3. validate - returns a non-empty array of error objects describing the errors, or null if valid

      * each method have also a "strict" function,
        which checks that objects and tuples have no extra members
    */

    try {
      EventDTO.check(eventDTO);
    } catch (error) {
      throw new BadRequestException();
    }

    const isValid = EventDTO.test(eventDTO);
    if (!isValid) {
      throw new BadRequestException();
    }

    const errors = EventDTO.validate(eventDTO);
    if (errors) {
      throw new BadRequestException(errors);
    }

    console.log('Validation passed', eventDTO);
  }
}
