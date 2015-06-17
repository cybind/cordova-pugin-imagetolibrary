cordova.define("com.digitalpalette.pizap.imagetolibrary.imagetolibrary", function(require, exports, module) {
    var exports;

    exports = {
		saveToLibrary: function(types, success, fail) {
		    Cordova.exec(success, fail, "ImageToLibraryPlugin", "saveImage", types);
		}
	};

    module.exports = exports;
});