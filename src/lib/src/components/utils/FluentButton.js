export default class FluentButton {

  constructor(rootEl, { outerReveal }) {
    this.rootEl = typeof rootEl === 'string' ? document.querySelector(rootEl) : rootEl;
    if (FluentButton.elements.has(this.rootEl)) return;
    FluentButton.elements.add(this.rootEl);

    this.el = this.rootEl.firstElementChild;
    
    this.el.addEventListener('touchstart', this.startRipple);
    this.el.addEventListener('mousedown', this.startRipple);
    this.el.onmousedown = this.el.ontouchstart = this.addPressedState;
    this.el.onmouseup = this.el.onmouseleave = this.el.ontouchend = this.removePressedState;

    if (!outerReveal) this.el.onmousemove = this.updateCoordinates;else
    {
      FluentButton.outerRevealElements.set(this.el, this.getElementDimensions(this.el));
      if (!FluentButton.observingOuterReveal) this.observeOuterReveal();
    }
  }

  updateCoordinates({ pageX, pageY, currentTarget }) {
    const x = pageX - currentTarget.offsetLeft;
    const y = pageY - currentTarget.offsetTop;

    currentTarget.style.setProperty('--x', `${x}px`);
    currentTarget.style.setProperty('--y', `${y}px`);

    return { x, y };
  }

  startRipple({ currentTarget }) {
    currentTarget.classList.remove('app-fluent--ripple'); // remove prev
    // Add again to (re)start animation
    setTimeout(() => currentTarget.classList.add('app-fluent--ripple'), 25);
  }
  

  observeOuterReveal() {
    FluentButton.observingOuterReveal = true;

    window.addEventListener('resize', this.updateElementDimensions.bind(this));
    window.addEventListener('mousemove', event => {
      window.requestAnimationFrame(this.updateOuterReveal.bind(this, event));
    });
    window.addEventListener('touchmove', ({ touches }) => {
      const [{ clientX, clientY }] = touches;
      const position = { pageX: clientX, pageY: clientY };
      window.requestAnimationFrame(this.updateOuterReveal.bind(this, position));
    });
  }

  updateOuterReveal({ pageX, pageY }) {
    for (const [el, { width, height }] of FluentButton.outerRevealElements) {
      const { x, y } = this.updateCoordinates({ pageX, pageY, currentTarget: el });

      if (this.isInRevealThreshold({ x, y, width, height })) {
        el.classList.add('app-fluent--reveal');
      } else {
        el.classList.remove('app-fluent--reveal');
      }
    }
  }

  isInRevealThreshold({ x, y, width, height }) {
    const threshold = FluentButton.outerRevealThreshold;
    return (
      x > -threshold && x < width + threshold &&
      y > -threshold && y < height + threshold);

  }

  getElementDimensions(el) {
    const { width, height } = el.getBoundingClientRect();
    return { width, height };
  }
  updateElementDimensions() {
    for (const [el] of FluentButton.outerRevealElements) {
      FluentButton.outerRevealElements.set(el, this.getElementDimensions(el));
    }
  }

  destroy() {
    FluentButton.outerRevealElements.delete(this.el);
    FluentButton.elements.delete(this.rootEl);
  }}


  function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { 
                value: value, 
                enumerable: true, 
                configurable: true, 
                writable: true 
                });
            }
    else {
        obj[key] = value;
    }
    return obj;
}


/* *** */
_defineProperty(FluentButton, "elements", new Set());
_defineProperty(FluentButton, "outerRevealElements", new Map());
_defineProperty(FluentButton, "outerRevealThreshold", 15);
_defineProperty(FluentButton, "observingOuterReveal", false);