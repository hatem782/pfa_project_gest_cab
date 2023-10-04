export const openFullscreenImage = (imageUrl) => {
  const width = screen.width;
  const height = screen.height;

  const popup = window.open(
    imageUrl,
    "fullscreenImage",
    `width=${width},height=${height}`
  );
  popup.focus();
};
