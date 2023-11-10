# tim-pf-initializedropdown

A simple and lightweight JavaScript function to create interactive dropdown menus with ease.

## Installation

```bash
npm install tim-pf-initializedropdown
```
## Features
* Easy Integration: Add dropdown functionality to your elements by calling initializeDropdown with trigger and menu selectors.

* Hover and Click Events: Dropdown menus appear on hover and hide on mouseleave. Clicking the trigger toggles visibility, providing a seamless user experience.

  
## Usage

```javascript
import initializeDropdown from 'tim-pf-initializedropdown';

// Selectors for triggers and menus
const triggerSelector = '.trigger-class';
const menuSelector = '.menu-class';

// Initialize the dropdown
initializeDropdown(triggerSelector, menuSelector);
```
## Example

```html
<button class="trigger-class">Dropdown Trigger</button>
<div class="menu-class">
  <!-- Dropdown content goes here -->
</div>

<script type="module">
  import initializeDropdown from 'tim-pf-initializedropdown';

  // Selectors for triggers and menus
  const triggerSelector = '.trigger-class';
  const menuSelector = '.menu-class';

  // Initialize the dropdown
  initializeDropdown(triggerSelector, menuSelector);
</script>
```
