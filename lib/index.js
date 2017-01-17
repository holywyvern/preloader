/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _genericEvents = __webpack_require__(1);

	var _genericEvents2 = _interopRequireDefault(_genericEvents);

	var _audio = __webpack_require__(2);

	var _audio2 = _interopRequireDefault(_audio);

	var _image = __webpack_require__(4);

	var _image2 = _interopRequireDefault(_image);

	var _json = __webpack_require__(5);

	var _json2 = _interopRequireDefault(_json);

	var _video = __webpack_require__(6);

	var _video2 = _interopRequireDefault(_video);

	var _es6Set = __webpack_require__(7);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * The event manager is a class than can dispatche messages assigned to it.
	 * It works great as a flux dispatcher os as an event listener.
	 * This class aims to be used in composition or extension with others.
	 */
	var EventManager = function () {

	  /**
	   * Creates a new event manager.
	   */
	  function EventManager() {
	    _classCallCheck(this, EventManager);

	    /** This events are events than are called always when this event manager dispatchs it */
	    this._events = {};
	    /** This events are special, because they are called just once, and after that they are ignored. */
	    this._once = {};
	  }

	  /**
	   * Adds one or more callback to listen for an event.
	   * @param {string} field The variable name.
	   * @param {string} name The name of the callback.
	   * @param {function[]} callbacks A list of callbacks to add
	   * @private
	   */

	  _createClass(EventManager, [{
	    key: '_onFrom',
	    value: function _onFrom(field, name) {
	      var events = this[field];
	      events[name] = events[name] || [];

	      for (var _len = arguments.length, callbacks = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        callbacks[_key - 2] = arguments[_key];
	      }

	      events[name] = events[name].concat(callbacks);
	    }

	    /**
	     * Adds one or more callback to listen for an event.
	     * @param {string} name The name of the callback.
	     * @param {function[]} callbacks A list of callbacks to add
	     */

	  }, {
	    key: 'on',
	    value: function on(name) {
	      for (var _len2 = arguments.length, callbacks = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        callbacks[_key2 - 1] = arguments[_key2];
	      }

	      this._onFrom.apply(this, ['_events', name].concat(callbacks));
	    }

	    /**
	    * Adds one or more callback to listen for an event.
	    * This event will be only called once.
	    * @param {string} name The name of the callback.
	    * @param {function[]} callbacks A list of callbacks to add
	    */

	  }, {
	    key: 'once',
	    value: function once(name) {
	      for (var _len3 = arguments.length, callbacks = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        callbacks[_key3 - 1] = arguments[_key3];
	      }

	      this._onFrom.apply(this, ['_once', name].concat(callbacks));
	    }

	    /**
	     * Removes callbacks from an event.
	     * @param { string } field The field name 
	     * @param { string } name The event name 
	     * @param { function[] } callbacks the callbacks to remove
	     * @private
	     */

	  }, {
	    key: '_offFrom',
	    value: function _offFrom(field, name) {
	      var events = this[field];

	      for (var _len4 = arguments.length, callbacks = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        callbacks[_key4 - 2] = arguments[_key4];
	      }

	      if (callbacks.length <= 0) {
	        events[name] = [];
	        return;
	      }
	      events[name] = events[name] || [];
	      for (var i = 0; i < callbacks.length; ++i) {
	        var j = events[name].indexOf(callbacks[i]);
	        while (j !== -1) {
	          events[name].splice(j, 1);
	          j = events.indexOf(callbacks[i]);
	        }
	      }
	    }

	    /**
	      * Removes callbacks from an event.
	      * @param {string} name The name of the callback.
	      * @param {function[]} callbacks A list of callbacks to remove 
	      * @warn If the list is empty it will remove all events.
	      */

	  }, {
	    key: 'off',
	    value: function off(name) {
	      for (var _len5 = arguments.length, callbacks = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	        callbacks[_key5 - 1] = arguments[_key5];
	      }

	      this._offFrom.apply(this, ['_events', name].concat(callbacks));
	    }

	    /**
	    * Removes callbacks from an event.
	    * It only removes the one called for be called once.
	    * @param {string} name The name of the callback.
	    * @param {function[]} callbacks A list of callbacks to remove 
	    * @warn If the list is empty it will remove all events.
	    */

	  }, {
	    key: 'offOnce',
	    value: function offOnce(name) {
	      for (var _len6 = arguments.length, callbacks = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	        callbacks[_key6 - 1] = arguments[_key6];
	      }

	      this._offFrom.apply(this, ['_once', name].concat(callbacks));
	    }

	    /**
	     * Call events from a field 
	     * @param {string} field The field name 
	     * @param {string} name The event name 
	     * @param { any[] } ...args The arguments to the callbacks.
	     * @private
	     */

	  }, {
	    key: '_callEventsFrom',
	    value: function _callEventsFrom(field, name) {
	      var events = this[field];
	      events[name] = events[name] || [];
	      var result = true;
	      var length = events[name].length;

	      for (var _len7 = arguments.length, args = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
	        args[_key7 - 2] = arguments[_key7];
	      }

	      for (var i = 0; i < length; ++i) {
	        var _events$name;

	        var r = (_events$name = events[name])[i].apply(_events$name, args);
	        if (typeof r !== 'undefined' && !r) {
	          result = false;
	        }
	      }
	      return result;
	    }

	    /**
	     * Call all regular callbacks assigned to an event name
	     * @param {string} name The name of the callback.
	     * @param { any[]} ...args A list of arguments
	     * @returns false if any of the event's callbacks return false, true otherwise.
	     * @private
	     */

	  }, {
	    key: '_callRegularEvents',
	    value: function _callRegularEvents(name) {
	      for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
	        args[_key8 - 1] = arguments[_key8];
	      }

	      return this._callEventsFrom.apply(this, ['_events', name].concat(args));
	    }

	    /**
	     * Call all once callbacks assigned to an event name
	     * @param {string} name The name of the callback.
	     * @param { any[]} ...args A list of arguments
	     * @returns false if any of the event's callbacks return false, true otherwise.
	     * @private
	     */

	  }, {
	    key: '_callOnceEvents',
	    value: function _callOnceEvents(name) {
	      for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
	        args[_key9 - 1] = arguments[_key9];
	      }

	      var result = this._callEventsFrom.apply(this, ['_once', name].concat(args));
	      this._once[name] = [];
	      return result;
	    }

	    /**
	     * Call all callbacks assigned to an event name
	     * @param {string} name The name of the callback.
	     * @param { any[]} ...args A list of arguments
	     * @returns false if any of the event's callbacks return false, true otherwise.
	     */

	  }, {
	    key: 'fire',
	    value: function fire(name) {
	      for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
	        args[_key10 - 1] = arguments[_key10];
	      }

	      return this._callRegularEvents.apply(this, [name].concat(args)) && this._callOnceEvents.apply(this, [name].concat(args));
	    }

	    /**
	     * Call all callbacks assigned to an event name
	     * @param {string} name The name of the callback.
	     * @param { any[]} ...args A list of arguments
	     * @returns false if any of the event's callbacks return false, true otherwise.
	     */

	  }, {
	    key: 'emit',
	    value: function emit(name) {
	      for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
	        args[_key11 - 1] = arguments[_key11];
	      }

	      return this.fire.apply(this, [name].concat(args));
	    }

	    /**
	     * Adds one or more callback to listen for an event.
	     * @param {string} name The name of the callback.
	     * @param {function[]} callbacks A list of callbacks to add
	     */

	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(name) {
	      for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
	        args[_key12 - 1] = arguments[_key12];
	      }

	      this.on.apply(this, [name].concat(args));
	    }

	    /**
	      * Removes callbacks from an event.
	      * @param {string} name The name of the callback.
	      * @param {function[]} callbacks A list of callbacks to remove 
	      * @warn If the list is empty it will remove all events.
	      */

	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(name) {
	      for (var _len13 = arguments.length, args = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
	        args[_key13 - 1] = arguments[_key13];
	      }

	      this.off.apply(this, [name].concat(args));
	    }
	  }]);

	  return EventManager;
	}();

	exports.default = EventManager;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loader = __webpack_require__(3);

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
	        key: '_starLoad',
	        value: function _starLoad(url, name) {
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _genericEvents = __webpack_require__(1);

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
	            this.events.fire('start', resource, url);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = resources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var name = _step.value;

	                    var asset = this._result[name];
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loader = __webpack_require__(3);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageLoader = function (_Loader) {
	    _inherits(ImageLoader, _Loader);

	    function ImageLoader() {
	        _classCallCheck(this, ImageLoader);

	        return _possibleConstructorReturn(this, (ImageLoader.__proto__ || Object.getPrototypeOf(ImageLoader)).apply(this, arguments));
	    }

	    _createClass(ImageLoader, [{
	        key: '_starLoad',
	        value: function _starLoad(url, name) {
	            var _this2 = this;

	            var file = document.createElement('img');
	            file.onload = function () {
	                return _this2._onSuccess(url, name, file);
	            };
	            file.onerror = function (file, error) {
	                return _this2._onError(url, name, error);
	            };
	            file.src = url;
	        }
	    }]);

	    return ImageLoader;
	}(_loader2.default);

	exports.default = ImageLoader;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loader = __webpack_require__(3);

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
	        key: '_starLoad',
	        value: function _starLoad(url, name) {
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loader = __webpack_require__(3);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VideoLoader = function (_Loader) {
	    _inherits(VideoLoader, _Loader);

	    function VideoLoader() {
	        _classCallCheck(this, VideoLoader);

	        return _possibleConstructorReturn(this, (VideoLoader.__proto__ || Object.getPrototypeOf(VideoLoader)).apply(this, arguments));
	    }

	    _createClass(VideoLoader, [{
	        key: '_starLoad',
	        value: function _starLoad(url, name) {
	            var _this2 = this;

	            var file = document.createElement('video');
	            file.onload = function () {
	                return _this2._onSuccess(url, name, file);
	            };
	            file.onerror = function (file, error) {
	                return _this2._onError(url, name, error);
	            };
	            file.preload = 'auto';
	            file.addEventListener("canplaythrough", function () {
	                return _this2.events.fire('playable', url, name);
	            });
	            file.src = url;
	        }
	    }]);

	    return VideoLoader;
	}(_loader2.default);

	exports.default = VideoLoader;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8)() ? Set : __webpack_require__(9);


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var set, iterator, result;
		if (typeof Set !== 'function') return false;
		set = new Set(['raz', 'dwa', 'trzy']);
		if (String(set) !== '[object Set]') return false;
		if (set.size !== 3) return false;
		if (typeof set.add !== 'function') return false;
		if (typeof set.clear !== 'function') return false;
		if (typeof set.delete !== 'function') return false;
		if (typeof set.entries !== 'function') return false;
		if (typeof set.forEach !== 'function') return false;
		if (typeof set.has !== 'function') return false;
		if (typeof set.keys !== 'function') return false;
		if (typeof set.values !== 'function') return false;

		iterator = set.values();
		result = iterator.next();
		if (result.done !== false) return false;
		if (result.value !== 'raz') return false;

		return true;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var clear          = __webpack_require__(10)
	  , eIndexOf       = __webpack_require__(12)
	  , setPrototypeOf = __webpack_require__(18)
	  , callable       = __webpack_require__(23)
	  , d              = __webpack_require__(24)
	  , ee             = __webpack_require__(36)
	  , Symbol         = __webpack_require__(37)
	  , iterator       = __webpack_require__(42)
	  , forOf          = __webpack_require__(46)
	  , Iterator       = __webpack_require__(56)
	  , isNative       = __webpack_require__(57)

	  , call = Function.prototype.call
	  , defineProperty = Object.defineProperty, getPrototypeOf = Object.getPrototypeOf
	  , SetPoly, getValues, NativeSet;

	if (isNative) NativeSet = Set;

	module.exports = SetPoly = function Set(/*iterable*/) {
		var iterable = arguments[0], self;
		if (!(this instanceof SetPoly)) throw new TypeError('Constructor requires \'new\'');
		if (isNative && setPrototypeOf) self = setPrototypeOf(new NativeSet(), getPrototypeOf(this));
		else self = this;
		if (iterable != null) iterator(iterable);
		defineProperty(self, '__setData__', d('c', []));
		if (!iterable) return self;
		forOf(iterable, function (value) {
			if (eIndexOf.call(this, value) !== -1) return;
			this.push(value);
		}, self.__setData__);
		return self;
	};

	if (isNative) {
		if (setPrototypeOf) setPrototypeOf(SetPoly, NativeSet);
		SetPoly.prototype = Object.create(NativeSet.prototype, { constructor: d(SetPoly) });
	}

	ee(Object.defineProperties(SetPoly.prototype, {
		add: d(function (value) {
			if (this.has(value)) return this;
			this.emit('_add', this.__setData__.push(value) - 1, value);
			return this;
		}),
		clear: d(function () {
			if (!this.__setData__.length) return;
			clear.call(this.__setData__);
			this.emit('_clear');
		}),
		delete: d(function (value) {
			var index = eIndexOf.call(this.__setData__, value);
			if (index === -1) return false;
			this.__setData__.splice(index, 1);
			this.emit('_delete', index, value);
			return true;
		}),
		entries: d(function () { return new Iterator(this, 'key+value'); }),
		forEach: d(function (cb/*, thisArg*/) {
			var thisArg = arguments[1], iterator, result, value;
			callable(cb);
			iterator = this.values();
			result = iterator._next();
			while (result !== undefined) {
				value = iterator._resolve(result);
				call.call(cb, thisArg, value, value, this);
				result = iterator._next();
			}
		}),
		has: d(function (value) {
			return (eIndexOf.call(this.__setData__, value) !== -1);
		}),
		keys: d(getValues = function () { return this.values(); }),
		size: d.gs(function () { return this.__setData__.length; }),
		values: d(function () { return new Iterator(this); }),
		toString: d(function () { return '[object Set]'; })
	}));
	defineProperty(SetPoly.prototype, Symbol.iterator, d(getValues));
	defineProperty(SetPoly.prototype, Symbol.toStringTag, d('c', 'Set'));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Inspired by Google Closure:
	// http://closure-library.googlecode.com/svn/docs/
	// closure_goog_array_array.js.html#goog.array.clear

	'use strict';

	var value = __webpack_require__(11);

	module.exports = function () {
		value(this).length = 0;
		return this;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (value) {
		if (value == null) throw new TypeError("Cannot use null or undefined");
		return value;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toPosInt = __webpack_require__(13)
	  , value    = __webpack_require__(11)

	  , indexOf = Array.prototype.indexOf
	  , hasOwnProperty = Object.prototype.hasOwnProperty
	  , abs = Math.abs, floor = Math.floor;

	module.exports = function (searchElement/*, fromIndex*/) {
		var i, l, fromIndex, val;
		if (searchElement === searchElement) { //jslint: ignore
			return indexOf.apply(this, arguments);
		}

		l = toPosInt(value(this).length);
		fromIndex = arguments[1];
		if (isNaN(fromIndex)) fromIndex = 0;
		else if (fromIndex >= 0) fromIndex = floor(fromIndex);
		else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

		for (i = fromIndex; i < l; ++i) {
			if (hasOwnProperty.call(this, i)) {
				val = this[i];
				if (val !== val) return i; //jslint: ignore
			}
		}
		return -1;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(14)

	  , max = Math.max;

	module.exports = function (value) { return max(0, toInteger(value)); };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var sign = __webpack_require__(15)

	  , abs = Math.abs, floor = Math.floor;

	module.exports = function (value) {
		if (isNaN(value)) return 0;
		value = Number(value);
		if ((value === 0) || !isFinite(value)) return value;
		return sign(value) * floor(abs(value));
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(16)()
		? Math.sign
		: __webpack_require__(17);


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var sign = Math.sign;
		if (typeof sign !== 'function') return false;
		return ((sign(10) === 1) && (sign(-20) === -1));
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (value) {
		value = Number(value);
		if (isNaN(value) || (value === 0)) return value;
		return (value > 0) ? 1 : -1;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(19)()
		? Object.setPrototypeOf
		: __webpack_require__(20);


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var create = Object.create, getPrototypeOf = Object.getPrototypeOf
	  , x = {};

	module.exports = function (/*customCreate*/) {
		var setPrototypeOf = Object.setPrototypeOf
		  , customCreate = arguments[0] || create;
		if (typeof setPrototypeOf !== 'function') return false;
		return getPrototypeOf(setPrototypeOf(customCreate(null), x)) === x;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Big thanks to @WebReflection for sorting this out
	// https://gist.github.com/WebReflection/5593554

	'use strict';

	var isObject      = __webpack_require__(21)
	  , value         = __webpack_require__(11)

	  , isPrototypeOf = Object.prototype.isPrototypeOf
	  , defineProperty = Object.defineProperty
	  , nullDesc = { configurable: true, enumerable: false, writable: true,
			value: undefined }
	  , validate;

	validate = function (obj, prototype) {
		value(obj);
		if ((prototype === null) || isObject(prototype)) return obj;
		throw new TypeError('Prototype must be null or an object');
	};

	module.exports = (function (status) {
		var fn, set;
		if (!status) return null;
		if (status.level === 2) {
			if (status.set) {
				set = status.set;
				fn = function (obj, prototype) {
					set.call(validate(obj, prototype), prototype);
					return obj;
				};
			} else {
				fn = function (obj, prototype) {
					validate(obj, prototype).__proto__ = prototype;
					return obj;
				};
			}
		} else {
			fn = function self(obj, prototype) {
				var isNullBase;
				validate(obj, prototype);
				isNullBase = isPrototypeOf.call(self.nullPolyfill, obj);
				if (isNullBase) delete self.nullPolyfill.__proto__;
				if (prototype === null) prototype = self.nullPolyfill;
				obj.__proto__ = prototype;
				if (isNullBase) defineProperty(self.nullPolyfill, '__proto__', nullDesc);
				return obj;
			};
		}
		return Object.defineProperty(fn, 'level', { configurable: false,
			enumerable: false, writable: false, value: status.level });
	}((function () {
		var x = Object.create(null), y = {}, set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(x, y);
			} catch (ignore) { }
			if (Object.getPrototypeOf(x) === y) return { set: set, level: 2 };
		}

		x.__proto__ = y;
		if (Object.getPrototypeOf(x) === y) return { level: 2 };

		x = {};
		x.__proto__ = y;
		if (Object.getPrototypeOf(x) === y) return { level: 1 };

		return false;
	}())));

	__webpack_require__(22);


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var map = { function: true, object: true };

	module.exports = function (x) {
		return ((x != null) && map[typeof x]) || false;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// Workaround for http://code.google.com/p/v8/issues/detail?id=2804

	'use strict';

	var create = Object.create, shim;

	if (!__webpack_require__(19)()) {
		shim = __webpack_require__(20);
	}

	module.exports = (function () {
		var nullObject, props, desc;
		if (!shim) return create;
		if (shim.level !== 1) return create;

		nullObject = {};
		props = {};
		desc = { configurable: false, enumerable: false, writable: true,
			value: undefined };
		Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
			if (name === '__proto__') {
				props[name] = { configurable: true, enumerable: false, writable: true,
					value: undefined };
				return;
			}
			props[name] = desc;
		});
		Object.defineProperties(nullObject, props);

		Object.defineProperty(shim, 'nullPolyfill', { configurable: false,
			enumerable: false, writable: false, value: nullObject });

		return function (prototype, props) {
			return create((prototype === null) ? nullObject : prototype, props);
		};
	}());


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (fn) {
		if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
		return fn;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign        = __webpack_require__(25)
	  , normalizeOpts = __webpack_require__(31)
	  , isCallable    = __webpack_require__(32)
	  , contains      = __webpack_require__(33)

	  , d;

	d = module.exports = function (dscr, value/*, options*/) {
		var c, e, w, options, desc;
		if ((arguments.length < 2) || (typeof dscr !== 'string')) {
			options = value;
			value = dscr;
			dscr = null;
		} else {
			options = arguments[2];
		}
		if (dscr == null) {
			c = w = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
			w = contains.call(dscr, 'w');
		}

		desc = { value: value, configurable: c, enumerable: e, writable: w };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};

	d.gs = function (dscr, get, set/*, options*/) {
		var c, e, options, desc;
		if (typeof dscr !== 'string') {
			options = set;
			set = get;
			get = dscr;
			dscr = null;
		} else {
			options = arguments[3];
		}
		if (get == null) {
			get = undefined;
		} else if (!isCallable(get)) {
			options = get;
			get = set = undefined;
		} else if (set == null) {
			set = undefined;
		} else if (!isCallable(set)) {
			options = set;
			set = undefined;
		}
		if (dscr == null) {
			c = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
		}

		desc = { get: get, set: set, configurable: c, enumerable: e };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(26)()
		? Object.assign
		: __webpack_require__(27);


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var assign = Object.assign, obj;
		if (typeof assign !== 'function') return false;
		obj = { foo: 'raz' };
		assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
		return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys  = __webpack_require__(28)
	  , value = __webpack_require__(11)

	  , max = Math.max;

	module.exports = function (dest, src/*, …srcn*/) {
		var error, i, l = max(arguments.length, 2), assign;
		dest = Object(value(dest));
		assign = function (key) {
			try { dest[key] = src[key]; } catch (e) {
				if (!error) error = e;
			}
		};
		for (i = 1; i < l; ++i) {
			src = arguments[i];
			keys(src).forEach(assign);
		}
		if (error !== undefined) throw error;
		return dest;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(29)()
		? Object.keys
		: __webpack_require__(30);


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		try {
			Object.keys('primitive');
			return true;
		} catch (e) { return false; }
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	var keys = Object.keys;

	module.exports = function (object) {
		return keys(object == null ? object : Object(object));
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	var forEach = Array.prototype.forEach, create = Object.create;

	var process = function (src, obj) {
		var key;
		for (key in src) obj[key] = src[key];
	};

	module.exports = function (options/*, …options*/) {
		var result = create(null);
		forEach.call(arguments, function (options) {
			if (options == null) return;
			process(Object(options), result);
		});
		return result;
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	// Deprecated

	'use strict';

	module.exports = function (obj) { return typeof obj === 'function'; };


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(34)()
		? String.prototype.contains
		: __webpack_require__(35);


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	var str = 'razdwatrzy';

	module.exports = function () {
		if (typeof str.contains !== 'function') return false;
		return ((str.contains('dwa') === true) && (str.contains('foo') === false));
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	var indexOf = String.prototype.indexOf;

	module.exports = function (searchString/*, position*/) {
		return indexOf.call(this, searchString, arguments[1]) > -1;
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var d        = __webpack_require__(24)
	  , callable = __webpack_require__(23)

	  , apply = Function.prototype.apply, call = Function.prototype.call
	  , create = Object.create, defineProperty = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , hasOwnProperty = Object.prototype.hasOwnProperty
	  , descriptor = { configurable: true, enumerable: false, writable: true }

	  , on, once, off, emit, methods, descriptors, base;

	on = function (type, listener) {
		var data;

		callable(listener);

		if (!hasOwnProperty.call(this, '__ee__')) {
			data = descriptor.value = create(null);
			defineProperty(this, '__ee__', descriptor);
			descriptor.value = null;
		} else {
			data = this.__ee__;
		}
		if (!data[type]) data[type] = listener;
		else if (typeof data[type] === 'object') data[type].push(listener);
		else data[type] = [data[type], listener];

		return this;
	};

	once = function (type, listener) {
		var once, self;

		callable(listener);
		self = this;
		on.call(this, type, once = function () {
			off.call(self, type, once);
			apply.call(listener, this, arguments);
		});

		once.__eeOnceListener__ = listener;
		return this;
	};

	off = function (type, listener) {
		var data, listeners, candidate, i;

		callable(listener);

		if (!hasOwnProperty.call(this, '__ee__')) return this;
		data = this.__ee__;
		if (!data[type]) return this;
		listeners = data[type];

		if (typeof listeners === 'object') {
			for (i = 0; (candidate = listeners[i]); ++i) {
				if ((candidate === listener) ||
						(candidate.__eeOnceListener__ === listener)) {
					if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
					else listeners.splice(i, 1);
				}
			}
		} else {
			if ((listeners === listener) ||
					(listeners.__eeOnceListener__ === listener)) {
				delete data[type];
			}
		}

		return this;
	};

	emit = function (type) {
		var i, l, listener, listeners, args;

		if (!hasOwnProperty.call(this, '__ee__')) return;
		listeners = this.__ee__[type];
		if (!listeners) return;

		if (typeof listeners === 'object') {
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

			listeners = listeners.slice();
			for (i = 0; (listener = listeners[i]); ++i) {
				apply.call(listener, this, args);
			}
		} else {
			switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
			}
		}
	};

	methods = {
		on: on,
		once: once,
		off: off,
		emit: emit
	};

	descriptors = {
		on: d(on),
		once: d(once),
		off: d(off),
		emit: d(emit)
	};

	base = defineProperties({}, descriptors);

	module.exports = exports = function (o) {
		return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
	};
	exports.methods = methods;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(38)() ? Symbol : __webpack_require__(39);


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	var validTypes = { object: true, symbol: true };

	module.exports = function () {
		var symbol;
		if (typeof Symbol !== 'function') return false;
		symbol = Symbol('test symbol');
		try { String(symbol); } catch (e) { return false; }

		// Return 'true' also for polyfills
		if (!validTypes[typeof Symbol.iterator]) return false;
		if (!validTypes[typeof Symbol.toPrimitive]) return false;
		if (!validTypes[typeof Symbol.toStringTag]) return false;

		return true;
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// ES2015 Symbol polyfill for environments that do not support it (or partially support it)

	'use strict';

	var d              = __webpack_require__(24)
	  , validateSymbol = __webpack_require__(40)

	  , create = Object.create, defineProperties = Object.defineProperties
	  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
	  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
	  , isNativeSafe;

	if (typeof Symbol === 'function') {
		NativeSymbol = Symbol;
		try {
			String(NativeSymbol());
			isNativeSafe = true;
		} catch (ignore) {}
	}

	var generateName = (function () {
		var created = create(null);
		return function (desc) {
			var postfix = 0, name, ie11BugWorkaround;
			while (created[desc + (postfix || '')]) ++postfix;
			desc += (postfix || '');
			created[desc] = true;
			name = '@@' + desc;
			defineProperty(objPrototype, name, d.gs(null, function (value) {
				// For IE11 issue see:
				// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
				//    ie11-broken-getters-on-dom-objects
				// https://github.com/medikoo/es6-symbol/issues/12
				if (ie11BugWorkaround) return;
				ie11BugWorkaround = true;
				defineProperty(this, name, d(value));
				ie11BugWorkaround = false;
			}));
			return name;
		};
	}());

	// Internal constructor (not one exposed) for creating Symbol instances.
	// This one is used to ensure that `someSymbol instanceof Symbol` always return false
	HiddenSymbol = function Symbol(description) {
		if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
		return SymbolPolyfill(description);
	};

	// Exposed `Symbol` constructor
	// (returns instances of HiddenSymbol)
	module.exports = SymbolPolyfill = function Symbol(description) {
		var symbol;
		if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
		if (isNativeSafe) return NativeSymbol(description);
		symbol = create(HiddenSymbol.prototype);
		description = (description === undefined ? '' : String(description));
		return defineProperties(symbol, {
			__description__: d('', description),
			__name__: d('', generateName(description))
		});
	};
	defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (globalSymbols[key]) return globalSymbols[key];
			return (globalSymbols[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (s) {
			var key;
			validateSymbol(s);
			for (key in globalSymbols) if (globalSymbols[key] === s) return key;
		}),

		// If there's native implementation of given symbol, let's fallback to it
		// to ensure proper interoperability with other native functions e.g. Array.from
		hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
		isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
			SymbolPolyfill('isConcatSpreadable')),
		iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
		match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
		replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
		search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
		species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
		split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
		toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
		toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
		unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
	});

	// Internal tweaks for real symbol producer
	defineProperties(HiddenSymbol.prototype, {
		constructor: d(SymbolPolyfill),
		toString: d('', function () { return this.__name__; })
	});

	// Proper implementation of methods exposed on Symbol.prototype
	// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
	defineProperties(SymbolPolyfill.prototype, {
		toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
		valueOf: d(function () { return validateSymbol(this); })
	});
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === 'symbol') return symbol;
		return symbol.toString();
	}));
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

	// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

	// Note: It's important to define `toPrimitive` as last one, as some implementations
	// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
	// And that may invoke error in definition flow:
	// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(41);

	module.exports = function (value) {
		if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
		return value;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (x) {
		if (!x) return false;
		if (typeof x === 'symbol') return true;
		if (!x.constructor) return false;
		if (x.constructor.name !== 'Symbol') return false;
		return (x[x.constructor.toStringTag] === 'Symbol');
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isIterable = __webpack_require__(43);

	module.exports = function (value) {
		if (!isIterable(value)) throw new TypeError(value + " is not iterable");
		return value;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArguments    = __webpack_require__(44)
	  , isString       = __webpack_require__(45)
	  , iteratorSymbol = __webpack_require__(37).iterator

	  , isArray = Array.isArray;

	module.exports = function (value) {
		if (value == null) return false;
		if (isArray(value)) return true;
		if (isString(value)) return true;
		if (isArguments(value)) return true;
		return (typeof value[iteratorSymbol] === 'function');
	};


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString

	  , id = toString.call((function () { return arguments; }()));

	module.exports = function (x) { return (toString.call(x) === id); };


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString

	  , id = toString.call('');

	module.exports = function (x) {
		return (typeof x === 'string') || (x && (typeof x === 'object') &&
			((x instanceof String) || (toString.call(x) === id))) || false;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArguments = __webpack_require__(44)
	  , callable    = __webpack_require__(23)
	  , isString    = __webpack_require__(45)
	  , get         = __webpack_require__(47)

	  , isArray = Array.isArray, call = Function.prototype.call
	  , some = Array.prototype.some;

	module.exports = function (iterable, cb/*, thisArg*/) {
		var mode, thisArg = arguments[2], result, doBreak, broken, i, l, char, code;
		if (isArray(iterable) || isArguments(iterable)) mode = 'array';
		else if (isString(iterable)) mode = 'string';
		else iterable = get(iterable);

		callable(cb);
		doBreak = function () { broken = true; };
		if (mode === 'array') {
			some.call(iterable, function (value) {
				call.call(cb, thisArg, value, doBreak);
				if (broken) return true;
			});
			return;
		}
		if (mode === 'string') {
			l = iterable.length;
			for (i = 0; i < l; ++i) {
				char = iterable[i];
				if ((i + 1) < l) {
					code = char.charCodeAt(0);
					if ((code >= 0xD800) && (code <= 0xDBFF)) char += iterable[++i];
				}
				call.call(cb, thisArg, char, doBreak);
				if (broken) break;
			}
			return;
		}
		result = iterable.next();

		while (!result.done) {
			call.call(cb, thisArg, result.value, doBreak);
			if (broken) return;
			result = iterable.next();
		}
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArguments    = __webpack_require__(44)
	  , isString       = __webpack_require__(45)
	  , ArrayIterator  = __webpack_require__(48)
	  , StringIterator = __webpack_require__(55)
	  , iterable       = __webpack_require__(42)
	  , iteratorSymbol = __webpack_require__(37).iterator;

	module.exports = function (obj) {
		if (typeof iterable(obj)[iteratorSymbol] === 'function') return obj[iteratorSymbol]();
		if (isArguments(obj)) return new ArrayIterator(obj);
		if (isString(obj)) return new StringIterator(obj);
		return new ArrayIterator(obj);
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var setPrototypeOf = __webpack_require__(18)
	  , contains       = __webpack_require__(33)
	  , d              = __webpack_require__(24)
	  , Iterator       = __webpack_require__(49)

	  , defineProperty = Object.defineProperty
	  , ArrayIterator;

	ArrayIterator = module.exports = function (arr, kind) {
		if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
		Iterator.call(this, arr);
		if (!kind) kind = 'value';
		else if (contains.call(kind, 'key+value')) kind = 'key+value';
		else if (contains.call(kind, 'key')) kind = 'key';
		else kind = 'value';
		defineProperty(this, '__kind__', d('', kind));
	};
	if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

	ArrayIterator.prototype = Object.create(Iterator.prototype, {
		constructor: d(ArrayIterator),
		_resolve: d(function (i) {
			if (this.__kind__ === 'value') return this.__list__[i];
			if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
			return i;
		}),
		toString: d(function () { return '[object Array Iterator]'; })
	});


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var clear    = __webpack_require__(10)
	  , assign   = __webpack_require__(25)
	  , callable = __webpack_require__(23)
	  , value    = __webpack_require__(11)
	  , d        = __webpack_require__(24)
	  , autoBind = __webpack_require__(50)
	  , Symbol   = __webpack_require__(37)

	  , defineProperty = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , Iterator;

	module.exports = Iterator = function (list, context) {
		if (!(this instanceof Iterator)) return new Iterator(list, context);
		defineProperties(this, {
			__list__: d('w', value(list)),
			__context__: d('w', context),
			__nextIndex__: d('w', 0)
		});
		if (!context) return;
		callable(context.on);
		context.on('_add', this._onAdd);
		context.on('_delete', this._onDelete);
		context.on('_clear', this._onClear);
	};

	defineProperties(Iterator.prototype, assign({
		constructor: d(Iterator),
		_next: d(function () {
			var i;
			if (!this.__list__) return;
			if (this.__redo__) {
				i = this.__redo__.shift();
				if (i !== undefined) return i;
			}
			if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
			this._unBind();
		}),
		next: d(function () { return this._createResult(this._next()); }),
		_createResult: d(function (i) {
			if (i === undefined) return { done: true, value: undefined };
			return { done: false, value: this._resolve(i) };
		}),
		_resolve: d(function (i) { return this.__list__[i]; }),
		_unBind: d(function () {
			this.__list__ = null;
			delete this.__redo__;
			if (!this.__context__) return;
			this.__context__.off('_add', this._onAdd);
			this.__context__.off('_delete', this._onDelete);
			this.__context__.off('_clear', this._onClear);
			this.__context__ = null;
		}),
		toString: d(function () { return '[object Iterator]'; })
	}, autoBind({
		_onAdd: d(function (index) {
			if (index >= this.__nextIndex__) return;
			++this.__nextIndex__;
			if (!this.__redo__) {
				defineProperty(this, '__redo__', d('c', [index]));
				return;
			}
			this.__redo__.forEach(function (redo, i) {
				if (redo >= index) this.__redo__[i] = ++redo;
			}, this);
			this.__redo__.push(index);
		}),
		_onDelete: d(function (index) {
			var i;
			if (index >= this.__nextIndex__) return;
			--this.__nextIndex__;
			if (!this.__redo__) return;
			i = this.__redo__.indexOf(index);
			if (i !== -1) this.__redo__.splice(i, 1);
			this.__redo__.forEach(function (redo, i) {
				if (redo > index) this.__redo__[i] = --redo;
			}, this);
		}),
		_onClear: d(function () {
			if (this.__redo__) clear.call(this.__redo__);
			this.__nextIndex__ = 0;
		})
	})));

	defineProperty(Iterator.prototype, Symbol.iterator, d(function () {
		return this;
	}));
	defineProperty(Iterator.prototype, Symbol.toStringTag, d('', 'Iterator'));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var copy       = __webpack_require__(51)
	  , map        = __webpack_require__(52)
	  , callable   = __webpack_require__(23)
	  , validValue = __webpack_require__(11)

	  , bind = Function.prototype.bind, defineProperty = Object.defineProperty
	  , hasOwnProperty = Object.prototype.hasOwnProperty
	  , define;

	define = function (name, desc, bindTo) {
		var value = validValue(desc) && callable(desc.value), dgs;
		dgs = copy(desc);
		delete dgs.writable;
		delete dgs.value;
		dgs.get = function () {
			if (hasOwnProperty.call(this, name)) return value;
			desc.value = bind.call(value, (bindTo == null) ? this : this[bindTo]);
			defineProperty(this, name, desc);
			return this[name];
		};
		return dgs;
	};

	module.exports = function (props/*, bindTo*/) {
		var bindTo = arguments[1];
		return map(props, function (desc, name) {
			return define(name, desc, bindTo);
		});
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(25)
	  , value  = __webpack_require__(11);

	module.exports = function (obj) {
		var copy = Object(value(obj));
		if (copy !== obj) return copy;
		return assign({}, obj);
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var callable = __webpack_require__(23)
	  , forEach  = __webpack_require__(53)

	  , call = Function.prototype.call;

	module.exports = function (obj, cb/*, thisArg*/) {
		var o = {}, thisArg = arguments[2];
		callable(cb);
		forEach(obj, function (value, key, obj, index) {
			o[key] = call.call(cb, thisArg, value, key, obj, index);
		});
		return o;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(54)('forEach');


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// Internal method, used by iteration functions.
	// Calls a function for each key-value pair found in object
	// Optionally takes compareFn to iterate object in specific order

	'use strict';

	var callable = __webpack_require__(23)
	  , value    = __webpack_require__(11)

	  , bind = Function.prototype.bind, call = Function.prototype.call, keys = Object.keys
	  , propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

	module.exports = function (method, defVal) {
		return function (obj, cb/*, thisArg, compareFn*/) {
			var list, thisArg = arguments[2], compareFn = arguments[3];
			obj = Object(value(obj));
			callable(cb);

			list = keys(obj);
			if (compareFn) {
				list.sort((typeof compareFn === 'function') ? bind.call(compareFn, obj) : undefined);
			}
			if (typeof method !== 'function') method = list[method];
			return call.call(method, list, function (key, index) {
				if (!propertyIsEnumerable.call(obj, key)) return defVal;
				return call.call(cb, thisArg, obj[key], key, obj, index);
			});
		};
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// Thanks @mathiasbynens
	// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

	'use strict';

	var setPrototypeOf = __webpack_require__(18)
	  , d              = __webpack_require__(24)
	  , Iterator       = __webpack_require__(49)

	  , defineProperty = Object.defineProperty
	  , StringIterator;

	StringIterator = module.exports = function (str) {
		if (!(this instanceof StringIterator)) return new StringIterator(str);
		str = String(str);
		Iterator.call(this, str);
		defineProperty(this, '__length__', d('', str.length));

	};
	if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

	StringIterator.prototype = Object.create(Iterator.prototype, {
		constructor: d(StringIterator),
		_next: d(function () {
			if (!this.__list__) return;
			if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
			this._unBind();
		}),
		_resolve: d(function (i) {
			var char = this.__list__[i], code;
			if (this.__nextIndex__ === this.__length__) return char;
			code = char.charCodeAt(0);
			if ((code >= 0xD800) && (code <= 0xDBFF)) return char + this.__list__[this.__nextIndex__++];
			return char;
		}),
		toString: d(function () { return '[object String Iterator]'; })
	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var setPrototypeOf    = __webpack_require__(18)
	  , contains          = __webpack_require__(33)
	  , d                 = __webpack_require__(24)
	  , Iterator          = __webpack_require__(49)
	  , toStringTagSymbol = __webpack_require__(37).toStringTag

	  , defineProperty = Object.defineProperty
	  , SetIterator;

	SetIterator = module.exports = function (set, kind) {
		if (!(this instanceof SetIterator)) return new SetIterator(set, kind);
		Iterator.call(this, set.__setData__, set);
		if (!kind) kind = 'value';
		else if (contains.call(kind, 'key+value')) kind = 'key+value';
		else kind = 'value';
		defineProperty(this, '__kind__', d('', kind));
	};
	if (setPrototypeOf) setPrototypeOf(SetIterator, Iterator);

	SetIterator.prototype = Object.create(Iterator.prototype, {
		constructor: d(SetIterator),
		_resolve: d(function (i) {
			if (this.__kind__ === 'value') return this.__list__[i];
			return [this.__list__[i], this.__list__[i]];
		}),
		toString: d(function () { return '[object Set Iterator]'; })
	});
	defineProperty(SetIterator.prototype, toStringTagSymbol, d('c', 'Set Iterator'));


/***/ },
/* 57 */
/***/ function(module, exports) {

	// Exports true if environment provides native `Set` implementation,
	// whatever that is.

	'use strict';

	module.exports = (function () {
		if (typeof Set === 'undefined') return false;
		return (Object.prototype.toString.call(Set.prototype) === '[object Set]');
	}());


/***/ }
/******/ ]);