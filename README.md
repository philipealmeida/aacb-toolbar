

# AACB Toolbar Web Accessibility 

An accessibility bar proposal for visual impairments, which meets 
accessibility guidelines for WCAG 2.0 content.

## How to use


1. [Dowload aacb.min.js](https://raw.githubusercontent.com/philipe-almeida/aacb_toolbar/master/aacb.min.js), and move file to your app directory.
2. For render the toolbar, add the `aacb-toolbar` attribute:

    ```html

    <section aacb-toolbar></section>

    ```
    
3. The AACB toolbar uses HTML 'accesskey' to specify a shortcut key to activate / focus an element. Enabling direct keyboard navigation of application areas.

Use current ids in the sections of your application, available (content, mainNav, search, footer):

<!-- TOC depthFrom:2 -->

- #content
- #mainNav
- #search
- #footer

<!-- /TOC -->

## Supported browsers

AACB - Toolbar Web Accessibility works in IE9+, Chrome 32+ and all modern browsers. 
If you want to support browsers below IE9, for example by using [Modernizr](https://modernizr.com/).

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 32+ ✔ | 10+ ✔ | 30+ ✔ | 9+ ✔ | 16+ ✔ | 9+ ✔ |

## Changelog

Check what was changed in the newest version in the [Changelog](https://github.com/philipe-almeida/aacb_toolbar/master/CHANGELOG.md).

## Author

  - [Philipe Almeida](https://github.com/philipe-almeida)
  
  ## License

The library is [licensed](https://github.com/philipe-almeida/aacb_toolbar/blob/master/LICENSE) under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).
