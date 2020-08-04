"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function addRequestIdleCallback() {
  window.requestIdleCallback = window.requestIdleCallback || function (handler) {
    var startTime = Date.now();
    return setTimeout(function () {
      handler({
        didTimeout: false,
        timeRemaining: function timeRemaining() {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        }
      });
    }, 1);
  };
})();

var Monitoring = /*#__PURE__*/function () {
  function Monitoring(apiKey) {
    _classCallCheck(this, Monitoring);

    this.apiKey = apiKey;
  }

  _createClass(Monitoring, [{
    key: "use",
    value: function use() {
      if (this.apiKey) {
        new ObservePerformance(this.apiKey).observe();
        new EvilMethodsCheck(this.apiKey).checkUsingEval();
        new EvilMethodsCheck(this.apiKey).checkUsingDocumentWrite();
        new MetaTags(this.apiKey).checkMetaTags();
      }
    }
  }]);

  return Monitoring;
}(); // not recommended methods


var EvilMethodsCheck = /*#__PURE__*/function (_Monitoring) {
  _inherits(EvilMethodsCheck, _Monitoring);

  var _super = _createSuper(EvilMethodsCheck);

  function EvilMethodsCheck() {
    _classCallCheck(this, EvilMethodsCheck);

    return _super.apply(this, arguments);
  }

  _createClass(EvilMethodsCheck, [{
    key: "checkUsingDocumentWrite",
    value: function checkUsingDocumentWrite() {
      var _this = this;

      if (document) {
        var write = document.write;

        document.write = function (params) {
          Request.postRequest('info', [{
            date: Date.now(),
            appId: _this.apiKey,
            type: 'write',
            message: "don't use document.write()",
            details: 'see more at: https://developer.mozilla.org/ru/docs/Web/API/Document/write'
          }]);
          write.call(document, params);
        };
      }
    }
  }, {
    key: "checkUsingEval",
    value: function checkUsingEval() {
      var _this2 = this;

      if (window) {
        var evaluate = window.eval;

        window.eval = function (params) {
          Request.postRequest('info', [{
            date: Date.now(),
            appId: _this2.apiKey,
            type: 'eval',
            message: "don't use eval()",
            details: 'see more at: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval'
          }]);
          evaluate.call(window, params);
        };
      }
    }
  }]);

  return EvilMethodsCheck;
}(Monitoring);

var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, null, [{
    key: "postRequest",
    value: function postRequest(endpoint, data) {
      if (data) {
        data.forEach(function (item) {
          requestIdleCallback(function () {
            fetch("https://web-monitoring-cba12.firebaseio.com/".concat(endpoint, ".json"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(item)
            });
          });
        });
      }
    }
  }]);

  return Request;
}();

var ObservePerformance = /*#__PURE__*/function (_Monitoring2) {
  _inherits(ObservePerformance, _Monitoring2);

  var _super2 = _createSuper(ObservePerformance);

  function ObservePerformance() {
    _classCallCheck(this, ObservePerformance);

    return _super2.apply(this, arguments);
  }

  _createClass(ObservePerformance, [{
    key: "performanceObserveInstance",
    value: function performanceObserveInstance() {
      var _this3 = this;

      return new PerformanceObserver(function (list) {
        var resources = _this3.dataProcessing(list.getEntries().filter(function (item) {
          return _instanceof(item, PerformanceResourceTiming);
        }));

        resources.then(function (data) {
          Request.postRequest('analytics', data);
        });
      });
    }
  }, {
    key: "dataProcessing",
    value: function dataProcessing(data) {
      var _this4 = this;

      var TIMING = 15000;
      return new Promise(function (resolve, reject) {
        if (data) {
          setTimeout(function () {
            resolve(new DataAnalytics(_this4.apiKey).mutateObjects(data));
          }, TIMING);
        } else {
          reject('something went to wrong');
        }
      });
    }
  }, {
    key: "observe",
    value: function observe() {
      var po = this.performanceObserveInstance();
      po.observe({
        type: 'resource',
        buffered: true
      });
      po.observe({
        type: 'navigation',
        buffered: true
      });
      ObservePerformance.disconnect(po);
    }
  }], [{
    key: "disconnect",
    value: function disconnect(po) {
      var DISCONNECT_TIMING = 25000;
      setTimeout(function () {
        po.disconnect();
      }, DISCONNECT_TIMING);
    }
  }]);

  return ObservePerformance;
}(Monitoring);

var DataAnalytics = /*#__PURE__*/function (_Monitoring3) {
  _inherits(DataAnalytics, _Monitoring3);

  var _super3 = _createSuper(DataAnalytics);

  function DataAnalytics() {
    _classCallCheck(this, DataAnalytics);

    return _super3.apply(this, arguments);
  }

  _createClass(DataAnalytics, [{
    key: "eachData",
    value: function eachData(item) {
      return {
        date: Date.now(),
        appId: this.apiKey,
        duration: item.duration,
        encodedBodySize: item.encodedBodySize,
        entryType: item.entryType,
        fetchStart: item.fetchStart,
        initiatorType: item.initiatorType,
        name: item.name,
        startTime: item.startTime,
        transferSize: item.transferSize
      };
    }
  }, {
    key: "mutateObjects",
    value: function mutateObjects(arg) {
      var _this5 = this;

      var tempArray = [];
      tempArray.push(arg);
      var flatedArray = tempArray.flat(2);
      return flatedArray.map(function (item) {
        if (item.initiatorType === 'css' || item.initiatorType === 'script' || item.initiatorType === 'link') {
          var data = _this5.eachData(item);

          data.isCached = item.transferSize === 0;
          data.isMinified = item.name.includes('.css') || item.name.includes('.js') ? item.name.includes('.min') : null;
          return data;
        } else if (item.initiatorType === 'navigation') {
          var _data = _this5.eachData(item);

          _data.domContentLoaded = item.domContentLoadedEventEnd - item.domContentLoadedEventStart;
          _data.domComplete = item.domComplete;
          _data.domInteractive = item.domInteractive;
          return _data;
        } else if (item.initiatorType === 'xmlhttprequest' || item.initiatorType === 'fetch') {
          return _this5.eachData(item);
        } else if (item.initiatorType === 'img') {
          var _data2 = _this5.eachData(item);

          _data2.isCached = item.transferSize === 0;
          _data2.needToChangeImgFormat = !/.*\.(webp+|svg+|gif+)/ig.test(item.name);
          return _data2;
        } else {
          var _data3 = _this5.eachData(item);

          _data3.isCached = item.transferSize === 0;
          return _data3;
        }
      });
    }
  }]);

  return DataAnalytics;
}(Monitoring);

var MetaTags = /*#__PURE__*/function (_Monitoring4) {
  _inherits(MetaTags, _Monitoring4);

  var _super4 = _createSuper(MetaTags);

  function MetaTags() {
    _classCallCheck(this, MetaTags);

    return _super4.apply(this, arguments);
  }

  _createClass(MetaTags, [{
    key: "checkMetaTags",
    value: function checkMetaTags() {
      var meta = _toConsumableArray(document.querySelectorAll('meta'));

      var title = document.querySelector('title');
      var metaNames = [];
      var badMetaTagsName = [];
      var goodMetaTagsName = [];
      var goodMetaTags = ['description', 'viewport'];
      var badMetaTags = ['author', 'web author', 'revisit after', 'rating', 'expiration', 'data', 'copyright', 'abstract', 'distribution', 'generator', 'cache-control', 'resource type'];

      var _iterator = _createForOfIteratorHelper(meta),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          metaNames.push(item.name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      meta.forEach(function (item) {
        if (badMetaTags.includes(item.name)) {
          badMetaTagsName.push(item.name);
        }
      });
      goodMetaTags.forEach(function (item) {
        if (!metaNames.includes(item)) {
          goodMetaTagsName.push(item);
        }
      });

      if (title.text.length > 50) {
        Request.postRequest('info', [{
          appId: this.apiKey,
          date: Date.now(),
          message: 'Your title is too long',
          type: 'title',
          details: 'The title should not have more than 50 characters'
        }]);
      }

      if (badMetaTagsName.length) {
        Request.postRequest('info', [{
          appId: this.apiKey,
          date: Date.now(),
          message: "Unnecessary meta tags - ".concat(badMetaTagsName.join(', '), " "),
          type: 'badMeta',
          details: 'see more at: https://metatags.io/'
        }]);
      }

      if (goodMetaTagsName.length) {
        Request.postRequest('info', [{
          appId: this.apiKey,
          date: Date.now(),
          message: "Use ".concat(goodMetaTagsName.join(", "), " meta tags for better SEO results"),
          type: 'goodMeta',
          details: 'see more at: https://metatags.io/'
        }]);
      }
    }
  }]);

  return MetaTags;
}(Monitoring);

module.exports = Monitoring;