// This script can be used to add dynamic features or handle link clicks if needed

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
      alert(`You clicked: ${link.textContent}`);
    });
  });
  