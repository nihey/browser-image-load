# Browser Image Load

Transform URLs into `Image` objects (with the loaded URL) asyncronously

# Usage

```javascript
import imageLoad from 'image-load';

//
// @param {String|String[]} urls - Image urls to be loaded
// @param {Function} callback - The callback to be executed once the images are
//                              loaded
// imageLoad(urls, callback)
//
// Examples:

// Loading a single image
imageLoad('foo.gif', function(foo) {
  // You can use foo as a Image here
});

// Loading multiple images
imageLoad(['foo.gif', 'bar.jpg', 'baz.png'], function(foo, bar baz) {
  // foo, bar, and baz are Image objects, manipulate them here
});
```

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)
