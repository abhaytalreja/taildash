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
    isTopNavPages: false,
    toggleTopNavPages() {
      this.isTopNavPages = !this.isTopNavPages;
    },
    hideTopNavPages() {
      this.isTopNavPages = false;
    },
    isUserPopUp: false,
    toggleUserPopUp() {
      this.isUserPopUp = !this.isUserPopUp;
    },
    hideUserPopUp() {
      this.isUserPopUp = false;
    },
    isLanguagePopUp: false,
    toggleLanguagePopUp() {
      this.isLanguagePopUp = !this.isLanguagePopUp;
    },
    hideLanguagePopUp() {
      this.isLanguagePopUp = false;
    },
    isSideMenu: false,
    closeSideMenu() {
      this.isSideMenu = false;
    },
  };
}
