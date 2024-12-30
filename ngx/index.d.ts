import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface ConfigOptions {
    androidId?: string;
    serialNumber?: string;
    simulatorDisabled?: boolean;
    storageDisabled?: boolean;
    adEnabled?: boolean;
    macDisabled?: boolean;
    macAddress?: string;
    imeiDisabled?: boolean;
    imei?: string;
    gaid?: string;
    oaid?: string;
}
export declare class OpenInstall extends AwesomeCordovaNativePlugin {
    configAndroid(options: ConfigOptions): void;
    serialEnabled(enabled: boolean): void;
    clipBoardEnabled(enabled: boolean): void;
    init(): void;
    getInstall(onSuccess: Function, onError: Function, time: number): void;
    getInstallCanRetry(onSuccess: Function, onError: Function, time: number): void;
    registerWakeUpHandler(onSuccess: Function, onError: Function): void;
    reportRegister(): void;
    reportEffectPoint(pointId: string, pointValue: number, extras?: {
        [key: string]: string;
    }): void;
    reportShare(onSuccess: Function, onError: Function, shareCode: string, sharePlatform: string): void;
}
