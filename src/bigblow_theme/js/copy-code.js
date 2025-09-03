document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("pre.src").forEach(function(block) {
    // Wrap the pre in a container
    var wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    // Add button
    var button = document.createElement("button");
    button.innerText = "⧉";
    button.className = "copy-btn";
    wrapper.appendChild(button);

    // Copy on click
    button.addEventListener("click", function() {
      navigator.clipboard.writeText(block.innerText).then(function() {
        button.innerText = "✓";
        setTimeout(() => button.innerText = "⧉", 1000);
      });
    });
  });
});
