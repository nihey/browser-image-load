/**
 * Load images on 'urls' asyncronously and then invoke the callback
 * @function
 *
 * @param {String|String[]} urls - Image urls to be loaded
 * @param {Function} callback - The callback to be executed once the images are
 *                              loaded
 *
 * Example:
 *
 * imageLoad(['foo.gif', 'bar.jpg', 'baz.png'], function(foo, bar baz) {
 *  // foo, bar, and baz are Image objects, manipulate them here
 * });
 */
module.exports = function(urls, callback) {
  if (!Array.isArray(urls)) {
    urls = [urls];
  }

  var images = [];

  // Insert the image and invoke the callback if all urls were loaded
  var tryCallback = function(image, index) {
    images[index] = image;

    var length = images.filter(function(i) {return i}).length
    length === urls.length && callback.apply(this, images);
  }

  urls.forEach(function(url, index) {
    var image = new Image();
    image.onload = function() {
      tryCallback(image, index);
    };

    image.src = url;
  });
};
