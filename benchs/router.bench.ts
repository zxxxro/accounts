

Deno.bench("omg", { baseline: true }, async (b) => {
  b.start

  await fetch('http://localhost:3001/user')

  b.end()
});