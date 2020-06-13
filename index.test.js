let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('test margin', async () => {
  // disable line length limit
  /* eslint-disable */
  await run(
    'a{ margin: calc(100% + calc((100vw - (1220px)) / 2 + 20px) + 101.6666666667px + 20px * 3 - 20px) calc(100% + calc((100vw - (1220px)) / 2 + 20px) + 101.6666666667px + 20px * 3 - 20px); }',
    'a{ margin: calc(100% + ((100vw - (1220px)) / 2 + 20px) + 101.6666666667px + 20px * 3 - 20px) calc(100% + ((100vw - (1220px)) / 2 + 20px) + 101.6666666667px + 20px * 3 - 20px); }',
    {})
  /* eslint-enable */
})

it('test width', async () => {
  // disable line length limit
  /* eslint-disable */
  await run(
    'a{ width: calc(100vw - calc(20% - 10px)); }',
    'a{ width: calc(100vw - (20% - 10px)); }',
    {})
  /* eslint-enable */
})
