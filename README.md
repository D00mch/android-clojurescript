Project example with native android app running clojure script code.

Clojure code is assembled with Leiningen, check cljsrc/build.sh script.
Generated web page is stored in the assets.
Android gradle config launches [cljsrc/build.sh](https://github.com/Liverm0r/android-clojurescript/blob/master/cljsrc/src/cljsrc/core.cljs) if js folder doesn't exist in assets.

To launch it, you need Android Studio. Just launch it as normal android-project.
