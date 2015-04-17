System.register(['bean', 'zest', 'ng-harmony'], function (_export) {
    var bean, zest, Ctrl, _slicedToArray, _classCallCheck, _get, _inherits, PowerCtrl;

    return {
        setters: [function (_bean) {
            bean = _bean['default'];
        }, function (_zest) {
            zest = _zest['default'];
        }, function (_ngHarmony) {
            Ctrl = _ngHarmony.Ctrl;
        }],
        execute: function () {
            'use strict';

            _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            PowerCtrl = (function (_Ctrl) {
                function PowerCtrl() {
                    var _this = this;

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _classCallCheck(this, PowerCtrl);

                    _get(Object.getPrototypeOf(PowerCtrl.prototype), 'constructor', this).apply(this, args);
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = this.iterate(this.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _step$value = _slicedToArray(_step.value, 2);

                            var key = _step$value[0];
                            var fn = _step$value[1];

                            if (typeof fn !== 'function' || !! ~['constructor', 'initialize'].indexOf(key) || key[0] === '_') {
                                continue;
                            }
                            if (key.match('::')) {
                                var _iteratorNormalCompletion2;

                                var _didIteratorError2;

                                var _iteratorError2;

                                var _iterator2, _step2;

                                var _step2$value;

                                (function () {
                                    var tokens = key.split('::');
                                    if (tokens[2] !== undefined && tokens[2] !== null && !! ~tokens[2].indexOf('>')) {
                                        tokens = tokens.splice(0, 2).concat(tokens[0].split('>'));
                                    }
                                    el = _this.$element ? _this.$element.context : zest('[ng-app]', document.body)[0];
                                    _iteratorNormalCompletion2 = true;
                                    _didIteratorError2 = false;
                                    _iteratorError2 = undefined;

                                    try {
                                        for (_iterator2 = (tokens[0] ? zest(tokens[0], el).entries() : [el].entries())[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            _step2$value = _slicedToArray(_step2.value, 2);
                                            var i = _step2$value[0];
                                            var _el = _step2$value[1];

                                            (function (_i, _el, _fn) {
                                                __fn = function (ev) {
                                                    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                                        args[_key2 - 1] = arguments[_key2];
                                                    }

                                                    if (tokens[2] !== undefined && tokens[2] !== null) {
                                                        if (tokens[3] !== undefined && tokens[3] !== null) {
                                                            var __el = ev.currentTarget.parentNode;
                                                            while (!zest.matches(__el, tokens[3])) {
                                                                __el = __el.parentNode;
                                                            }
                                                            var list = Array.prototype.slice.call(__el.parentNode.childNodes);
                                                            _this.$scope.i = list.indexOf(__el);
                                                        } else {
                                                            var __el = ev.currentTarget;
                                                            var list = Array.prototype.slice.call(__el.parentNode.childNodes);
                                                            _this.$scope.i = list.indexOf(__el);
                                                        }
                                                    }
                                                    _fn.call.apply(_fn, [_this, ev].concat(args));
                                                    _this._digest();
                                                };
                                                bean.on(_el, tokens[1], tokens[2] || __fn, tokens[2] ? __fn : null);
                                            })(i, _el, fn);
                                        }
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                                _iterator2['return']();
                                            }
                                        } finally {
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }
                                })();
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator['return']) {
                                _iterator['return']();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }

                _inherits(PowerCtrl, _Ctrl);

                return PowerCtrl;
            })(Ctrl);
        }
    };
});

//# sourceMappingURL=system_module.js.map