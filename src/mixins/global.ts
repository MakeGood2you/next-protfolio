export const globalMixin = {
  method: {
    scrollToElement(el: any) {
      if (el) {
        el.scrollIntoView({ behavior : 'smooth' })
      }
    },
  },
}

