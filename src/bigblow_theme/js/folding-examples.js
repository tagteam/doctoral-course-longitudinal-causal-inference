document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.foldable-example .header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
});
