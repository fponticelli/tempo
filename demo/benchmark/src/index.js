const keys = ['current'];

const createArray = (num) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(i);
  }
  return res;
};

const createRange = (num) => {
  return createArray(num).map(_ => Math.floor(Math.random() * num));
};

const repeat = (times, f) => {
  return (createArray(times)).map(f);
};

const createRanges = (values) => {
  return values.map(createRange);
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const createWord = (num) => {
  let w = '';
  for (let i = 0; i < num; i++)
    w += alphabet[Math.floor(alphabet.length * Math.random())];
  return w;
};

const createRandomWord = (min, max) => {
  const length = min + Math.round((max - min) * Math.random());
  return createWord(length);
};

const createWords = (num, min, max) => {
  return (createArray(num)).map(_ => createRandomWord(min, max)).join(' ');
};

export const createDeep = () => {
  return {
    id: createWord(8),
    name: createRandomWord(4, 12),
    address: {
      line1: createWords(3, 4, 6),
      line2: createWords(2, 4, 6)
    },
    paragraph: createWords(30, 1, 8)
  };
};

const tests = [
  // { name: 'Render List (50)', fn: 'renderListElements', args: createRange(50), id: 'render-list-50' },
  // { name: 'Render List (500)', fn: 'renderListElements', args: createRange(500), id: 'render-list-500' },
  // { name: 'Render List & Destroy (500)', fn: 'renderListElementsAndDestroy', args: createRange(500), id: 'render-destroy-list-500' },
  // { name: 'Render List & Update',
  //   fn: 'renderListAndUpdate',
  //   args: createRanges([200, 100, 50, 20, 0, 20, 50, 100, 200]),
  //   id: 'render-update-list'
  // },
  { name: 'Render Deep & Update',
    fn: 'renderDeepAndUpdate',
    args: repeat(50, createDeep),
    id: 'render-update-deep'
  },
];

function setup() {
  // document.getElementById('App').innerHTML = '';
}

function teardown() {
  document.getElementById('App').innerHTML = '';
}

const makeSuite = (id) => new Promise(async (resolve, reject) => {
  await import(`./${id}/main.js`);
  const mod = window.__tests__;
  delete window.__tests__;
  const suite = new Benchmark.Suite();
  const targets = [];
  let pass;


  for (const test of tests) {
    if (!mod[test.fn]) continue;

    suite.add({
      id: test.id,
      async: !!test.async,
      fn: function() { mod[test.fn](test.args); },
      name: test.name,
      setup: setup,
      teardown: teardown
    });
  }

  suite.on('cycle', function(event) {
    console.log(String(event.target));
    targets.push(event.target);
  });

  suite.on('complete', function() {
    resolve(targets);
  });

  suite.run({ async: true });
});

async function go() {
  let results = {};
  for (const key of keys) {
    results = {
      ...results,
      [key]: await makeSuite(key)
    };
  }
  console.log(results);
}

go();

