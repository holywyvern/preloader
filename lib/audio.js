'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioLoader = function (_Loader) {
    _inherits(AudioLoader, _Loader);

    function AudioLoader() {
        _classCallCheck(this, AudioLoader);

        return _possibleConstructorReturn(this, (AudioLoader.__proto__ || Object.getPrototypeOf(AudioLoader)).apply(this, arguments));
    }

    _createClass(AudioLoader, [{
        key: '_startLoad',
        value: function _startLoad(url, name) {
            var _this2 = this;

            var file = document.createElement('audio');
            file.onload = function () {
                return _this2._onSuccess(url, name, file);
            };
            file.onerror = function (file, error) {
                return _this2._onError(url, name, error);
            };
            file.preload = "auto";
            file.addEventListener("canplaythrough", function () {
                return _this2.events.fire('playable', url, name);
            });
            file.src = url;
        }
    }]);

    return AudioLoader;
}(_loader2.default);

exports.default = AudioLoader;