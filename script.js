const sidebarElement = document.querySelector ('.sidebar-container');
    const menuElement = document.querySelector ('.menu-container');
    const closeImage = document.querySelector('.close-image');

    function toggleSidebar () {
      if (sidebarElement.classList.contains ('sidebar-slide')) {
        sidebarElement.classList.add ('sidebar-hide');
      }
      else {
        sidebarElement.classList.add ('sidebar-slide');
        sidebarElement.classList.remove ('sidebar-hide');
      }
      setTimeout (checkSidebar, 500);
    }

    function checkSidebar () {
      if (sidebarElement.matches (".sidebar-slide.sidebar-hide") ) {
        sidebarElement.classList.remove ('sidebar-slide');
        sidebarElement.classList.remove ('sidebar-hide');
      }
    }
