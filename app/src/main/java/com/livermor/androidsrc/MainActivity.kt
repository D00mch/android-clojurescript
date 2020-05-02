package com.livermor.androidsrc

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

private const val URL: String = "file:///android_asset/js/page/index.html"

class MainActivity : AppCompatActivity() {

    private val webView: WebView by lazy { WebView(this) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(webView)
        webView.apply {
            webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(view: WebView?, url: String): Boolean {
                    view?.loadUrl(url)
                    return true
                }
            }
            addJavascriptInterface(ExampleJSInterface(), "Android")
            setUp(settings)

            // To work with localhost
            val url = if (BuildConfig.DEBUG) "http://10.0.2.2:9500/" else URL

            loadUrl(url)
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    fun setUp(settings: WebSettings) = with(settings) {
        javaScriptEnabled = true
        domStorageEnabled = true
        loadWithOverviewMode = true
        allowContentAccess = true
        useWideViewPort = true
    }

    override fun onBackPressed() {
        if (!webView.canGoBack()) super.onBackPressed()
    }

    inner class ExampleJSInterface {
        @JavascriptInterface
        fun showToast(toast: String) = runOnUiThread {
            Toast.makeText(this@MainActivity, toast, Toast.LENGTH_LONG).show()
        }
    }
}
