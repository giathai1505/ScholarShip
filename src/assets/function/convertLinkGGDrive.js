export const ConvertLinkGGDrive = (oldLink) => {
  let id = oldLink.slice(33);

  return "https://drive.google.com/uc?id=" + id;
};
