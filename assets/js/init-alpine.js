function data() {
  return {
    // Show Content
    showContent: false,
    hideContentButton() {
      this.showContent = false;
    },
    showContentButton() {
      this.showContent = true;
    },
  };
}
