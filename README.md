# Project components
> Indicated for projects Laravel with Bootstrap 4

![Demo](demo.png "Demo")

## Install
Install the component using [npm](https://npmjs.com):

```sh
$ npm install project-components --save
```

## Usage

Include the CSS:

```html
<link rel="stylesheet" href="./dist/assets/docs.css">
```
Include the Js:

```html
<script src="./dist/assets/docs.js"></script>
```
Note: Adds **docs.js** before the tag ```</body>```.

## Dependencies

Copy the local lib **src/prism** to **dist/lib** and include:

```html
<link rel="stylesheet" href="./dist/lib/prism.css">
<script src="./dist/lib/prism.js"></script>
```

Include the libs:

* [Bootstrap 4](http://getbootstrap.com)
* [Jquery](https://jquery.com/download)
* [Popper](https://popper.js.org)
* [Clipboard](https://clipboardjs.com/)

## Tree
## Route

Include in **routes/web.php**:

```php
Route::view('/components', 'docs/master');
```

## New component
## Development
## Contributing
