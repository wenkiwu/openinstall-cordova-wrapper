var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var OpenInstallOriginal = /** @class */ (function (_super) {
    __extends(OpenInstallOriginal, _super);
    function OpenInstallOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenInstallOriginal.prototype.configAndroid = function (options) { return cordova(this, "configAndroid", { "sync": true, "platforms": ["Android"] }, arguments); };
    OpenInstallOriginal.prototype.serialEnabled = function (enabled) { return cordova(this, "serialEnabled", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.clipBoardEnabled = function (enabled) { return cordova(this, "clipBoardEnabled", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.init = function () { return cordova(this, "init", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.getInstall = function (onSuccess, onError, time) { return cordova(this, "getInstall", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.getInstallCanRetry = function (onSuccess, onError, time) { return cordova(this, "getInstallCanRetry", { "sync": true, "platforms": ["Android"] }, arguments); };
    OpenInstallOriginal.prototype.registerWakeUpHandler = function (onSuccess, onError) { return cordova(this, "registerWakeUpHandler", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.reportRegister = function () { return cordova(this, "reportRegister", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.reportEffectPoint = function (pointId, pointValue, extras) { return cordova(this, "reportEffectPoint", { "sync": true }, arguments); };
    OpenInstallOriginal.prototype.reportShare = function (onSuccess, onError, shareCode, sharePlatform) { return cordova(this, "reportShare", { "sync": true }, arguments); };
    OpenInstallOriginal.pluginName = "OpenInstall";
    OpenInstallOriginal.plugin = "cordova-plugin-openinstall";
    OpenInstallOriginal.pluginRef = "openinstall";
    OpenInstallOriginal.repo = "https://github.com/openinstall/cordova-plugin-openinstall";
    OpenInstallOriginal.platforms = ["Android", "iOS"];
    return OpenInstallOriginal;
}(AwesomeCordovaNativePlugin));
var OpenInstall = new OpenInstallOriginal();
export { OpenInstall };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3Blbmluc3RhbGwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF5QjNELCtCQUEwQjs7OztJQUd6RCxtQ0FBYSxhQUFDLE9BQXNCO0lBR3BDLG1DQUFhLGFBQUMsT0FBZ0I7SUFHOUIsc0NBQWdCLGFBQUMsT0FBZ0I7SUFHakMsMEJBQUk7SUFHSixnQ0FBVSxhQUFDLFNBQW1CLEVBQUUsT0FBaUIsRUFBRSxJQUFZO0lBRy9ELHdDQUFrQixhQUFDLFNBQW1CLEVBQUUsT0FBaUIsRUFBRSxJQUFZO0lBR3ZFLDJDQUFxQixhQUFDLFNBQW1CLEVBQUUsT0FBaUI7SUFHNUQsb0NBQWM7SUFHZCx1Q0FBaUIsYUFBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxNQUFrQztJQUd6RixpQ0FBVyxhQUFDLFNBQW1CLEVBQUUsT0FBaUIsRUFBRSxTQUFpQixFQUFFLGFBQXFCOzs7Ozs7c0JBeEQ5RjtFQTBCaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdPcHRpb25zIHtcclxuICBhbmRyb2lkSWQ/OiBzdHJpbmc7XHJcbiAgc2VyaWFsTnVtYmVyPzogc3RyaW5nO1xyXG4gIHNpbXVsYXRvckRpc2FibGVkPzogYm9vbGVhbjtcclxuICBzdG9yYWdlRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGFkRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgbWFjRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIG1hY0FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgaW1laURpc2FibGVkPzogYm9vbGVhbjtcclxuICBpbWVpPzogc3RyaW5nO1xyXG4gIGdhaWQ/OiBzdHJpbmc7XHJcbiAgb2FpZD86IHN0cmluZztcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ09wZW5JbnN0YWxsJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1vcGVuaW5zdGFsbCcsXHJcbiAgcGx1Z2luUmVmOiAnb3Blbmluc3RhbGwnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb3Blbmluc3RhbGwvY29yZG92YS1wbHVnaW4tb3Blbmluc3RhbGwnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcGVuSW5zdGFsbCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXHJcbiAgY29uZmlnQW5kcm9pZChvcHRpb25zOiBDb25maWdPcHRpb25zKTogdm9pZCB7IH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2VyaWFsRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7IH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2xpcEJvYXJkRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7IH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXRJbnN0YWxsKG9uU3VjY2VzczogRnVuY3Rpb24sIG9uRXJyb3I6IEZ1bmN0aW9uLCB0aW1lOiBudW1iZXIpOiB2b2lkIHsgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcclxuICBnZXRJbnN0YWxsQ2FuUmV0cnkob25TdWNjZXNzOiBGdW5jdGlvbiwgb25FcnJvcjogRnVuY3Rpb24sIHRpbWU6IG51bWJlcik6IHZvaWQgeyB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlZ2lzdGVyV2FrZVVwSGFuZGxlcihvblN1Y2Nlc3M6IEZ1bmN0aW9uLCBvbkVycm9yOiBGdW5jdGlvbik6IHZvaWQgeyB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlcG9ydFJlZ2lzdGVyKCk6IHZvaWQgeyB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlcG9ydEVmZmVjdFBvaW50KHBvaW50SWQ6IHN0cmluZywgcG9pbnRWYWx1ZTogbnVtYmVyLCBleHRyYXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7IH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVwb3J0U2hhcmUob25TdWNjZXNzOiBGdW5jdGlvbiwgb25FcnJvcjogRnVuY3Rpb24sIHNoYXJlQ29kZTogc3RyaW5nLCBzaGFyZVBsYXRmb3JtOiBzdHJpbmcpOiB2b2lkIHsgfVxyXG59XHJcblxyXG4iXX0=