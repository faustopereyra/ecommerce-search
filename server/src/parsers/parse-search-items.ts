type itemDetail = {
  id: any;
  title: any;
  price: {
    currency: any;
    amount: number;
    decimals: number;
  };
  picture: any;
  condition: any;
  free_shipping: any;
  state?: string | undefined;
  description?: any;
  sold_quantity?: any;
};

const parseSearchItem = (item: any, description: any = false) => {
  const {
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping,
    address,
  } = item;
  const state = address && address.state_name;
  const [amount, decimals] = price.toString().split(".");
  let data: itemDetail = {
    id,
    title,
    price: {
      currency: currency_id,
      amount: parseInt(amount),
      decimals: decimals ? parseInt(decimals) : 0,
    },
    picture: thumbnail,
    condition: condition,
    free_shipping: shipping.free_shipping,
    state,
  };

  if (description) {
    data = {
      ...data,
      picture: item.pictures[0].url,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    };
  }

  return data;
};

export default parseSearchItem;
