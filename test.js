import test from 'ava';
import esDepUnit from './index';

test('should esDepUnit', (t) =>
  t.is(esDepUnit('unicorns'), 'unicorns'));

test('should throw on empty input', t => t.throws(() => { esDepUnit(); }, TypeError));
test('should throw on invalid input', t => t.throws(() => { esDepUnit(2); }, TypeError));
