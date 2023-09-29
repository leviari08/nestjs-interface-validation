/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = [
  { name: 'types', input: 'src/types/types.ts', output: 'src/types/types.zod.ts' },
  { name: 'types2', input: 'src/types/types2.ts', output: 'src/types/types2.zod.ts' },
];
