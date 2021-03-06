const assert = require('chai').assert;

module.exports = (parser) => {
  describe('Params for parse', () => {
    it('when none should throw', () => {
      assert.throws(() => {
        parser.parse();
      }, 'wrong number of arguments, `parse(string, options, callback)` expected');
    });

    it('when more than 3 should throw', () => {
      assert.throws(() => {
        parser.parse('string', {}, () => {}, 'extra');
      }, 'wrong number of arguments, `parse(string, options, callback)` expected');
    });

    it('when first is not string should throw', () => {
      assert.throws(() => {
        parser.parse({});
      }, 'wrong 1st argument - string expected, `parse(string, options, [callback])`');
    });

    it('when more than 2 but last is not function should throw', () => {
      assert.throws(() => {
        parser.parse('string', {}, {});
      }, 'wrong number of arguments, `parse(string, options)` expected');
    });

    it('when 3 but second is not object should throw', () => {
      assert.throws(() => {
        parser.parse('string', true, () => {});
      }, 'wrong 2nd argument - object expected, `parse(string, options, [callback])`');
    });

    it('when 2 but second is not object or function should throw', () => {
      assert.throws(() => {
        parser.parse('string', true);
      }, 'wrong 2nd argument - object expected, `parse(string, options, [callback])`');
    });
  });

  describe('Params for parseSync', () => {
    it('when none should throw', () => {
      assert.throws(() => {
        parser.parseSync();
      }, 'wrong number of arguments, `parseSync(string, options)` expected');
    });

    it('when more than 2 should throw', () => {
      assert.throws(() => {
        parser.parseSync('string', {}, () => {});
      }, 'wrong number of arguments, `parseSync(string, options)` expected');
    });

    it('when first is not string should throw', () => {
      assert.throws(() => {
        parser.parseSync({});
      }, 'wrong 1st argument - string expected, `parseSync(string, options)`');
    });

    it('when second is not object should throw', () => {
      assert.throws(() => {
        parser.parseSync('string', true);
      }, 'wrong 2nd argument - object expected, `parseSync(string, options)`');
    });
  });

  describe('Params for validate', () => {
    it('when none should throw', () => {
      assert.throws(() => {
        parser.validate();
      }, 'wrong number of arguments, `validate(string, options, callback)` expected');
    });

    it('when more than 3 should throw', () => {
      assert.throws(() => {
        parser.validate('string', {}, () => {}, 'extra');
      }, 'wrong number of arguments, `validate(string, options, callback)` expected');
    });

    it('when first is not string should throw', () => {
      assert.throws(() => {
        parser.validate({});
      }, 'wrong 1st argument - string expected, `validate(string, options, [callback])`');
    });

    it('when more than 2 but last is not function should throw', () => {
      assert.throws(() => {
        parser.validate('string', {}, {});
      }, 'wrong number of arguments, `validate(string, options)` expected');
    });

    it('when 3 but second is not object should throw', () => {
      assert.throws(() => {
        parser.validate('string', true, () => {});
      }, 'wrong 2nd argument - object expected, `validate(string, options, [callback])`');
    });

    it('when 2 but second is not object or function should throw', () => {
      assert.throws(() => {
        parser.validate('string', true);
      }, 'wrong 2nd argument - object expected, `validate(string, options, [callback])`');
    });
  });

  describe('Params for validateSync', () => {
    it('when none should throw', () => {
      assert.throws(() => {
        parser.validateSync();
      }, 'wrong number of arguments, `validateSync(string, options)` expected');
    });

    it('when more than 2 should throw', () => {
      assert.throws(() => {
        parser.validateSync('string', {}, () => {});
      }, 'wrong number of arguments, `validateSync(string, options)` expected');
    });

    it('when first is not string should throw', () => {
      assert.throws(() => {
        parser.validateSync({});
      }, 'wrong 1st argument - string expected, `validateSync(string, options)`');
    });

    it('when second is not object should throw', () => {
      assert.throws(() => {
        parser.validateSync('string', true);
      }, 'wrong 2nd argument - object expected, `validateSync(string, options)`');
    });
  });
};
