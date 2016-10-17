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
Custom element class names derive from the "className" option (default "js-custom") as the prefix, and the element type as the suffix, so you get:
* Checkboxes: *js-custom-checkbox*
* Radio buttons: *js-custom-radio*
* Select dropdowns: *js-custom-select*

See *src/custom-form-elements.scss* for example CSS styling.

## HTML output
```html
<input type="checkbox" id="cb"><!-- Original HTML-->
<span class="js-custom-checkbox"><input type="checkbox" id="cb"><label for="cb"></label></span><!-- Replacement -->
```

```html
<input type="radio" id="rd1"><!-- Original HTML-->
<span class="js-custom-radio"><input type="radio" id="rd1"><label for="rd1"></label></span><!-- Replacement -->
```

```html
<select><option value="1">One</option></select><!-- Original HTML-->
<span class="js-custom-select"><select><option value="1">One</option></select><span class="js-label">One</span></span><!-- Replacement -->
```

## Notes
If you change a select's value via javascript, remember to trigger the "change" event so the custom element gets updated.
```javascript
$('#my-select').val(5).trigger('change');
```
