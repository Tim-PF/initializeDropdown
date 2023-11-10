export default function initializeDropdown(triggerSelector, menuSelector) {
    console.log("initializeDropdown called");
     console.log(triggerSelector)
     const triggers = document.querySelectorAll(triggerSelector);
     const menus = document.querySelectorAll(menuSelector);
 
    
   
     triggers.forEach((trigger, index) => {
       trigger.addEventListener("mouseenter", () => {
         menus[index].classList.add("visible");
       });
   
       trigger.addEventListener("mouseleave", () => {
         menus[index].classList.remove("visible");
       });
   
       trigger.addEventListener("click", () => {
         menus[index].classList.toggle("visible");
       });
     });
   }