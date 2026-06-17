/**
 * YOURWEB HERO CAROUSEL - Wix Custom Element
 *
 * Tag: <yourweb-hero-carousel></yourweb-hero-carousel>
 */
(function () {
  function svgData(label, main, accent) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 760">' +
      '<defs><radialGradient id="g" cx="35%" cy="18%" r="75%"><stop stop-color="#fff" stop-opacity=".92"/><stop offset=".45" stop-color="' + accent + '"/><stop offset="1" stop-color="' + main + '"/></radialGradient></defs>' +
      '<path d="M145 415c0-114 50-190 115-190s115 76 115 190v145c0 76-47 126-115 126s-115-50-115-126V415Z" fill="url(#g)"/>' +
      '<path d="M185 240 145 90c-6-24 22-42 42-27l102 78M335 240 375 90c6-24-22-42-42-27l-102 78" fill="' + accent + '" opacity=".9"/>' +
      '<circle cx="218" cy="360" r="16" fill="#161616"/><circle cx="302" cy="360" r="16" fill="#161616"/>' +
      '<path d="M244 410c16 14 32 14 48 0" fill="none" stroke="#161616" stroke-width="14" stroke-linecap="round"/>' +
      '<path d="M160 492c62 34 135 42 220 0v72c-82 38-156 38-220 0v-72Z" fill="#fff" opacity=".34"/>' +
      '<text x="260" y="618" text-anchor="middle" font-family="Arial Black,Impact,sans-serif" font-size="54" fill="#161616" opacity=".72">' + label + '</text></svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  var DEFAULTS = [
    { media: svgData('01','#F4845F','#F8B195'), bg:'rgb(244,132,95)',  panel:'rgb(247,155,127)', label:'Luna', caption:'Chequeo preventivo' },
    { media: svgData('02','#6BBF7A','#B9F6C4'), bg:'rgb(107,191,122)', panel:'rgb(133,204,146)', label:'Max',  caption:'Vacunas y bienestar' },
    { media: svgData('03','#E882B4','#FFD0E6'), bg:'rgb(232,130,180)', panel:'rgb(237,157,196)', label:'Mia',  caption:'Grooming premium'    },
    { media: svgData('04','#6EB5FF','#C9E5FF'), bg:'rgb(110,181,255)', panel:'rgb(141,196,255)', label:'Nube', caption:'Emergencias 24/7'    }
  ];

  /* ─── CSS ─────────────────────────────────────────────────────────────── */
  var STYLE = [
    ':host{',
    '  display:block;width:100%;outline:none;',
    '  --yw-active-bg:rgb(244,132,95);',
    '  --yw-text:#fff;',
    '  --yw-font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
    '  --yw-display:Arial Black,Montserrat,Arial,sans-serif;',
    '  --yw-height:100%;',
    '  --yw-min-height:320px;',
    '  --yw-title-size:clamp(24px,4.2vw,46px);',
    '  --yw-center-height-desktop:82%;--yw-center-height-tablet:70%;--yw-center-height-mobile:90%;',
    '  --yw-center-height:var(--yw-center-height-desktop);',
    '  --yw-side-height-desktop:28%;--yw-side-height-tablet:24%;--yw-side-height-mobile:26%;',
    '  --yw-side-height:var(--yw-side-height-desktop);',
    '  --yw-back-height-desktop:22%;--yw-back-height-tablet:20%;--yw-back-height-mobile:18%;',
    '  --yw-back-height:var(--yw-back-height-desktop);',
    '  --yw-center-scale-desktop:1.32;--yw-center-scale-tablet:1.18;--yw-center-scale-mobile:1.04;',
    '  --yw-center-scale:var(--yw-center-scale-desktop);',
    '  --yw-side-scale:1;--yw-back-scale:1;',
    '  --yw-center-bottom:2%;--yw-center-bottom-mobile:-4%;',
    '  --yw-side-bottom:12%;--yw-side-bottom-mobile:15%;',
    '  --yw-back-bottom:12%;--yw-back-bottom-mobile:15%;',
    '  --yw-left-pos:30%;--yw-right-pos:70%;',
    '  --yw-left-pos-mobile:20%;--yw-right-pos-mobile:80%;',
    '  --yw-stage-center:50%;--yw-stage-center-mobile:50%;',
    '  --yw-transition-ms:650ms;',
    '  --yw-button-bg:#fff;--yw-button-text:#171717;',
    '}',

    /* ── Hero container ── */
    '.hero{position:relative;width:100%;min-height:var(--yw-min-height);height:var(--yw-height);overflow:hidden;color:var(--yw-text);font-family:var(--yw-font);background:var(--yw-active-bg);transition:background-color var(--yw-transition-ms) cubic-bezier(.4,0,.2,1);}',
    '.hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.03) 42%,rgba(255,255,255,.08));pointer-events:none;}',
    '.grain{position:absolute;inset:0;z-index:8;opacity:.22;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 180 180\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.45\'/%3E%3C/svg%3E");background-size:180px 180px;}',

    /* ── Carousel + items ── */
    /* contain:layout paint style keeps browser repaints inside this box */
    '.carousel{position:absolute;inset:0;z-index:3;contain:layout paint style;}',

    /* Desktop: all six properties transition (full sliding motion) */
    '.item{position:absolute;aspect-ratio:.6/1;',
    '  will-change:transform,opacity;',
    '  transition:',
    '    transform var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),',
    '    filter    var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),',
    '    opacity   var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),',
    '    left      var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),',
    '    bottom    var(--yw-transition-ms) cubic-bezier(.4,0,.2,1),',
    '    height    var(--yw-transition-ms) cubic-bezier(.4,0,.2,1);}',

    '.figure{position:relative;width:100%;height:100%;overflow:hidden;}',
    '.media{width:100%;height:100%;object-fit:contain;object-position:bottom center;display:block;}',

    /* Roles */
    '.item[data-role=center]{left:var(--yw-stage-center);bottom:var(--yw-center-bottom);height:var(--yw-center-height);z-index:20;opacity:1;filter:blur(0px);transform:translateX(-50%) scale(var(--yw-center-scale));}',
    '.item[data-role=left],.item[data-role=right]{bottom:var(--yw-side-bottom);height:var(--yw-side-height);z-index:10;opacity:.84;filter:blur(2px);transform:translateX(-50%) scale(var(--yw-side-scale));}',
    '.item[data-role=left]{left:var(--yw-left-pos);}',
    '.item[data-role=right]{left:var(--yw-right-pos);}',
    '.item[data-role=back]{left:var(--yw-stage-center);bottom:var(--yw-back-bottom);height:var(--yw-back-height);z-index:5;opacity:.58;filter:blur(3px);transform:translateX(-50%) scale(var(--yw-back-scale));}',

    /* Content + UI */
    '.content{position:absolute;left:clamp(18px,5vw,62px);top:58%;transform:translateY(-34%);z-index:20;width:min(42%,500px);max-width:calc(100% - 36px);}',
    '.brand{position:absolute;left:clamp(18px,4vw,54px);top:clamp(16px,3vw,30px);z-index:21;font-size:clamp(.58rem,1vw,.72rem);font-weight:800;letter-spacing:.22em;text-transform:uppercase;}',
    '.active{margin:0 0 10px;font-size:.78rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.9);}',
    'h1{margin:0;font-family:var(--yw-display);font-size:var(--yw-title-size);font-weight:900;letter-spacing:-.02em;line-height:1.04;text-transform:uppercase;max-width:13ch;}',
    '.body{max-width:390px;margin:14px 0 0;color:rgba(255,255,255,.92);font-size:clamp(.84rem,1.35vw,1rem);line-height:1.5;}',
    '.cta{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:14px 22px;border-radius:999px;background:var(--yw-button-bg);color:var(--yw-button-text);font-size:.78rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;box-shadow:0 16px 40px rgba(0,0,0,.18);transition:transform 180ms ease,box-shadow 180ms ease;}',
    '.cta:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 18px 52px rgba(0,0,0,.24);}',
    '.controls{position:absolute;right:clamp(18px,4vw,52px);bottom:clamp(22px,6vw,58px);z-index:22;display:flex;gap:10px;}',
    '.control{all:unset;width:46px;height:46px;border:1px solid rgba(255,255,255,.65);border-radius:999px;display:grid;place-items:center;cursor:pointer;background:rgba(255,255,255,.08);backdrop-filter:blur(10px);transition:transform 160ms ease,background 160ms ease;}',
    '.control:hover{transform:scale(1.06);background:rgba(255,255,255,.16);}',
    '.controls.is-hidden{display:none;}',

    /* Indicator dots */
    '.indicators{position:absolute;left:50%;bottom:clamp(18px,3vw,28px);transform:translateX(-50%);z-index:22;display:flex;gap:8px;align-items:center;}',
    '.dot{all:unset;width:7px;height:7px;border-radius:999px;background:rgba(255,255,255,.35);cursor:pointer;transition:background 240ms,width 260ms cubic-bezier(.4,0,.2,1),transform 140ms;box-sizing:border-box;}',
    '.dot[aria-current=true]{background:rgba(255,255,255,.95);width:22px;}',
    '.dot:hover{background:rgba(255,255,255,.68);transform:scale(1.18);}',
    '.dot:focus-visible{outline:2px solid rgba(255,255,255,.9);outline-offset:3px;}',

    /* Shimmer while media loads */
    '@keyframes yw-shimmer{from{background-position:200% 0}to{background-position:-200% 0}}',
    '.item.yw-loading .figure::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.03) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.03) 75%);background-size:200% 100%;animation:yw-shimmer 1.8s infinite linear;}',

    /* ── prefers-reduced-motion ── */
    '@media(prefers-reduced-motion:reduce){',
    '  .item{transition:opacity 150ms linear;}',
    '  .hero{transition:background-color 150ms linear;}',
    '  .dot{transition:background 150ms,width 150ms;}',
    '  .item.yw-loading .figure::after{animation:none;background:rgba(255,255,255,.08);}',
    '}',

    /* ─────────────────────────────────────────────────────────────────────
       MOBILE ≤700px
       KEY PERF FIX: only GPU-composited properties (transform + opacity)
       transition on mobile. left/bottom/height change instantly (no reflow
       during animation). blur filter removed (very expensive on mobile GPU).
    ───────────────────────────────────────────────────────────────────── */
    '@media(max-width:700px){',
    '  :host{--yw-min-height:480px;}',
    '  .hero{transition:background-color 480ms cubic-bezier(.4,0,.2,1);}',
    '  .hero::before{background:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.02) 48%,rgba(0,0,0,.22));}',

    /* GPU-only transition on mobile — no layout properties, no filter */
    '  .item{',
    '    transition:transform 480ms cubic-bezier(.4,0,.2,1),opacity 480ms cubic-bezier(.4,0,.2,1);',
    '    will-change:transform,opacity;',
    '  }',

    /* Remove blur filter entirely on mobile (main perf bottleneck) */
    '  .item[data-role=left],.item[data-role=right]{filter:none;}',
    '  .item[data-role=back]{filter:none;}',

    /* Mobile role positions */
    '  .item[data-role=center]{left:var(--yw-stage-center-mobile);height:var(--yw-center-height-mobile);bottom:var(--yw-center-bottom-mobile);transform:translateX(-50%) scale(var(--yw-center-scale-mobile));}',
    '  .item[data-role=left],.item[data-role=right]{height:var(--yw-side-height-mobile);bottom:var(--yw-side-bottom-mobile);}',
    '  .item[data-role=left]{left:var(--yw-left-pos-mobile);}',
    '  .item[data-role=right]{left:var(--yw-right-pos-mobile);}',
    '  .item[data-role=back]{height:var(--yw-back-height-mobile);bottom:var(--yw-back-bottom-mobile);left:var(--yw-stage-center-mobile);}',

    '  .content{position:absolute;left:18px;right:18px;top:auto;bottom:22px;transform:none;width:auto;max-width:none;z-index:22;}',
    '  h1{max-width:none;}',
    '  .body{max-width:300px;margin-top:8px;}',
    '  .cta{margin-top:12px;padding:12px 20px;}',
    '  .controls{right:16px;bottom:auto;top:clamp(12px,3vw,22px);}',
    '  .control{width:40px;height:40px;}',
    '  .indicators{display:none;}',
    '}',

    '@media(max-width:420px){',
    '  :host{--yw-min-height:430px;}',
    '  .brand{left:14px;top:14px;font-size:.52rem;letter-spacing:.18em;}',
    '  .content{left:14px;right:14px;bottom:18px;}',
    '  .body{max-width:270px;line-height:1.45;}',
    '  .controls{right:12px;top:clamp(10px,2.5vw,18px);gap:7px;}',
    '  .control{width:34px;height:34px;}',
    '}',
    '@media(max-width:340px){',
    '  :host{--yw-min-height:380px;--yw-left-pos-mobile:18%;--yw-right-pos-mobile:82%;}',
    '  .brand{font-size:.48rem;letter-spacing:.16em;}',
    '  .content{left:12px;right:12px;bottom:14px;}',
    '  .body{max-width:240px;font-size:.8rem;line-height:1.4;}',
    '  .controls{top:clamp(8px,2vw,14px);right:10px;}',
    '  .control{width:30px;height:30px;}',
    '}',
    '@media(max-width:300px){',
    '  :host{--yw-min-height:340px;}',
    '  .brand{max-width:160px;line-height:1.35;}',
    '  h1{max-width:8ch;}',
    '  .body{max-width:220px;font-size:.78rem;}',
    '}',
    '@media(min-width:701px) and (max-width:980px){',
    '  :host{--yw-title-size:clamp(24px,4.8vw,42px);--yw-center-height:var(--yw-center-height-tablet);--yw-side-height:var(--yw-side-height-tablet);--yw-back-height:var(--yw-back-height-tablet);--yw-center-scale:var(--yw-center-scale-tablet);--yw-stage-center:50%;--yw-left-pos:30%;--yw-right-pos:70%;}',
    '  .content{width:min(46%,430px);}',
    '  .body{max-width:330px;}',
    '}',
    '@media(max-height:520px){',
    '  :host{--yw-min-height:430px;--yw-title-size:clamp(22px,5vw,36px);}',
    '  .content{top:60%;}',
    '  .body{display:none;}',
    '}',
  ].join('');

  /* ─── Component ────────────────────────────────────────────────────────── */
  class YourWebHeroCarousel extends HTMLElement {
    static get observedAttributes() {
      return [
        'media-1','media-2','media-3','media-4',
        'image-1','image-2','image-3','image-4',
        'video-1','video-2','video-3','video-4',
        'media-type-1','media-type-2','media-type-3','media-type-4',
        'bg-1','bg-2','bg-3','bg-4',
        'panel-1','panel-2','panel-3','panel-4',
        'label-1','label-2','label-3','label-4',
        'caption-1','caption-2','caption-3','caption-4',
        'title-1','title-2','title-3','title-4',
        'brand','title','cta-label','cta-href',
        'font-family','display-font','text-color','button-bg','button-text',
        'height','min-height','title-size',
        'center-height','center-height-desktop','center-height-tablet','center-height-mobile',
        'side-height','side-height-desktop','side-height-tablet','side-height-mobile',
        'back-height','back-height-desktop','back-height-tablet','back-height-mobile',
        'center-scale','center-scale-desktop','center-scale-tablet','center-scale-mobile',
        'side-scale','back-scale','center-bottom','center-bottom-mobile',
        'side-bottom','side-bottom-mobile','back-bottom','back-bottom-mobile',
        'left-pos','right-pos','left-pos-mobile','right-pos-mobile',
        'stage-center','stage-center-mobile',
        'autoplay','interval','transition-ms','controls','grain'
      ];
    }

    constructor() {
      super();
      this._activeIndex    = 0;
      this._locked         = false;
      this._timer          = 0;
      this._adjacentTimer  = 0;
      this._observer       = null;
      this._isVisible      = true;
      this._isHovered      = false;
      this._touchStartX    = 0;
      this._interactionsSetup = false;
      this._centerLoaded   = false;
      this.attachShadow({ mode: 'open' });
      var style = document.createElement('style');
      style.textContent = STYLE;
      this.shadowRoot.appendChild(style);
      this._root = document.createElement('section');
      this._root.className = 'hero';
      this.shadowRoot.appendChild(this._root);
    }

    connectedCallback() {
      this._applyVars();
      this._render();
      this._setupInteractions();
    }

    disconnectedCallback() {
      this._stopAutoplay();
      if (this._adjacentTimer) window.clearTimeout(this._adjacentTimer);
      if (this._observer) { this._observer.disconnect(); this._observer = null; }
    }

    attributeChangedCallback() {
      if (!this.shadowRoot || !this._root) return;
      this._applyVars();
      this._centerLoaded = false;
      this._render();
      this._startAutoplay();
      if (this._isVisible) this._loadCenterMedia();
    }

    /* ── helpers ── */
    _isOff(v) {
      if (v == null || v === '') return false;
      v = String(v).toLowerCase().trim();
      return v === 'off' || v === 'false' || v === '0' || v === 'no';
    }
    _isOn(v) {
      if (v == null || v === '') return false;
      v = String(v).toLowerCase().trim();
      return v === 'on' || v === 'true' || v === '1' || v === 'yes';
    }
    _getAttr(name, fallback) {
      var v = this.getAttribute(name);
      return v == null || v === '' ? fallback : v;
    }

    _getSlides() {
      var slides = [];
      for (var i = 1; i <= 4; i++) {
        var base  = DEFAULTS[i - 1];
        var video = this.getAttribute('video-' + i);
        var image = this.getAttribute('image-' + i);
        var media = this.getAttribute('media-' + i) || video || image || base.media;
        var type  = this.getAttribute('media-type-' + i) || (video ? 'video' : this._guessType(media));
        slides.push({
          media, type,
          bg:      this._getAttr('bg-'      + i, base.bg),
          panel:   this._getAttr('panel-'   + i, base.panel),
          label:   this._getAttr('label-'   + i, base.label),
          caption: this._getAttr('caption-' + i, base.caption),
          title:   this._getAttr('title-'   + i, this._getAttr('title', 'Hero animado configurable'))
        });
      }
      return slides;
    }

    _guessType(url) {
      return /\.(mp4|webm|ogg)(\?|#|$)/i.test(String(url)) ? 'video' : 'image';
    }

    _roleFor(index) {
      if (index === this._activeIndex) return 'center';
      if (index === (this._activeIndex + 3) % 4) return 'left';
      if (index === (this._activeIndex + 1) % 4) return 'right';
      return 'back';
    }

    _applyVars() {
      var map = {
        'font-family':'--yw-font','display-font':'--yw-display','text-color':'--yw-text',
        'button-bg':'--yw-button-bg','button-text':'--yw-button-text',
        'height':'--yw-height','min-height':'--yw-min-height','title-size':'--yw-title-size',
        'center-height':'--yw-center-height','center-height-desktop':'--yw-center-height-desktop',
        'center-height-tablet':'--yw-center-height-tablet','center-height-mobile':'--yw-center-height-mobile',
        'side-height':'--yw-side-height','side-height-desktop':'--yw-side-height-desktop',
        'side-height-tablet':'--yw-side-height-tablet','side-height-mobile':'--yw-side-height-mobile',
        'back-height':'--yw-back-height','back-height-desktop':'--yw-back-height-desktop',
        'back-height-tablet':'--yw-back-height-tablet','back-height-mobile':'--yw-back-height-mobile',
        'center-scale':'--yw-center-scale','center-scale-desktop':'--yw-center-scale-desktop',
        'center-scale-tablet':'--yw-center-scale-tablet','center-scale-mobile':'--yw-center-scale-mobile',
        'side-scale':'--yw-side-scale','back-scale':'--yw-back-scale',
        'center-bottom':'--yw-center-bottom','center-bottom-mobile':'--yw-center-bottom-mobile',
        'side-bottom':'--yw-side-bottom','side-bottom-mobile':'--yw-side-bottom-mobile',
        'back-bottom':'--yw-back-bottom','back-bottom-mobile':'--yw-back-bottom-mobile',
        'left-pos':'--yw-left-pos','right-pos':'--yw-right-pos',
        'left-pos-mobile':'--yw-left-pos-mobile','right-pos-mobile':'--yw-right-pos-mobile',
        'stage-center':'--yw-stage-center','stage-center-mobile':'--yw-stage-center-mobile'
      };
      for (var attr in map) {
        if (Object.prototype.hasOwnProperty.call(map, attr)) {
          var val = this.getAttribute(attr);
          if (val != null && val !== '') this.style.setProperty(map[attr], val);
        }
      }
      var ms = this._getAttr('transition-ms', '650');
      this.style.setProperty('--yw-transition-ms', String(ms).replace('ms','') + 'ms');
    }

    _render() {
      var slides  = this._getSlides();
      var active  = slides[this._activeIndex] || slides[0];
      this.style.setProperty('--yw-active-bg', active.bg);

      var showControls = this._isOn(this.getAttribute('controls'));
      var grain = this._isOff(this.getAttribute('grain')) ? '' : '<div class="grain" aria-hidden="true"></div>';
      var ctaLabel = this._getAttr('cta-label', '');
      var ctaHtml  = ctaLabel
        ? '<a class="cta" href="' + this._normalizeHref(this._getAttr('cta-href','#')) + '">' + this._escape(ctaLabel) + ' →</a>'
        : '';

      var html = grain +
        '<div class="brand">'  + this._escape(this._getAttr('brand','YOURWEB HERO')) + '</div>' +
        '<div class="carousel" aria-label="Animated hero carousel">' +
          slides.map((s, i) => this._renderItem(s, i)).join('') +
        '</div>' +
        '<div class="content">' +
          '<p class="active" data-active-label>' + this._escape(active.label + ' / ' + active.caption) + '</p>' +
          '<h1 data-active-title>' + this._escape(active.title) + '</h1>' +
          ctaHtml +
        '</div>' +
        '<div class="indicators" role="tablist" aria-label="Slide navigation">' +
          slides.map((_, i) =>
            '<button class="dot" role="tab" type="button" data-goto="' + i + '" aria-label="Slide ' + (i+1) + '" aria-current="' + String(i === this._activeIndex) + '"></button>'
          ).join('') +
        '</div>' +
        (showControls
          ? '<div class="controls"><button class="control" type="button" data-dir="prev" aria-label="Anterior">‹</button><button class="control" type="button" data-dir="next" aria-label="Siguiente">›</button></div>'
          : '');

      this._root.innerHTML = html;

      this._root.querySelectorAll('[data-dir]').forEach(btn =>
        btn.addEventListener('click', () => this._navigate(btn.getAttribute('data-dir') || 'next'))
      );
      this._root.querySelectorAll('[data-goto]').forEach(dot =>
        dot.addEventListener('click', () => this._goTo(parseInt(dot.getAttribute('data-goto'), 10)))
      );

      // All items start with shimmer — nothing loads until explicitly triggered
      this._root.querySelectorAll('.item').forEach(item => item.classList.add('yw-loading'));

      this._updateScene();
    }

    /* All slides use data-src — zero network requests on initial render */
    _renderItem(slide, index) {
      var role = this._roleFor(index);
      var media = slide.type === 'video'
        ? '<video class="media" data-src="' + this._escapeAttr(slide.media) + '" muted loop playsinline preload="none"></video>'
        : '<img  class="media" data-src="' + this._escapeAttr(slide.media) + '" alt="' + this._escapeAttr(slide.label) + '" decoding="async" draggable="false" />';
      return '<article class="item" data-index="' + index + '" data-role="' + role + '" style="--panel:' + this._escapeAttr(slide.panel) + '" aria-hidden="' + String(role !== 'center') + '"><div class="figure">' + media + '</div></article>';
    }

    _updateScene() {
      var slides = this._getSlides();
      var active = slides[this._activeIndex] || slides[0];
      this.style.setProperty('--yw-active-bg', active.bg);

      var lbl = this._root.querySelector('[data-active-label]');
      var ttl = this._root.querySelector('[data-active-title]');
      if (lbl) lbl.textContent = active.label + ' / ' + active.caption;
      if (ttl) ttl.textContent = active.title;

      // Text stagger via WAAPI
      if (!window.matchMedia('(prefers-reduced-motion:reduce)').matches && typeof Element.prototype.animate === 'function') {
        var opts = { easing: 'cubic-bezier(.4,0,.2,1)', fill: 'both' };
        var fade = [{ opacity: 0, transform: 'translateY(9px)' }, { opacity: 1, transform: 'translateY(0)' }];
        if (lbl) lbl.animate(fade, Object.assign({}, opts, { duration: 300, delay: 60  }));
        if (ttl) ttl.animate(fade, Object.assign({}, opts, { duration: 340, delay: 120 }));
        var cta = this._root.querySelector('.cta');
        if (cta) cta.animate(fade, Object.assign({}, opts, { duration: 360, delay: 190 }));
      }

      // Update roles + promote center media + manage video
      this._root.querySelectorAll('[data-index]').forEach(item => {
        var idx  = parseInt(item.getAttribute('data-index'), 10);
        var role = this._roleFor(idx);
        item.setAttribute('data-role', role);
        item.setAttribute('aria-hidden', String(role !== 'center'));

        var media = item.querySelector('.media');
        if (!media) return;

        if (role === 'center' && media.getAttribute('data-src')) {
          this._promoteMedia(item, media, true);
        } else if (!media.getAttribute('data-src') && media.tagName === 'VIDEO') {
          if (role === 'center') { if (media.paused) media.play().catch(() => {}); }
          else                   { if (!media.paused) media.pause(); }
        }
      });

      // Sync dots
      this._root.querySelectorAll('.dot').forEach(dot =>
        dot.setAttribute('aria-current', String(parseInt(dot.getAttribute('data-goto'), 10) === this._activeIndex))
      );
    }

    /* Assign src from data-src, remove shimmer, manage video */
    _promoteMedia(item, media, isCenter) {
      var src = media.getAttribute('data-src');
      if (!src) return;
      media.removeAttribute('data-src');
      media.src = src;
      if (isCenter && media.tagName === 'IMG') media.setAttribute('fetchpriority', 'high');
      if (media.tagName === 'VIDEO') {
        media.load();
        if (isCenter) media.play().catch(() => {});
      }
      var done = () => item.classList.remove('yw-loading');
      if (media.tagName === 'VIDEO') {
        if (media.readyState >= 2) done(); else media.addEventListener('loadeddata', done, { once: true });
      } else {
        if (media.complete && media.naturalWidth > 0) done(); else media.addEventListener('load', done, { once: true });
      }
    }

    /* Load center slide — called when carousel enters viewport */
    _loadCenterMedia() {
      if (this._centerLoaded) return;
      var item  = this._root.querySelector('[data-index="' + this._activeIndex + '"]');
      if (!item) return;
      var media = item.querySelector('[data-src]');
      if (!media) { this._centerLoaded = true; return; }
      this._centerLoaded = true;
      this._promoteMedia(item, media, true);

      // After center loads, schedule adjacent based on connection speed
      var self = this;
      var schedule = () => {
        var delay = self._adjacentDelay();
        if (delay < 0) return;
        if (self._adjacentTimer) window.clearTimeout(self._adjacentTimer);
        self._adjacentTimer = window.setTimeout(() => self._loadAdjacentMedia(), delay);
      };
      media.tagName === 'VIDEO'
        ? media.addEventListener('loadeddata', schedule, { once: true })
        : media.addEventListener('load', schedule, { once: true });
      window.setTimeout(schedule, 1500); // fallback if event never fires (cached)
    }

    /* Load left + right slides — never loads back */
    _loadAdjacentMedia() {
      [(this._activeIndex + 1) % 4, (this._activeIndex + 3) % 4].forEach(i => {
        var item  = this._root.querySelector('[data-index="' + i + '"]');
        if (!item) return;
        var media = item.querySelector('[data-src]');
        if (media) this._promoteMedia(item, media, false);
      });
    }

    /* ms before loading adjacent; -1 = skip on very slow connections */
    _adjacentDelay() {
      var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        if (conn.saveData) return -1;
        if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return -1;
        if (conn.effectiveType === '3g') return 2500;
      }
      return 500;
    }

    _navigate(dir) {
      if (this._locked) return;
      var dur = parseInt(this._getAttr('transition-ms','650'), 10) || 650;
      this._locked = true;
      this._activeIndex = dir === 'prev' ? (this._activeIndex + 3) % 4 : (this._activeIndex + 1) % 4;
      this._updateScene();
      this._loadAdjacentMedia();
      window.setTimeout(() => { this._locked = false; }, dur);
      this._startAutoplay();
    }

    _goTo(target) {
      if (this._locked || target === this._activeIndex) return;
      var dur = parseInt(this._getAttr('transition-ms','650'), 10) || 650;
      this._locked = true;
      this._activeIndex = target;
      this._updateScene();
      this._loadAdjacentMedia();
      window.setTimeout(() => { this._locked = false; }, dur);
      this._startAutoplay();
    }

    _setupInteractions() {
      if (this._interactionsSetup) return;
      this._interactionsSetup = true;

      this.setAttribute('tabindex', '0');
      this.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft')  { e.preventDefault(); this._navigate('prev'); }
        if (e.key === 'ArrowRight') { e.preventDefault(); this._navigate('next'); }
      });

      this._root.addEventListener('touchstart', e => {
        this._touchStartX = e.touches[0].clientX;
        this._loadAdjacentMedia(); // start loading on touch — user likely to swipe
      }, { passive: true });

      this._root.addEventListener('touchend', e => {
        var delta = e.changedTouches[0].clientX - this._touchStartX;
        if (Math.abs(delta) > 44) this._navigate(delta < 0 ? 'next' : 'prev');
      }, { passive: true });

      this._root.addEventListener('mouseenter', () => { this._isHovered = true;  this._stopAutoplay();  });
      this._root.addEventListener('mouseleave', () => { this._isHovered = false; this._startAutoplay(); });

      if (typeof IntersectionObserver !== 'undefined') {
        this._observer = new IntersectionObserver(entries => {
          this._isVisible = entries[0].isIntersecting;
          if (this._isVisible) {
            this._loadCenterMedia();
            if (!this._isHovered) this._startAutoplay();
          } else {
            this._stopAutoplay();
          }
        }, { threshold: 0.1 });
        this._observer.observe(this);
      } else {
        this._loadCenterMedia();
        this._startAutoplay();
      }
    }

    _startAutoplay() {
      this._stopAutoplay();
      if (this._isOff(this.getAttribute('autoplay'))) return;
      if (!this._isVisible || this._isHovered) return;
      var interval = parseInt(this._getAttr('interval','1000'), 10) || 1000;
      this._timer = window.setInterval(() => this._navigate('next'), Math.max(interval, 400));
    }

    _stopAutoplay() {
      if (this._timer) window.clearInterval(this._timer);
      this._timer = 0;
    }

    _normalizeHref(href) {
      if (!href || href === '#') return '#';
      if (/^(https?:|mailto:|tel:|\/|#)/i.test(href)) return this._escapeAttr(href);
      if (String(href).indexOf('.') !== -1) return 'https://' + this._escapeAttr(String(href).replace(/^https?:\/\//i,''));
      return this._escapeAttr(href);
    }

    _escape(v) {
      return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
    }
    _escapeAttr(v) { return this._escape(v); }
  }

  if (!customElements.get('yourweb-hero-carousel')) {
    customElements.define('yourweb-hero-carousel', YourWebHeroCarousel);
  }
})();
