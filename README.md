# what type
Returns type of given variable/object intellegently

# Install
```sh
$ npm install --save what-type
```

# Run
```js
var what = require('what-type');
console.log(what([]));
// -> 'array'
```

## Examples

```js
var what = require('what-type');

console.log(what([]));
// -> 'array'

console.log(what('github'));
// -> 'string'
```

## Usage

#### `require('what-type')(variable|object)`
Returns type of given variable/object

**Arguments**:
- `variable/object`: A variable or Object.

**Returns**: Returns the type of given variable or object

## License

&copy; 2016 vikram. MIT License