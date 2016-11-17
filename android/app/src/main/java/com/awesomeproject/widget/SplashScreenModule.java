package com.awesomeproject.widget;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by X-FAN on 2016/11/17.
 */

public class SplashScreenModule extends ReactContextBaseJavaModule {
    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashScreen";
    }

    @ReactMethod
    public void show() {
        SplashScreen.show(getCurrentActivity(), true);
    }

    @ReactMethod
    public void hide() {
        SplashScreen.hide(getCurrentActivity());
    }
}
