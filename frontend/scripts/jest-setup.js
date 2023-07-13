/* eslint-disable */
// Ensure all tests are sandboxed and have no dependencies between each other
require('@testing-library/jest-dom');
require('regenerator-runtime/runtime');

jest.setTimeout(10000);

afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

global.customProps = {
  config: {
    api: {
      uri: 'http://test.com',
      token: 'TEST_GRAPHQL_TOKEN',
    },
    externalApi: {
      uri: 'EXTERNAL_TEST_URI',
    },
  },
};

if (!global.fetch) {
  global.fetch = jest.fn().mockReturnValue(() => {});
}
