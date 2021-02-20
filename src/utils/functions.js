const parseConsumable = (shipConsumables) => {
  try {
    const number = `${shipConsumables}`.match(/(\d+)/g)[0];
    const unity = `${shipConsumables}`.match(
      /(?<unity>year|month|week|day)/g,
    )[0];
    switch (unity) {
      case 'year':
        return number * 12 * 30 * 24;
      case 'month':
        return number * 30 * 24;
      case 'week':
        return number * 7 * 24;
      case 'day':
        return number * 24;
    }
    return '';
  } catch (ex) {
    return '';
  }
};

export const stepsByMGLT = (amountMglt, shipMglt, shipConsumables) => {
  if (
    amountMglt !== '' &&
    !['unknown', '', null, undefined].includes(shipMglt) &&
    !['unknown', '', null, undefined].includes(shipConsumables)
  ) {
    const consumable = parseConsumable(shipConsumables);
    if (consumable !== '') {
      return parseInt(amountMglt / (shipMglt * consumable), 10);
    }
    return '';
  }
  return '';
};
