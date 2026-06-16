/**
 * YOURWEB HERO CAROUSEL - Wix Custom Element
 *
 * Tag: <yourweb-hero-carousel></yourweb-hero-carousel>
 *
 * Works with default images/settings. Pass attributes only when you want
 * to customize media, colors, sizes, speed, text, or links from Wix.
 */
(function () {
  function svgData(label, main, accent) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 760">' +
      '<defs><radialGradient id="g" cx="35%" cy="18%" r="75%"><stop stop-color="#fff" stop-opacity=".92"/><stop offset=".45" stop-color="' +
      accent +
      '"/><stop offset="1" stop-color="' +
      main +
      '"/></radialGradient><filter id="s"><feDropShadow dx="0" dy="22" stdDeviation="22" flood-color="#000" flood-opacity=".22"/></filter></defs>' +
      '<ellipse cx="260" cy="690" rx="150" ry="32" fill="#000" opacity=".16"/>' +
      '<path filter="url(#s)" d="M145 415c0-114 50-190 115-190s115 76 115 190v145c0 76-47 126-115 126s-115-50-115-126V415Z" fill="url(#g)"/>' +
      '<path d="M185 240 145 90c-6-24 22-42 42-27l102 78M335 240 375 90c6-24-22-42-42-27l-102 78" fill="' +
      accent +
      '" opacity=".9"/>' +
      '<circle cx="218" cy="360" r="16" fill="#161616"/><circle cx="302" cy="360" r="16" fill="#161616"/>' +
      '<path d="M244 410c16 14 32 14 48 0" fill="none" stroke="#161616" stroke-width="14" stroke-linecap="round"/>' +
      '<path d="M160 492c62 34 135 42 220 0v72c-82 38-156 38-220 0v-72Z" fill="#fff" opacity=".34"/>' +
      '<text x="260" y="618" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="54" fill="#161616" opacity=".72">' +
      label +
      "</text></svg>";

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  var DEFAULTS = [
    {
      media: svgData("01", "#F4845F", "#F8B195"),
      bg: "rgb(244, 132, 95)",
      panel: "rgb(247, 155, 127)",
      label: "Luna",
      caption: "Chequeo preventivo"
    },
    {
      media: svgData("02", "#6BBF7A", "#B9F6C4"),
      bg: "rgb(107, 191, 122)",
      panel: "rgb(133, 204, 146)",
      label: "Max",
      caption: "Vacunas y bienestar"
    },
    {
      media: svgData("03", "#E882B4", "#FFD0E6"),
      bg: "rgb(232, 130, 180)",
      panel: "rgb(237, 157, 196)",
      label: "Mia",
      caption: "Grooming premium"
    },
    {
      media: svgData("04", "#6EB5FF", "#C9E5FF"),
      bg: "rgb(110, 181, 255)",
      panel: "rgb(141, 196, 255)",
      label: "Nube",
      caption: "Emergencias 24/7"
    }
  ];

  var STYLE = [
    ":host{",
    "  display:block;",
    "  width:100%;",
    "  --yw-active-bg:rgb(244,132,95);",
    "  --yw-text:#fff;",
    "  --yw-font:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;",
    "  --yw-display:Impact,'Arial Black',sans-serif;",
    "  --yw-height:100svh;",
    "  --yw-min-height:620px;",
    "  --yw-ghost-size:clamp(86px,26vw,360px);",
    "  --yw-title-size:clamp(42px,8vw,92px);",
    "  --yw-center-height:82%;",
    "  --yw-center-height-mobile:48%;",
    "  --yw-side-height:28%;",
    "  --yw-side-height-mobile:15%;",
    "  --yw-back-height:22%;",
    "  --yw-back-height-mobile:12%;",
    "  --yw-center-scale:1.34;",
    "  --yw-center-scale-mobile:1;",
    "  --yw-side-scale:1;",
    "  --yw-back-scale:1;",
    "  --yw-center-bottom:0%;",
    "  --yw-center-bottom-mobile:23%;",
    "  --yw-side-bottom:12%;",
    "  --yw-side-bottom-mobile:34%;",
    "  --yw-back-bottom:12%;",
    "  --yw-back-bottom-mobile:34%;",
    "  --yw-left-pos:30%;",
    "  --yw-right-pos:70%;",
    "  --yw-left-pos-mobile:20%;",
    "  --yw-right-pos-mobile:80%;",
    "  --yw-transition-ms:650ms;",
    "  --yw-primary:#ffffff;",
    "  --yw-button-bg:#ffffff;",
    "  --yw-button-text:#171717;",
    "}",
    ".hero{",
    "  position:relative;",
    "  width:100%;",
    "  min-height:var(--yw-min-height);",
    "  height:var(--yw-height);",
    "  overflow:hidden;",
    "  color:var(--yw-text);",
    "  font-family:var(--yw-font);",
    "  background:var(--yw-active-bg);",
    "  transition:background-color var(--yw-transition-ms) cubic-bezier(.4,0,.2,1);",
    "}",
    ".hero::before{",
    "  content:'';",
    "  position:absolute;",
    "  inset:0;",
    "  z-index:1;",
    "  background:linear-gradient(180deg,rgba(0,0,0,.18),transparent 34%,rgba(0,0,0,.2));",
    "  pointer-events:none;",
    "}",
    ".grain{position:absolute;inset:0;z-index:8;opacity:.22;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\");background-size:180px 180px;}",
    ".ghost{position:absolute;inset:0 0 auto;top:15%;z-index:2;display:flex;justify-content:center;align-items:center;white-space:nowrap;color:rgba(255,255,255,.92);font-family:var(--yw-display);font-size:var(--yw-ghost-size);letter-spacing:-.05em;line-height:.82;text-transform:uppercase;pointer-events:none;user-select:none;}",
    ".carousel{position:absolute;inset:0;z-index:3;}",
    ".item{position:absolute;aspect-ratio:.6/1;will-change:transform,filter,opacity,left,bottom,height;transition:transform var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),filter var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),opacity var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),left var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),bottom var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),height var(--yw-transition-ms) cubic-bezier(.4,0,.2,1);}",
    ".figure{position:relative;width:100%;height:100%;overflow:visible;}",
    ".media{width:100%;height:100%;object-fit:contain;object-position:bottom center;display:block;filter:drop-shadow(0 34px 28px rgba(0,0,0,.22));}",
    ".item[data-role=center]{left:50%;bottom:var(--yw-center-bottom);height:var(--yw-center-height);z-index:20;opacity:1;filter:blur(0);transform:translateX(-50%) scale(var(--yw-center-scale));}",
    ".item[data-role=left],.item[data-role=right]{bottom:var(--yw-side-bottom);height:var(--yw-side-height);z-index:10;opacity:.84;filter:blur(2px);transform:translateX(-50%) scale(var(--yw-side-scale));}",
    ".item[data-role=left]{left:var(--yw-left-pos);}",
    ".item[data-role=right]{left:var(--yw-right-pos);}",
    ".item[data-role=back]{left:50%;bottom:var(--yw-back-bottom);height:var(--yw-back-height);z-index:5;opacity:.72;filter:blur(4px);transform:translateX(-50%) scale(var(--yw-back-scale));}",
    ".content{position:absolute;left:clamp(18px,6vw,86px);bottom:clamp(24px,8vw,92px);z-index:20;max-width:min(520px,calc(100% - 36px));text-shadow:0 5px 24px rgba(0,0,0,.22);}",
    ".brand{position:absolute;left:clamp(18px,4vw,54px);top:clamp(18px,4vw,34px);z-index:21;font-size:.72rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;}",
    ".eyebrow,.active{margin:0 0 10px;font-size:.78rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;}",
    ".active{color:rgba(255,255,255,.9);}",
    "h1{margin:0;font-family:var(--yw-display);font-size:var(--yw-title-size);letter-spacing:-.045em;line-height:.9;text-transform:uppercase;}",
    ".body{max-width:430px;margin:16px 0 0;color:rgba(255,255,255,.9);font-size:clamp(.92rem,1.7vw,1.08rem);line-height:1.55;}",
    ".cta{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:14px 22px;border-radius:999px;background:var(--yw-button-bg);color:var(--yw-button-text);font-size:.78rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;box-shadow:0 16px 40px rgba(0,0,0,.18);transition:transform 180ms ease,box-shadow 180ms ease;}",
    ".cta:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 18px 52px rgba(0,0,0,.24);}",
    ".controls{position:absolute;right:clamp(18px,4vw,52px);bottom:clamp(24px,7vw,78px);z-index:22;display:flex;gap:10px;}",
    ".control{all:unset;width:46px;height:46px;border:1px solid rgba(255,255,255,.65);border-radius:999px;display:grid;place-items:center;cursor:pointer;background:rgba(255,255,255,.08);backdrop-filter:blur(10px);transition:transform 160ms ease,background 160ms ease;}",
    ".control:hover{transform:scale(1.06);background:rgba(255,255,255,.16);}",
    ".controls.is-hidden{display:none;}",
    "@media(max-width:700px){",
    "  :host{--yw-height:100svh;--yw-min-height:590px;--yw-ghost-size:clamp(64px,25vw,118px);--yw-title-size:clamp(38px,13vw,66px);}",
    "  .ghost{top:18%;}",
    "  .item[data-role=center]{height:var(--yw-center-height-mobile);bottom:var(--yw-center-bottom-mobile);transform:translateX(-50%) scale(var(--yw-center-scale-mobile));}",
    "  .item[data-role=left],.item[data-role=right]{height:var(--yw-side-height-mobile);bottom:var(--yw-side-bottom-mobile);}",
    "  .item[data-role=left]{left:var(--yw-left-pos-mobile);}",
    "  .item[data-role=right]{left:var(--yw-right-pos-mobile);}",
    "  .item[data-role=back]{height:var(--yw-back-height-mobile);bottom:var(--yw-back-bottom-mobile);}",
    "  .content{bottom:28px;}",
    "  .body{max-width:310px;font-size:.88rem;}",
    "  .controls{right:18px;bottom:auto;top:84px;}",
    "  .control{width:40px;height:40px;}",
    "}",
  ].join("");

  class YourWebHeroCarousel extends HTMLElement {
    static get observedAttributes() {
      return [
        "media-1", "media-2", "media-3", "media-4",
        "image-1", "image-2", "image-3", "image-4",
        "video-1", "video-2", "video-3", "video-4",
        "media-type-1", "media-type-2", "media-type-3", "media-type-4",
        "bg-1", "bg-2", "bg-3", "bg-4",
        "panel-1", "panel-2", "panel-3", "panel-4",
        "label-1", "label-2", "label-3", "label-4",
        "caption-1", "caption-2", "caption-3", "caption-4",
        "brand", "eyebrow", "title", "body", "cta-label", "cta-href",
        "ghost-text", "font-family", "display-font", "text-color", "button-bg", "button-text",
        "height", "min-height", "ghost-size", "title-size",
        "center-height", "center-height-mobile", "side-height", "side-height-mobile",
        "back-height", "back-height-mobile", "center-scale", "center-scale-mobile",
        "side-scale", "back-scale", "center-bottom", "center-bottom-mobile",
        "side-bottom", "side-bottom-mobile", "back-bottom", "back-bottom-mobile",
        "left-pos", "right-pos", "left-pos-mobile", "right-pos-mobile",
        "autoplay", "interval", "transition-ms", "controls", "grain"
      ];
    }

    constructor() {
      super();
      this._activeIndex = 0;
      this._locked = false;
      this._timer = 0;
      this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = STYLE;
      this.shadowRoot.appendChild(style);
      this._root = document.createElement("section");
      this._root.className = "hero";
      this.shadowRoot.appendChild(this._root);
    }

    connectedCallback() {
      this._applyVars();
      this._render();
      this._startAutoplay();
    }

    disconnectedCallback() {
      this._stopAutoplay();
    }

    attributeChangedCallback() {
      if (!this.shadowRoot || !this._root) return;
      this._applyVars();
      this._render();
      this._startAutoplay();
    }

    _isOff(value) {
      if (value == null || value === "") return false;
      var v = String(value).toLowerCase().trim();
      return v === "off" || v === "false" || v === "0" || v === "no";
    }

    _getAttr(name, fallback) {
      var value = this.getAttribute(name);
      return value == null || value === "" ? fallback : value;
    }

    _getSlides() {
      var slides = [];
      for (var i = 1; i <= 4; i += 1) {
        var base = DEFAULTS[i - 1];
        var video = this.getAttribute("video-" + i);
        var image = this.getAttribute("image-" + i);
        var media = this.getAttribute("media-" + i) || video || image || base.media;
        var explicitType = this.getAttribute("media-type-" + i);
        var type = explicitType || (video ? "video" : this._guessType(media));
        slides.push({
          media: media,
          type: type,
          bg: this._getAttr("bg-" + i, base.bg),
          panel: this._getAttr("panel-" + i, base.panel),
          label: this._getAttr("label-" + i, base.label),
          caption: this._getAttr("caption-" + i, base.caption)
        });
      }
      return slides;
    }

    _guessType(url) {
      return /\.(mp4|webm|ogg)(\?|#|$)/i.test(String(url)) ? "video" : "image";
    }

    _roleFor(index) {
      if (index === this._activeIndex) return "center";
      if (index === (this._activeIndex + 3) % 4) return "left";
      if (index === (this._activeIndex + 1) % 4) return "right";
      return "back";
    }

    _applyVars() {
      var map = {
        "font-family": "--yw-font",
        "display-font": "--yw-display",
        "text-color": "--yw-text",
        "button-bg": "--yw-button-bg",
        "button-text": "--yw-button-text",
        "height": "--yw-height",
        "min-height": "--yw-min-height",
        "ghost-size": "--yw-ghost-size",
        "title-size": "--yw-title-size",
        "center-height": "--yw-center-height",
        "center-height-mobile": "--yw-center-height-mobile",
        "side-height": "--yw-side-height",
        "side-height-mobile": "--yw-side-height-mobile",
        "back-height": "--yw-back-height",
        "back-height-mobile": "--yw-back-height-mobile",
        "center-scale": "--yw-center-scale",
        "center-scale-mobile": "--yw-center-scale-mobile",
        "side-scale": "--yw-side-scale",
        "back-scale": "--yw-back-scale",
        "center-bottom": "--yw-center-bottom",
        "center-bottom-mobile": "--yw-center-bottom-mobile",
        "side-bottom": "--yw-side-bottom",
        "side-bottom-mobile": "--yw-side-bottom-mobile",
        "back-bottom": "--yw-back-bottom",
        "back-bottom-mobile": "--yw-back-bottom-mobile",
        "left-pos": "--yw-left-pos",
        "right-pos": "--yw-right-pos",
        "left-pos-mobile": "--yw-left-pos-mobile",
        "right-pos-mobile": "--yw-right-pos-mobile"
      };
      for (var attr in map) {
        if (Object.prototype.hasOwnProperty.call(map, attr)) {
          var value = this.getAttribute(attr);
          if (value != null && value !== "") this.style.setProperty(map[attr], value);
        }
      }
      var transitionMs = this._getAttr("transition-ms", "650");
      this.style.setProperty("--yw-transition-ms", String(transitionMs).replace("ms", "") + "ms");
    }

    _render() {
      var slides = this._getSlides();
      var active = slides[this._activeIndex] || slides[0];
      this.style.setProperty("--yw-active-bg", active.bg);

      var controlsHidden = this._isOff(this.getAttribute("controls")) ? " is-hidden" : "";
      var grain = this._isOff(this.getAttribute("grain")) ? "" : '<div class="grain" aria-hidden="true"></div>';
      var ctaHref = this._getAttr("cta-href", "#");
      var ctaLabel = this._getAttr("cta-label", "Reservar ahora");

      var html = grain +
        '<div class="brand">' + this._escape(this._getAttr("brand", "YOURWEB HERO")) + '</div>' +
        '<div class="ghost" aria-hidden="true">' + this._escape(this._getAttr("ghost-text", "PETCARE")) + '</div>' +
        '<div class="carousel" aria-label="Animated hero carousel">' +
        slides.map((slide, index) => this._renderItem(slide, index)).join("") +
        '</div>' +
        '<div class="content">' +
        '<p class="eyebrow">' + this._escape(this._getAttr("eyebrow", "Animacion custom para Wix")) + '</p>' +
        '<p class="active">' + this._escape(active.label + " / " + active.caption) + '</p>' +
        '<h1>' + this._escape(this._getAttr("title", "Hero animado configurable")) + '</h1>' +
        '<p class="body">' + this._escape(this._getAttr("body", "Cambia imagenes, videos, fondos RGB, tamanos, velocidad y textos desde los atributos del Custom Element.")) + '</p>' +
        '<a class="cta" href="' + this._normalizeHref(ctaHref) + '">' + this._escape(ctaLabel) + ' <span aria-hidden="true">-></span></a>' +
        '</div>' +
        '<div class="controls' + controlsHidden + '">' +
        '<button class="control" type="button" data-dir="prev" aria-label="Anterior">‹</button>' +
        '<button class="control" type="button" data-dir="next" aria-label="Siguiente">›</button>' +
        '</div>';

      this._root.innerHTML = html;
      this._root.querySelectorAll("[data-dir]").forEach((button) => {
        button.addEventListener("click", () => this._navigate(button.getAttribute("data-dir") || "next"));
      });
      this._preload(slides);
    }

    _renderItem(slide, index) {
      var role = this._roleFor(index);
      var media = "";
      if (slide.type === "video") {
        media = '<video class="media" src="' + this._escapeAttr(slide.media) + '" autoplay muted loop playsinline preload="metadata"></video>';
      } else {
        media = '<img class="media" src="' + this._escapeAttr(slide.media) + '" alt="' + this._escapeAttr(slide.label) + '" draggable="false" />';
      }
      return '<article class="item" data-role="' + role + '" style="--panel:' + this._escapeAttr(slide.panel) + '" aria-hidden="' + String(role !== "center") + '"><div class="figure">' + media + '</div></article>';
    }

    _navigate(direction) {
      if (this._locked) return;
      var duration = parseInt(this._getAttr("transition-ms", "650"), 10) || 650;
      this._locked = true;
      this._activeIndex = direction === "prev" ? (this._activeIndex + 3) % 4 : (this._activeIndex + 1) % 4;
      this._render();
      window.setTimeout(() => {
        this._locked = false;
      }, duration);
    }

    _startAutoplay() {
      this._stopAutoplay();
      if (this._isOff(this.getAttribute("autoplay"))) return;
      var interval = parseInt(this._getAttr("interval", "1000"), 10) || 1000;
      this._timer = window.setInterval(() => this._navigate("next"), Math.max(interval, 400));
    }

    _stopAutoplay() {
      if (this._timer) window.clearInterval(this._timer);
      this._timer = 0;
    }

    _preload(slides) {
      slides.forEach((slide) => {
        if (slide.type !== "image") return;
        var img = new Image();
        img.src = slide.media;
      });
    }

    _normalizeHref(href) {
      if (!href || href === "#") return "#";
      if (/^(https?:|mailto:|tel:|\/|#)/i.test(href)) return this._escapeAttr(href);
      if (String(href).indexOf(".") !== -1) return "https://" + this._escapeAttr(String(href).replace(/^https?:\/\//i, ""));
      return this._escapeAttr(href);
    }

    _escape(value) {
      return String(value).replace(/[&<>"']/g, function (char) {
        return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char];
      });
    }

    _escapeAttr(value) {
      return this._escape(value);
    }
  }

  if (!customElements.get("yourweb-hero-carousel")) {
    customElements.define("yourweb-hero-carousel", YourWebHeroCarousel);
  }
})();
