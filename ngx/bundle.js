'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var OpenInstall = /** @class */ (function (_super) {
    tslib.__extends(OpenInstall, _super);
    function OpenInstall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenInstall.prototype.configAndroid = function (options) { return core.cordova(this, "configAndroid", { "sync": true, "platforms": ["Android"] }, arguments); };
    OpenInstall.prototype.serialEnabled = function (enabled) { return core.cordova(this, "serialEnabled", { "sync": true }, arguments); };
    OpenInstall.prototype.clipBoardEnabled = function (enabled) { return core.cordova(this, "clipBoardEnabled", { "sync": true }, arguments); };
    OpenInstall.prototype.init = function () { return core.cordova(this, "init", { "sync": true }, arguments); };
    OpenInstall.prototype.getInstall = function (onSuccess, onError, time) { return core.cordova(this, "getInstall", { "sync": true }, arguments); };
    OpenInstall.prototype.getInstallCanRetry = function (onSuccess, onError, time) { return core.cordova(this, "getInstallCanRetry", { "sync": true, "platforms": ["Android"] }, arguments); };
    OpenInstall.prototype.registerWakeUpHandler = function (onSuccess, onError) { return core.cordova(this, "registerWakeUpHandler", { "sync": true }, arguments); };
    OpenInstall.prototype.reportRegister = function () { return core.cordova(this, "reportRegister", { "sync": true }, arguments); };
    OpenInstall.prototype.reportEffectPoint = function (pointId, pointValue, extras) { return core.cordova(this, "reportEffectPoint", { "sync": true }, arguments); };
    OpenInstall.prototype.reportShare = function (onSuccess, onError, shareCode, sharePlatform) { return core.cordova(this, "reportShare", { "sync": true }, arguments); };
    OpenInstall.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenInstall, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OpenInstall.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenInstall });
    OpenInstall.pluginName = "OpenInstall";
    OpenInstall.plugin = "cordova-plugin-openinstall";
    OpenInstall.pluginRef = "openinstall";
    OpenInstall.repo = "https://github.com/openinstall/cordova-plugin-openinstall";
    OpenInstall.platforms = ["Android", "iOS"];
    OpenInstall = tslib.__decorate([], OpenInstall);
    return OpenInstall;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OpenInstall, decorators: [{
            type: i0.Injectable
        }], propDecorators: { configAndroid: [], serialEnabled: [], clipBoardEnabled: [], init: [], getInstall: [], getInstallCanRetry: [], registerWakeUpHandler: [], reportRegister: [], reportEffectPoint: [], reportShare: [] } });

exports.OpenInstall = OpenInstall;
