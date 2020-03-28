package com.livermor.androidsrc

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

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
            settings.setUp()
            loadUrl(URL)
        }
    }


    @SuppressLint("SetJavaScriptEnabled")
    fun WebSettings.setUp() {
        javaScriptEnabled = true
        domStorageEnabled = true
        loadWithOverviewMode = true
        allowContentAccess = true
        useWideViewPort = true
    }

    override fun onBackPressed() {
        if (!webView.canGoBack()) super.onBackPressed()
    }

    companion object {
        const val URL: String = "file:///android_asset/js/page/index.html"
    }
}
