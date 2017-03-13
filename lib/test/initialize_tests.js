const path = require('path')

async function runInitializers(app, container, log) {
  let dirs = [path.join(app.quadroDir, 'lib'), app.appDir]
  let files = await app.glob('test/initializers/*.js', { dirs })
  await files.map(async _ => await container.create(require(_)))
}

before(async function() {
  await global.container.create(runInitializers)
})