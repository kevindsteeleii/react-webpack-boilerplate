// typically reserved for parts that don't change as often like bootstrap
module.exports = {
  test: () => {
    console.log('testing vendor bundle...')
  },
  asyncTest: async () => {
    let func = new Promise(res => res(1));
    let waiting = await func;
    alert(waiting);
  }
}