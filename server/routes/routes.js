const fs = require('fs-extra');
const exec = require('../utils/exec');
const tomlify = require('tomlify');

let devServer;

const appRouter = function(app) {
  app.get('/', function(req, res) {
    res.status(200).send('Welcome to our restful API');
  });

  app.post('/generate', function(req, res) {
    const config = req.body.formData;
    removeIfProjectExist(res, config);
  });
};

module.exports = appRouter;

function removeIfProjectExist(res, config) {
  if(devServer) devServer.kill();
  if (fs.existsSync('./testWeb')) {
    console.info('Caution: project is exist and will be removed!');
    fs.remove('./testWeb', function(err) {
      if (err) return console.error(err);
      console.info('Project removed successfully');
      createProject(res, config);
    });
  }
}

function createProject(res, config) {
  exec('hugo', ['new', 'site', 'testWeb'])
    .then(data => {
      console.log('data', data);
      initGit(res, config);
    })
    .catch(err => {
      console.error('err', err);
      res.status(500).send('Error occcured');
    });
}

function initGit(res, config) {
  exec('git', ['init'], './testWeb')
    .then(data => {
      console.log('data', data);
      fetchTheme(res, config);
    })
    .catch(err => {
      console.error('err', err);
      res.status(500).send('Error occcured');
    });
}

function fetchTheme(res, config) { //HARDCODED
  exec(
    'git',
    [
      'submodule',
      'add',
      'https://github.com/luizdepra/hugo-coder.git',
      'themes/hugo-coder'
    ],
    './testWeb'
  )
    .then(data => {
      console.log('data', data);
      editToml(res, config);
    })
    .catch(err => {
      console.error('err', err);
      res.status(500).send('Error occcured');
    });
}

function editToml(res, config) {
  var toml = fs.createWriteStream('./testWeb/config.toml', {
    //flags: 'a' // 'a' means appending (old data will be preserved)
  });
  var tomlObj = tomlify(config, {delims: false, indent: true});
  toml.write(tomlObj);
  toml.end();
  runDevServer(res, config);
}

function runDevServer(res, config) {
  exec('hugo', ['server', '-D'], './testWeb')
    .then(data => {
      devServer = data;
      res.status(200).send('Generated');
    })
    .catch(err => {
      console.error('err', err);
      res.status(500).send('Error occcured');
    });
}
