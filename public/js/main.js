//to import js files here
// const a = fetch('/my-custom.js', (muJsLoic) => {
//   console.log(muJsLoic)
// })
// const b = fetch('/my-custom.js', (muJsLoic) => {
//   console.log(muJsLoic)
// })
// const c = fetch('/my-custom.js', (muJsLoic) => {
//   console.log(muJsLoic)
// })

// Promise.all([a, b, c])

document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR BURGER FIX
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Show/Hide aside menu on button menu click
  const menuToggleButtons = Array.prototype.slice.call(
    document.getElementsByClassName("js--toggle-aside-button")
  );

  // Check if there are any menu toggling buttons
  if (menuToggleButtons.length > 0) {
    const hasAsideComponents = Array.prototype.slice.call(
      document.getElementsByClassName("js--toggle-aside-content")
    );

    const menuContainers = Array.prototype.slice.call(
      document.getElementsByClassName("js--toggle-aside")
    );

    // Add a click event on each menu-toggling button
    menuToggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleMenus(menuToggleButtons, hasAsideComponents, menuContainers);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Switch between list and grid on click of relevant icons
  const gridButton = Array.prototype.slice.call(
    document.querySelectorAll(".js--modeOpposite-button"),
    0
  )[0];
  const listButton = Array.prototype.slice.call(
    document.querySelectorAll(".js--modeDefault-button"),
    0
  )[0];

  const gridContainer = Array.prototype.slice.call(
    document.querySelectorAll(".js--modeOpposite-parent"),
    0
  )[0];
  const listContainer = Array.prototype.slice.call(
    document.querySelectorAll(".js--modeDefault-parent"),
    0
  )[0];

  if (gridButton && listButton && gridContainer && listContainer) {
    gridButton.addEventListener("click", () => {
      switchListAndGridContainers(gridContainer, listContainer);
      switchListAndGridButtons(gridButton, listButton);
      listButton.classList.remove("is-disabled");
      gridButton.classList.add("is-disabled");
    });
    listButton.addEventListener("click", () => {
      switchListAndGridContainers(gridContainer, listContainer);
      switchListAndGridButtons(gridButton, listButton);
      listButton.classList.add("is-disabled");
      gridButton.classList.remove("is-disabled");
    });
  }
});

/**
 * @param {boolean} withCircleIcon add true if circle icon available .
 */
function expandWithId(event, targetId, withCircleIcon) {
  let expandContainer = document.getElementById(targetId);
  expandContainer.classList.toggle("is-hidden");
  if (withCircleIcon) {
    event.currentTarget
      .querySelector("i")
      .classList.toggle("mi-remove-circle-outline");
    event.currentTarget
      .querySelector("i")
      .classList.toggle("mi-add-circle-outline");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Toggle visibility of js--expand components

  const expandContainers = Array.prototype.slice.call(
    document.querySelectorAll(".js--expand-parent"),
    0
  );

  if (expandContainers.length > 0) {
    expandContainers.forEach((container) => {
      switchExpandButton(container);
    });
  }
});

// Switch visibility of expand container on click of expand icon
function switchExpandButton(expandContainer) {
  const expandButton = Array.prototype.slice.call(
    document.querySelectorAll(".js--expand-button"),
    0
  );

  if (expandButton.length > 0) {
    expandButton.forEach((expandButton) => {
      expandButton.addEventListener("click", () => {
        expandButton.classList.toggle("mi-remove-circle-outline");
        expandButton.classList.toggle("mi-add-circle-outline");
        expandContainer.classList.toggle("is-hidden");
      });
    });
  }
}

// Swich visibility between list and grid in Portfolio
function switchListAndGridContainers(gridContainer, listContainer) {
  listContainer.classList.toggle("is-hidden");
  gridContainer.classList.toggle("is-hidden");
}

// Swich active button between list and grid buttons in Portfolio
function switchListAndGridButtons(gridButton, listButton) {
  gridButton.classList.toggle("is-selected");
  listButton.classList.toggle("is-selected");
}

// Show/hide the asside menu in
function toggleMenus(menuToggleButtons, hasAsideComponents, menuContainers) {
  function toggleButtonIconMenu(button) {
    let iconMenu = button.querySelector("i");
    iconMenu.classList.toggle("icon-menu-open");
    iconMenu.classList.toggle("icon-menu");
  }

  menuToggleButtons.map((button) => {
    if (button.dataset.tooltip === "Hide menu") {
      toggleButtonIconMenu(button);
      button.dataset.tooltip = "Show menu";
    } else {
      toggleButtonIconMenu(button);
      button.dataset.tooltip = "Hide menu";
    }
  });

  hasAsideComponents.forEach((component) =>
    component.classList.toggle("has-aside")
  );

  menuContainers.forEach((container) => {
    container.classList.toggle("is-hidden-mobile");
    container.classList.toggle("is-hidden");
    const containerAsideChild = container.querySelector("aside.is-sticky");
    containerAsideChild.classList.toggle("is-hidden-mobile");
  });
}
// Toggle apps and tabs menu
document.addEventListener("DOMContentLoaded", () => {
  const bodyElement = Array.prototype.slice.call(
    document.getElementsByClassName("as-browser"),
    0
  )[0];

  const appsMenu = Array.prototype.slice.call(
    document.getElementsByClassName("js--toggle-navbar"),
    0
  )[0];

  const appWrapper = Array.prototype.slice.call(
    document.getElementsByClassName("js--toggle-navbar-content"),
    0
  )[0];

  const tabsMenus = Array.prototype.slice.call(
    document.getElementsByClassName("navbar tabs"),
    0
  );

  const topPositionedEelements = Array.prototype.slice.call(
    document.getElementsByClassName("js--toggle-navbar-native"),
    0
  );

  const topPositionedComposedAppElements = Array.prototype.slice.call(
    document.getElementsByClassName("js--toggle-navbar-composed"),
    0
  );

  if (appsMenu) {
    let mainNavButton = Array.prototype.slice.call(
      document.getElementsByClassName("js--toggle-navbar-button"),
      0
    )[0];

    mainNavButton.addEventListener("click", () => {
      let buttonParrent = mainNavButton.closest(".js--toggle-navbar-parent");
      let buttonIcon = mainNavButton.querySelector("i");
      buttonIcon.classList.toggle("icon-expand");
      buttonIcon.classList.toggle("icon-shrink");

      //applicable for composed-apps
      if (tabsMenus.length > 0) {
        tabsMenus.forEach((menu) => menu.classList.toggle("is-hidden"));
        buttonParrent.classList.toggle("has-composed-app");
        bodyElement.classList.toggle("has-composed-app");
        topPositionedComposedAppElements.forEach((element) => {
          element.classList.toggle("js--toggle-navbar-composed");

          element.classList.toggle("is-top");
          element.classList.toggle("is-fixed-top");
        });
      }

      appsMenu.classList.toggle("is-hidden");

      if (topPositionedEelements.length > 0) {
        topPositionedEelements.forEach((element) => {
          element.classList.toggle("js--toggle-navbar-native");
        });
      }

      bodyElement.classList.toggle("is-shrinked");
    });
  }
});

// TABS
function openTab(evt, tabName) {
  let i;
  let x;
  let tablinks;
  let currentTabsNode = evt.currentTarget.closest('.tabs')
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = currentTabsNode.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    if(tablinks[i]){
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}

function switchMenuTabPair(event, showId, hideId) {
  let showElement = document.getElementById(showId);
  let hideElement = document.getElementById(hideId);
  showElement.classList.remove("is-hidden");
  hideElement.classList.add("is-hidden");
  let currentTabs = event.currentTarget
    .closest(".tabs")
    .querySelectorAll(".tab");
  currentTabs.forEach((tab) => tab.classList.remove("is-active"));
  event.currentTarget.classList.add("is-active");
}

// Get all dropdowns on the page that aren't hoverable and aren't unclickable.
// const dropdowns = document.querySelectorAll(".dropdown:not(.is-hoverable)");
const dropdowns = document.querySelectorAll(
  ".dropdown:not(.is-hoverable):not(.js--is-unclickable)"
);

if (dropdowns.length > 0) {
  // For each dropdown, add event handler to open on click.
  dropdowns.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      el.classList.toggle("is-active");
    });
  });
}

// If user clicks outside dropdown, close it.
document.addEventListener("click", function (e) {
  closeDropdowns();
});

// Close dropdowns by removing `is-active` class.
function closeDropdowns() {
  dropdowns.forEach(function (el) {
    el.classList.remove("is-active");
  });
}

// Close dropdowns if ESC pressed
document.addEventListener("keydown", function (event) {
  let e = event || window.event;
  if (e.key === "Esc" || e.key === "Escape") {
    closeDropdowns();
  }
});

const handleDropdownClick = (triggerId, targetId) => {
  let triggerEl = document.querySelector(triggerId);
  let targetEl = document.querySelector(targetId);

  if (triggerEl && targetEl) {
    let triggerButton = triggerEl.querySelector(`${triggerId}>button`);
    triggerEl.addEventListener("click", () => {
      let triggerIcon = triggerButton.firstElementChild;

      targetEl.classList.toggle("is-active");
      triggerButton.classList.toggle("is-active");
      triggerButton.classList.toggle("has-tooltip-arrow");

      if (triggerIcon.classList.contains("mi-add")) {
        triggerButton.classList.toggle("rotate-45");
      }

      let ignoreClickElement = targetEl.querySelector(".dropdown-menu");

      document.addEventListener("click", (event) => {
        let isClickInsideElement = ignoreClickElement.contains(event.target);
        let isClickInsideTriggerEl = triggerEl.contains(event.target);
        if (!isClickInsideElement && !isClickInsideTriggerEl) {
          targetEl.classList.remove("is-active");
          triggerButton.classList.remove("is-active");

          if (triggerIcon.classList.contains("mi-add")) {
            triggerButton.classList.remove("rotate-45");
          }
          triggerButton.classList.add("has-tooltip-arrow");
        }
      });
    });
  }
};

handleDropdownClick("#js--trigger-add-node", "#js--dropdown-add-node");
handleDropdownClick("#js--trigger-preview-box", "#js--dropdown-preview-box");
handleDropdownClick("#js--trigger-shortcuts", "#js--dropdown-shortcuts");
handleDropdownClick("#js--trigger-change-type", "#js--dropdown-change-type");

//  Expand/Collapse
document.addEventListener("DOMContentLoaded", function () {
  let cardToggles = document.getElementsByClassName("is-collapsible");
  for (let i = 0; i < cardToggles.length; i++) {
    cardToggles[i].addEventListener("click", (e) => {
      e.currentTarget.parentElement.childNodes[3].classList.toggle("is-hidden");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const browseButton = document.getElementById("js--config-browse-button");
  const editButton = document.getElementById("js--config-edit-button");
  const nodeButton = document.getElementById("js--config-node-button");
  if (browseButton) {
    browseButton.addEventListener("click", () => {
      document.location.pathname = "config/browse";
    });
  }
  if (editButton) {
    editButton.addEventListener("click", () => {
      document.location.pathname = "config/edit";
    });
  }
  if (document.location.pathname === "/config/browse") {
    browseButton.classList.add("is-active");
    editButton.classList.remove("is-active");
  }
  if (document.location.pathname === "/config/edit") {
    browseButton.classList.remove("is-active");
    editButton.classList.add("is-active");
    if (nodeButton) {
      nodeButton.addEventListener("click", () => {
        nodeButton.classList.add("is-editable");
      });
      document.addEventListener("click", (event) => {
        let ignoreClickElement = nodeButton;
        let isClickInsideElement = ignoreClickElement.contains(event.target);
        if (!isClickInsideElement) {
          nodeButton.classList.remove("is-editable");
        }
      });
    }
  }
});

// adds is-active to clicked navbar-item
document.addEventListener("DOMContentLoaded", function () {
  let navbarItems = document.querySelectorAll(".navbar-item");
  let currentPath = document.location.pathname;
  navbarItems.forEach((item) => {
    item.classList.remove("is-acrive");
    let itemLink = item.querySelector("a");

    if (itemLink) {
      let itemHref = itemLink.getAttribute("href");
      if (currentPath.includes(itemHref)) {
        item.classList.add("is-active");
      }
    }
  });
});

// Indeterminate checkbox
document.addEventListener("DOMContentLoaded", function () {
  let checkboxes = document.querySelectorAll(".panel-block .is-checkradio");
  let spanValueEl = document.querySelector("#js--change-selected-all-value");
  let checkall = document.getElementById("indeterminate");
  if (checkall) {
    checkall.indeterminate = true;

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].onclick = function () {
        let checkedCount = document.querySelectorAll(
          ".panel-block .is-checkradio:checked"
        ).length;

        checkall.checked = checkedCount > 0;
        checkall.indeterminate =
          checkedCount > 0 && checkedCount < checkboxes.length;
        if (checkedCount > 0) {
          spanValueEl.innerHTML = checkedCount + " selected";
        } else {
          spanValueEl.innerHTML = "Select all";
        }
      };
    }
    checkall.onclick = function () {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
        let checkedCount = document.querySelectorAll(
          ".panel-block .is-checkradio:checked"
        ).length;
        if (checkedCount > 0) {
          spanValueEl.innerHTML = checkedCount + " selected";
        } else {
          spanValueEl.innerHTML = "Select all";
        }
      }
    };
  }
});

//Controlls quickview blurred background
document.addEventListener("DOMContentLoaded", function () {
  let quickviewButtons = document.querySelectorAll("[data-show='quickview']");

  let divBackground = document.querySelector("#js--blur-quickview-background");

  quickviewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let quickviewDismissElements = document.querySelectorAll(
        "[data-dismiss='quickview']"
      );

      if (divBackground) {
        divBackground.classList.add("has-quickview");
        quickviewDismissElements.forEach((element) => {
          element.addEventListener("click", () => {
            divBackground.classList.remove("has-quickview");
          });
        });
      }
    });
  });
});
