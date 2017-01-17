'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _genericEvents = require('generic-events');

var _genericEvents2 = _interopRequireDefault(_genericEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader(manager) {
        _classCallCheck(this, Loader);

        this.events = new _genericEvents2.default();
        this._loadSize = 0;
        this._loading = false;
        this._result = {};
        this._manager = this;
    }

    _createClass(Loader, [{
        key: 'add',
        value: function add(url) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

            if (this._loading) {
                throw "Currently loading";
            }
            this._result[name] = { url: url, value: null };
            return this;
        }
    }, {
        key: '_onSuccess',
        value: function _onSuccess(url, name, resource) {
            this._loadSize--;
            this.events.fire('load', resource, url, name);
            this._result[name].value = resource;
            this._checkLoad();
        }
    }, {
        key: '_checkLoad',
        value: function _checkLoad() {
            if (this._loadSize <= 0) {
                this.events.fire('end');
                this._loading = false;
            }
        }
    }, {
        key: '_onError',
        value: function _onError(url, name, error) {
            this._loadSize--;
            this.events.fire('error', error, url, name);
            this._checkLoad();
        }
    }, {
        key: 'start',
        value: function start() {
            this._loading = true;
            var resources = Object.keys(this._result);
            this._loadSize = resources.length;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = resources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;

                    var asset = this._result[name];
                    this.events.fire('start', asset.url, name);
                    this._startLoad(asset.url, name);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this._checkLoad();
        }
    }, {
        key: 'get',
        value: function get(name) {
            return this._result[name] ? this._result[name].value : null;
        }
    }, {
        key: '_starLoad',
        value: function _starLoad(url, name) {}
    }, {
        key: 'audio',
        get: function get() {
            return this._manager.audio;
        }
    }, {
        key: 'image',
        get: function get() {
            return this._manager.image;
        }
    }, {
        key: 'json',
        get: function get() {
            return this._manager.json;
        }
    }, {
        key: 'video',
        get: function get() {
            return this._manager.video;
        }
    }]);

    return Loader;
}();

exports.default = Loader;