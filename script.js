// contentScript.js
(() => {
  const uncheckFollowBox = () => {
    const followCheckbox = document.getElementById('follow-company-checkbox');
    if (followCheckbox && followCheckbox.checked) {
      followCheckbox.checked = false;
    }
  };

  // Observe the DOM for dynamically loaded elements
  const observer = new MutationObserver(uncheckFollowBox);
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial check for the checkbox
  uncheckFollowBox();
})();
