async function run() {
  try {
    console.log('do some')
    console.log('🥰 ', JSON.stringify(process.env, null, 2))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to run do-some action')
  }
}

run()
