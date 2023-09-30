import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AerialEvent } from 'src/types/types';
import exportedTypeSuite from 'src/types/types-ti';
import { createCheckers } from 'ts-interface-checker';

@Controller('ts-interface-checker')
export class TsInterfaceCheckerController {
  @Post('')
  @ApiBody({ schema: { type: "AerialEvent" } })
  async createEvent(@Body() eventDTO: AerialEvent) {
    const { AerialEvent } = createCheckers(exportedTypeSuite);

    /*
      Methods to validate with ts-interface-checker
      1. check - throws an error if object not valid
      2. test - returns true or false
      3. validate - returns a non-empty array of error objects describing the errors, or null if valid

      * each method have also a "strict" function,
        which checks that objects and tuples have no extra members
    */

    try {
      AerialEvent.check(eventDTO);
    } catch (error) {
      throw new BadRequestException();
    }

    const isValid = AerialEvent.test(eventDTO);
    if (!isValid) {
      throw new BadRequestException();
    }

    const errors = AerialEvent.validate(eventDTO);
    if (errors) {
      throw new BadRequestException(errors);
    }

    console.log('Validation passed', eventDTO);
  }
}
