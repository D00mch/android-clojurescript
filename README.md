Project example with native android app running clojure script code.

Clojure code is assembled with Leiningen, check [cljsrc/build.sh](https://github.com/Liverm0r/android-clojurescript/blob/master/cljsrc/src/cljsrc/core.cljs) script.
Generated web page is stored in android assets folder.
Android gradle config launches cljsrc/build.sh if js folder doesn't exist in assets.

To launch it, you need Android Studio. Just run it as normal android-project.

## Debug
You may run clojure part with any idea and any framework. One way is to launch it with figwheel.main in localhost and connect your android webview with 
```kotlin
val url = if (BuildConfig.DEBUG) "http://10.0.2.2:9500/" else "file:///android_asset/js/page/index.html"
webview.loadUrl(url)
```
You will be able to use REPL with your browser and see your changes in both browser and android emulator.

## Pass commands to android with @JavascriptInterface
[Android part:](https://github.com/Liverm0r/android-clojurescript/blob/master/app/src/main/java/com/livermor/androidsrc/MainActivity.kt)
```kotlin
addJavascriptInterface(ExampleJSInterface(), "Android")

inner class ExampleJSInterface {
    @JavascriptInterface
    fun showToast(toast: String) = runOnUiThread {
        Toast.makeText(this@MainActivity, toast, Toast.LENGTH_LONG).show()
    }
}
```
[Clojure part:](https://github.com/Liverm0r/android-clojurescript/blob/master/cljsrc/src/cljsrc/core.cljs)
```clojure
(js/Android.showToast "click")
```
