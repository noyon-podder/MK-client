const getImgUrl = (name: string) => {
  return new URL(`../assets/img/testimonial/${name}`, import.meta.url).href;
};

export { getImgUrl };
