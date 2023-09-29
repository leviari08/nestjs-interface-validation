/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = [
  { name: 'types', input: 'src/types.ts', output: 'src/types.zod.ts' },
  { name: 'types2', input: 'src/types2.ts', output: 'src/types2.zod.ts' },
];
