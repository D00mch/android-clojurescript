Project example with native android app running clojure script code.

Clojure code is assembled with Leiningen, check cljsrc/build.sh script.
Generated web page is stored in the assets.
Android gradle config launches cljsrc/build.sh if js folder doesn't exist in assets.