# Custom form elements
Wraps non-stylable form elements with stylable HTML.

## Usage
```javascript
$('input[type=checkbox], input[type=radio], select').customFormElement(options);
```

## Available options
| Option    | Type   | Default   | Description                                 |
| --------- | ------ | --------- | ------------------------------------------- |
| className | string | js-custom | Sets the class prefix of the custom element |

## Styling
Custom elements use the "className" option (default "js-custom") as the prefix, and the element type as the suffix so you get:
* Checkboxes: js-custom-checkbox
* Radio buttons: js-custom-radio
* Select dropdowns: js-custom-select

See *src/custom-form-elements.scss* for examples.

## Notes
If you change a select's value via javascript, remember to trigger the "change" event so the custom element gets updated.
```javascript
$('#my-select').val(5).trigger('change');
```
