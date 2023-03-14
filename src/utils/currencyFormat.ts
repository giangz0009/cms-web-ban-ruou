function numberWithCommas(x: number, commas = ".") {
  try {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, commas);
  } catch (error) {
    console.log({ error });
    return x.toString();
  }
}

export { numberWithCommas };
