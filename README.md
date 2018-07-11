# Project components
> Indicated for projects with Laravel and Bootstrap 4

### Demo

![Demo](https://user-images.githubusercontent.com/5880063/42570885-ba7f960c-84eb-11e8-90e1-2c8ef30ce122.png "Demo")

## Install
Install the component using **[npm](https://npmjs.com)**:

```sh
$ npm install project-components --save
```

## Usage

Include the **CSS/JS**:

```html
<link rel="stylesheet" href="./dist/assets/docs.css">
<script src="./dist/assets/docs.js"></script>
```
Adds **docs.js** before the tag ```</body>```.

## Dependencies

Copy the local lib **src/prism** to **dist/lib** and include:

```html
<link rel="stylesheet" href="./dist/lib/prism.css">
<script src="./dist/lib/prism.js"></script>
```

Also include the libs:

* [Jquery](https://jquery.com/download)
* [Bootstrap 4](http://getbootstrap.com) or v3
* [Popper](https://popper.js.org)
* [Clipboard](https://clipboardjs.com/)


## Branches organization

![Workflow](https://user-images.githubusercontent.com/5880063/42572387-d4948882-84ef-11e8-946a-fd76307fabc3.png)

## Route

Include in **routes/web.php**:

```php
Route::view('/components', 'docs/master');
```

## Example

1. Adds a new component in **docs/components/**

```html
<div class="component-box">
	<i class="icon-show-code ev-show-code" data-toggle="tooltip" data-placement="top" title="Code"></i>
	<div class="component-item">
		<!-- Component code -->
	</div>
<div class="code-block">
	<pre class="language-markup"><code><!-- Component code preview --></code></pre>
	<button type="button" class="btn btn-sm btn-primary btn-copy">Copy</button>
</div>
</div>
```
**Note:** Don't remove `<!-- -->` in `<code></code>`.


2. Include the new component in **docs/master.blade.php**

```html
<body class="components-group">
	<h3>Project <small class="text-muted">components</small></h3>
	@include('docs/components/btns')
</body>
```

### Enjoy! :)
