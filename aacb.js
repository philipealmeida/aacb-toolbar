/*!
 * Toolbar Accessibility v1.0
 * Courtesy by Philipe Almeida 
 * devpalmeida@gmail.com
 * Licensed under the MIT license
 */
(function (window) {
    /* jshint validthis: true */
    "use strict";
  
    var app = {
      zoomApply: zoomApply,
      zoomOuter: zoomOuter,
      setZoom: setZoom,
      validFilters: validFilters,
      reFilters: reFilters
    };
  
    var metrics = {
      zoomCookie: "AccessibilityZoom",
      filterCookie: "AccessibilityFilter",
      scale: 1
    };
  
    var aacb = {
      html: "<nav role=\x22menubar\x22 class=\x22accb_toolbar\x22 lang=\x22pt-br\x22 aria-label=\x22Accessibility Toolbar\x22> <div class=\x22content\x22> <ul class=\x22navigation_features hidden-xs hidden-sm\x22 aria-label=\x22Navegação pela página\x22> <li role=\x22menuitem\x22><a accesskey=\x221\x22 class=\x22item\x22 href=\x22#content\x22 title=\x22Ir para o conteúdo\x22><span>Ir para: Conteúdo</span> <span>[1]</span></a></li> <li role=\x22menuitem\x22><a accesskey=\x222\x22 class=\x22item\x22 href=\x22#mainNav\x22 title=\x22Ir para o menu\x22><span>Menu</span> <span>[2]</span></a></li> <li role=\x22menuitem\x22 class=\x22closeContrast\x22><a accesskey=\x223\x22 class=\x22item\x22 href=\x22#search\x22 title=\x22Ir para a busca\x22><span>Busca</span> <span>[3]</span></a></li> <li role=\x22menuitem\x22 class=\x22closeContrast\x22><a accesskey=\x224\x22 class=\x22item\x22 href=\x22#footer\x22 title=\x22Ir para o rodapé\x22><span>Rodapé</span> <span>[4]</span></a></li> </ul> <ul class=\x22visual_features\x22 aria-label=\x22Controles de acessibilidade do site\x22> <li role=\x22menuitem\x22 class=\x22zoomButtons\x22><a href=\x22javascript:window.accessibility.zoomApply()\x22 title=\x22Ampliar tela\x22 class=\x22zoomApply  item gm5zoom\x22>A +</a></li> <li role=\x22menuitem\x22 class=\x22zoomButtons closeContrast\x22><a href=\x22javascript:window.accessibility.zoomOuter()\x22 title=\x22Reduzir tela\x22 class=\x22zoomOuter item gm5zoom\x22>A –</a></li> <li role=\x22menuitem\x22 class=\x22contraste\x22> <a title=\x22Contraste\x22 tabindex=\x220\x22 class=\x22contraste item \x22 aria-haspopup=\x22true\x22> <svg xmlns=\x22http://www.w3.org/2000/svg\x22 xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22 version=\x221.1\x22 id=\x22Capa_1\x22 x=\x220px\x22 y=\x220px\x22 viewBox=\x220 0 57.945 57.945\x22 style=\x22enable-background:new 0 0 57.945 57.945;\x22 xml:space=\x22preserve\x22> <circle style=\x22fill:#3083C9;\x22 cx=\x2228.973\x22 cy=\x2229.472\x22 r=\x2212\x22/> <path style=\x22fill:none;stroke:#C6E2F7;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;\x22 d=\x22M36,29.472  c0,3.866-3.134,7-7,7s-7-3.134-7-7s3.134-7,7-7\x22/> <path style=\x22fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;\x22 d=\x22M1,29.309l0.23-0.232  c15.349-15.473,40.366-15.473,55.715,0l0,0\x22/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> </a> <ul class=\x22dautoniveis submenu\x22 aria-label=\x22submenu\x22> <li> <a href=\x22javascript:window.accessibility.validFilters('yellowblack')\x22 title=\x22Preto, branco e amarelo\x22 class=\x22item\x22 data-nivel=\x22amarelopreto\x22><span>Preto, branco e amarelo</span></a></li> <li><a href=\x22javascript:window.accessibility.validFilters('highcontrast')\x22 title=\x22Contraste aumentado\x22 class=\x22item\x22 data-nivel=\x22altocontraste\x22><span>Contraste aumentado</span></a></li> <li><a href=\x22javascript:window.accessibility.validFilters('monochrome')\x22 title=\x22Monocromático\x22 class=\x22item\x22 data-nivel=\x22monocromatico\x22><span>Monocromático</span></a></li> <li><a href=\x22javascript:window.accessibility.validFilters('invertedgray')\x22 title=\x22Escala de cinza invertida\x22 class=\x22item\x22 data-nivel=\x22cinzainvertida\x22><span>Escala de cinza invertida</span></a></li> <li><a href=\x22javascript:window.accessibility.validFilters('invertedcolor')\x22 title=\x22Cor invertida\x22 class=\x22item\x22 data-nivel=\x22corinvertida\x22><span>Cor invertida</span></a></li> <li><a href=\x22javascript:window.accessibility.validFilters('default')\x22 title=\x22Cor original\x22 class=\x22item\x22 data-nivel=\x22normal\x22><span>Cor original</span></a></li> </ul> </li>  <li role=\x22menuitem\x22 class=\x22lilibras\x22><a href=\x22http://www.vlibras.gov.br\x22 aria-label=\x22Link para libras : Link externo\x22 target=\x22_blank\x22 title=\x22Link para libras : Link externo\x22 class=\x22item pglibras\x22><span>Libras<span></span></span></a></li> </ul> </div> </nav>",
      css: "body,html{margin:0;padding:0}*{-webkit-box-sizing:border-box;box-sizing:border-box}.accb_toolbar{background-color:#efefef;color:#000;font-family:sans-serif;font-size:14px;height:35px;font-weight:500;border-top:2px solid #d0d0d0;border-bottom:2px solid #d0d0d0}.accb_toolbar .content{height:inherit;margin:0 auto;width:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:distribute;justify-content:space-around}.accb_toolbar li,.accb_toolbar ul{margin:0;padding:0}.accb_toolbar li{display:inline-block;height:95%;}.accb_toolbar a.item{padding:.6em .8em;line-height:1;font-size:14px;display:inline-block;border-left:2px solid #d4d4d4}.accb_toolbar li.contraste .submenu .item{text-indent:0;border:0;margin:0}.accb_toolbar a{text-decoration:none;cursor:pointer;color:inherit}.accb_toolbar a.item:hover,body.invertedgray a,body.monochrome a,body.yellowblack a:link,body.yellowblack a:visited{text-decoration:underline}.accb_toolbar .navigation_features,.accb_toolbar .visual_features{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:inherit;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.accb_toolbar .navigation_features .item:nth-of-type(1){margin:0}.accb_toolbar li.contraste{position:relative}.accb_toolbar li.contraste .item{position:relative;margin-left:0;text-indent:-99999999px}.accb_toolbar li.contraste>.item{width:44px;height:100%}.accb_toolbar li.contraste>.item svg{width:25px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.accb_toolbar .submenu{opacity:0;padding:1em;-webkit-box-shadow:0 5px 5px 0 #35353570;box-shadow:0 5px 5px 0 #35353570;display:inline-block;visibility:hidden;position:absolute;top:32px;left:0;z-index:100;-webkit-transition:.1s linear;transition:.1s linear;-webkit-transform:translate(-22%,-35%) scale(.3);transform:translate(-22%,-35%) scale(.3);min-width:100px;background-color:#fff}.accb_toolbar .submenu .item:nth-of-type(1){padding-top:0}.accb_toolbar li.contraste:hover .submenu{opacity:1;visibility:visible;-webkit-transform:translate(0,0) scale(1);transform:translate(0,0) scale(1)}.accb_toolbar .content>ul:not(.submenu)>li:nth-last-child(1){border-right:2px solid #d4d4d4}@media screen and (max-width:425px){.accb_toolbar .navigation_features{display:none}}/*! * Accessibility */body.highcontrast{filter:contrast(2.1);-webkit-filter:contrast(\x222.1\x22)}body.highcontrast iframe,body.highcontrast img,body.highcontrast video{filter:contrast(.65);-webkit-filter:contrast(.65)}body.monochrome{filter:grayscale(100%);-webkit-filter:grayscale(100%)}body.invertedgray{background-color:#000!important;filter:invert(100%) grayscale(100%);-webkit-filter:invert(100%) grayscale(100%)}body.invertedgray .noFilter,body.invertedgray iframe,body.invertedgray img,body.invertedgray video{filter:invert(100%);-webkit-filter:invert(100%)}body.invertedcolor{background-color:#000!important;filter:invert(100%);-webkit-filter:invert(100%)}body.invertedcolor .noFilter{filter:invert(100%);-webkit-filter:invert(100%)}body.yellowblack{background:#000}body.yellowblack a:not(.noFilterAP):hover,body.yellowblack a:not(.noFilterAP):link,body.yellowblack a:not(.noFilterAP):visited{text-decoration:underline;color:#ff0!important;background:#000!important;border-color:#fff}body.yellowblack a:not(.noFilterAP):hover span,body.yellowblack a:not(.noFilterAP):hover:before,body.yellowblack a:not(.noFilterAP):link span,body.yellowblack a:not(.noFilterAP):link:before,body.yellowblack a:not(.noFilterAP):visited span,body.yellowblack a:not(.noFilterAP):visited:before{color:#ff0!important}body.yellowblack a:not(.noFilterAP):before{border-color:#000!important}body.yellowblack b:not(.noFilterAP),body.yellowblack button:not(.noFilterAP),body.yellowblack div:not(.noFilterAP),body.yellowblack h1:not(.noFilterAP),body.yellowblack h2:not(.noFilterAP),body.yellowblack h3:not(.noFilterAP),body.yellowblack h4:not(.noFilterAP),body.yellowblack h5:not(.noFilterAP),body.yellowblack h6:not(.noFilterAP),body.yellowblack label:not(.noFilterAP),body.yellowblack li:not(.noFilterAP),body.yellowblack p:not(.noFilterAP),body.yellowblack section:not(.noFilterAP),body.yellowblack span:not(.noFilterAP),body.yellowblack td:not(.noFilterAP),body.yellowblack tr:not(.noFilterAP),body.yellowblack ul:not(.noFilterAP){color:#fff!important;background:#000;border-color:#fff!important}body.yellowblack input:not(.noFilterAP),body.yellowblack select:not(.noFilterAP){color:#fff!important;background:#000!important;border-color:#fff!important}body.yellowblack a:link,body.yellowblack a:visited{color:#ff0}body.yellowblack div:after,body.yellowblack div:before,body.yellowblack h1:after,body.yellowblack h1:before,body.yellowblack h2:after,body.yellowblack h2:before,body.yellowblack h3:after,body.yellowblack h3:before{background:0 0}body.yellowblack input[type=radio]:empty~label:before{background:#000!important}body.yellowblack input[type=radio]:checked~label:before{background:#fff!important}body.yellowblack div:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]),body.yellowblack div:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) button,body.yellowblack div:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) input,body.yellowblack li:hover:not([style^=\x22background-image:url\x22]),body.yellowblack nav:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]),body.yellowblack nav:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) button,body.yellowblack nav:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) input,body.yellowblack section:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]),body.yellowblack section:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) button,body.yellowblack section:not([id=\x22\x22]):not([style^=\x22background-image:url\x22]) input{background:#000!important}.accessibility-toolbar,.navbar.accessibility-toolbar{margin-bottom:0;z-index:1001;border-width:0}.accessibility-toolbar .navbar-right{margin-right:0}.icon-primary{vertical-align:-20%}.icon-primary circle,.icon-primary path{fill:#337ab7}.icon-primary circle[fill=none],.icon-primary path[fill=none]{fill:transparent}"
    };
  
    window.accessibility = app;
    metrics.scale = parseFloat(getCookie(metrics.zoomCookie) || 1);
    document.querySelector('[aacb-toolbar]')
      .insertAdjacentHTML('beforeend', aacb.html);
  
    var style = document.createElement('style');
    style.insertAdjacentHTML('beforeend', aacb.css);
    document.getElementsByTagName('head')[0].appendChild(style);
  
    function setZoom(scale) {
      document.body.style.zoom = scale;
      document.body.style.MozTransform = "scale(" + scale + ")";
      document.body.style.MozTransformOrigin = "0 0";
      setCookie(metrics.zoomCookie, scale);
    }
  
    function zoomApply() {
      if (metrics.scale < 1.5) {
        metrics.scale += 0.2;
        app.setZoom(metrics.scale);
      }
      return;
    }
  
    function zoomOuter() {
      if (metrics.scale > 1) {
        metrics.scale -= 0.2;
      } else {
        metrics.scale = 1;
      }
      app.setZoom(metrics.scale);
    }
  
  
    if (document.cookie.indexOf(metrics.zoomCookie) === -1) {
      setCookie(metrics.zoomCookie, 1);
    }
  
    window.addEventListener('load', function () {
      if (metrics.scale > 1) {
        app.setZoom(metrics.scale);
      }
    }, false);
  
    function validFilters(filter) {
      app.reFilters();
  
      switch (filter) {
        case "yellowblack":
        case "highcontrast":
        case "monochrome":
        case "invertedgray":
        case "invertedcolor":
          document.body.classList.add(filter);
          setCookie(metrics.filterCookie, filter, 0);
          break;
        default:
          setCookie(metrics.filterCookie, "", 0);
          break;
      }
    }
  
    function reFilters() {
      var filters = ["yellowblack", "highcontrast", "monochrome", "invertedgray", "invertedcolor"];
  
      for (var i = filters.length - 1; i >= 0; i--) {
        if (document.body.className.indexOf(filters[i]) !== -1) {
          document.body.classList.remove(filters[i]);
        }
      }
    }
  
    window.addEventListener('load', function () {
      if (document.cookie.indexOf(metrics.filterCookie) !== -1) {
        var filter = getCookie(metrics.filterCookie);
        app.validFilters(filter, false);
      }
    }, false);
  
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    function setCookie(name, value, days) {
  
      var expires = "";
      if (!days) {
        days = 0;
      }
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
  })(window);