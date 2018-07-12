## PrimeNG material

Material theme for [primeng](https://www.primefaces.org/primeng/).


## Usage

in styles.sass add

```
// add the quill style only if you use the text editor
@import '~quill/dist/quill.snow.css';
@import '~primeng/resources/primeng.min.css';
@import '~@irian/primeng-material/sass/blue-amber/theme';
@include blue-amber();

```

### Ripple effect (optional)

Install jquery and add the following scripts: 

```
"scripts": [
... 
 "../node_modules/jquery/dist/jquery.js",
 "../node_modules/@irian/primeng-material/js/ripple.js"
 ],
```

