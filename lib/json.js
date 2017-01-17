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

var JsonLoader = function (_Loader) {
    _inherits(JsonLoader, _Loader);

    function JsonLoader() {
        _classCallCheck(this, JsonLoader);

        return _possibleConstructorReturn(this, (JsonLoader.__proto__ || Object.getPrototypeOf(JsonLoader)).apply(this, arguments));
    }

    _createClass(JsonLoader, [{
        key: '_startLoad',
        value: function _startLoad(url, name) {
            var _this2 = this;

            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                if (req.readyState == 4) {
                    var status = xhr.status;
                    if (status == 200) {
                        try {
                            _this2._onSuccess(url, name, JSON.parse(xhr.responseText));
                        } catch (e) {
                            _this2._onError(url, name, e);
                        }
                    } else {
                        _this2._onError(url, name, e);
                    }
                }
            };
            xhr.send();
        }
    }]);

    return JsonLoader;
}(_loader2.default);

exports.default = JsonLoader;