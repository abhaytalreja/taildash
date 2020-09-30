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
    isSubMenu: false,
    toggleSubMenu() {
      this.isSubMenu = !this.isSubMenu;
    },
  };
}
