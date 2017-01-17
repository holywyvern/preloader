'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _genericEvents = require('generic-events');

var _genericEvents2 = _interopRequireDefault(_genericEvents);

var _audio = require('./audio');

var _audio2 = _interopRequireDefault(_audio);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _json = require('./json');

var _json2 = _interopRequireDefault(_json);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

var _es6Set = require('es6-set');

var _es6Set2 = _interopRequireDefault(_es6Set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preloader = function () {
    function Preloader() {
        _classCallCheck(this, Preloader);

        this.events = new _genericEvents2.default();
        this.audio = new _audio2.default(this);
        this.image = new _image2.default(this);
        this.json = new _json2.default(this);
        this.video = new _video2.default(this);
        this._loading = new _es6Set2.default();
        this.audio.events.on('end', this._onAudioLoad.bind(this));
        this.image.events.on('end', this._onImageLoad.bind(this));
        this.json.events.on('end', this._onJsonLoad.bind(this));
        this.video.events.on('end', this._onVideoLoad.bind(this));
    }

    _createClass(Preloader, [{
        key: '_onAudioLoad',
        value: function _onAudioLoad() {
            this._loading.delete('audio');
            this._checkLoad();
        }
    }, {
        key: '_onImageLoad',
        value: function _onImageLoad() {
            this._loading.delete('image');
            this._checkLoad();
        }
    }, {
        key: '_onJsonLoad',
        value: function _onJsonLoad() {
            this._loading.delete('json');
            this._checkLoad();
        }
    }, {
        key: '_onVideoLoad',
        value: function _onVideoLoad() {
            this._loading.delete('video');
            this._checkLoad();
        }
    }, {
        key: '_checkLoad',
        value: function _checkLoad() {
            if (this._loading.size <= 0) {
                this.events.fire('end');
            }
        }
    }, {
        key: 'start',
        value: function start() {
            if (this._loading.size > 0) {
                throw "Loader is still loading.";
            }
            this._loading.add('audio');
            this._loading.add('image');
            this._loading.add('json');
            this._loading.add('video');
            this.audio.start();
            this.image.start();
            this.json.start();
            this.video.start();
            return this;
        }
    }, {
        key: 'on',
        value: function on(name, callback) {
            this.events.on(name, callback);
            return this;
        }
    }, {
        key: 'addAudio',
        value: function addAudio(url) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

            this.audio.add(url, name);
            return this;
        }
    }, {
        key: 'addImage',
        value: function addImage(url) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

            this.image.add(url, name);
            return this;
        }
    }, {
        key: 'addJson',
        value: function addJson(url) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

            this.json.add(url, name);
            return this;
        }
    }, {
        key: 'addVideo',
        value: function addVideo(url) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

            this.video.add(url, name);
            return this;
        }
    }]);

    return Preloader;
}();

exports.default = Preloader;