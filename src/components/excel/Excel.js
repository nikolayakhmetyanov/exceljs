export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    return $root;
  }

  render() {
    this.components.forEach((Component) => {
      const component = new Component();
      this.$el.insertAdjacentHTML('beforeend', component.toHTML());
    })
  }
}
