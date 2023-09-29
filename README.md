<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
</p>

<p align="center">
NestJS interface validation example project
</p>

## Description

[Nest validation in docs](https://docs.nestjs.com/techniques/validation) is based on DTO classes (created with class-validator and class-transformer)<br>
This project shows how to validate types based on typescript interfaces without manually creating each DTO
(A good option for when you have a shared/generated library of typescript interfaces across multiple projects)

The project contains 2 different options, you may choose the one which fits your needs the most

Both options support:
1. auto generating DTOs based on one or multiple TypeScript files (scripts included in `package.json`)
2. validating the request body based on the DTO
3. throwing a detailed error about why the object is not valid
4. optional strict mode (throwing an error when adding excess properties to the object)

##### 1. ts-interface-checker
Validation with [ts-interface-checker](#main-libraries), type generation with [ts-interface-builder](#main-libraries)

##### 2. zod
Validation with [zod](#main-libraries) and [nestjs-zod](#main-libraries), type generation with [ts-to-zod](#main-libraries)


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Main libraries

- NestJs - [https://nestjs.com](https://nestjs.com/)
- Zod - [https://www.npmjs.com/package/zod](https://www.npmjs.com/package/zod)
- ts-interface-checker - [https://www.npmjs.com/package/ts-interface-checker](https://www.npmjs.com/package/ts-interface-checker)
