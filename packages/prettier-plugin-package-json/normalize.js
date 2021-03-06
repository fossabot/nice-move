const normalizeData = require('normalize-package-data');
const normalizeBin = require('npm-normalize-package-bin');
const { format } = require('prettier-package-json');
const { keyOrder } = require('./key-order');

function mergeArray(bundledDependencies, bundleDependencies) {
  return bundledDependencies || bundleDependencies
    ? [
        ...new Set([
          ...(bundledDependencies || []),
          ...(bundleDependencies || []),
        ]),
      ]
    : undefined;
}

function handle(json) {
  const {
    'engine-strict': x,
    preferGlobal,
    engineStrict,
    bundledDependencies,
    bundleDependencies,
    typings,
    types = typings,
    'jsnext:main': jsNextMain,
    'esnext:main': esNextMain,
    jsnext = jsNextMain,
    esnext = esNextMain || jsnext,
    module: Module = esnext,
    ...data
  } = json;

  return {
    ...data,
    module: Module,
    types,
    bundledDependencies: mergeArray(bundledDependencies, bundleDependencies),
  };
}

function haveGit(io) {
  return io.repository && io.repository.type === 'git' && io.repository.url;
}

function normalize(text) {
  const io = normalizeBin(handle(JSON.parse(text)));
  normalizeData(io, true);
  // eslint-disable-next-line no-underscore-dangle
  delete io._id;
  delete io.readme;

  if (haveGit(io)) {
    io.repository.url = io.repository.url.replace(/^git\+/, '');
  }

  if (io.repository && io.repository.directory) {
    io.repository.directory = io.repository.directory.replace(
      /(^\/)|(\/$)/,
      '',
    );
  }

  if (!io.homepage || io.homepage.startsWith('https://github.com/')) {
    if (haveGit(io)) {
      io.homepage = [
        io.repository.url.replace(/.git$/, ''),
        io.repository.directory,
      ]
        .filter(Boolean)
        .join('/tree/master/');
    }
  }

  if (io.homepage && io.homepage.endsWith('#readme')) {
    io.homepage = io.homepage.replace(/#readme$/, '');
  }

  if (io.engines && io.engines.node) {
    io.engines.node = io.engines.node
      .split(/\s*\|\|\s*/)
      .join(' || ')
      .replace(/(>=|>|<=|<)\s*/, '$1');
  }

  return format(io, {
    expandUsers: true,
    keyOrder,
  });
}

module.exports = {
  normalize,
};
