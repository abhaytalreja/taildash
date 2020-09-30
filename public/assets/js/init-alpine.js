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
    isMiniMenu: false,
    toggleMiniMenu() {
      this.isMiniMenu = !this.isMiniMenu;
    },
    isMiniMenuHover: false,
    toggleMiniMenuHover() {
      this.isMiniMenuHover = !this.isMiniMenuHover;
    },
    showForMiniMenu() {
      return !this.isMiniMenu || this.isMiniMenuHover;
    },
    hideForMiniMenu() {
      return this.isMiniMenu && !this.isMiniMenuHover;
    },
  };
}
