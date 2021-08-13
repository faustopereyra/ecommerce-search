export type ProductDataType = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  state?: string;
  sold_quantity?: number;
  description?: string;
};

// export type SearchDataType = {
//   author: {
//     name: string;
//     lastname: string;
//   };
//   categories: string[];
//   items: ProductDataType[];
// };

// export type ProductDetailDataType = {
//   author: {
//     name: string;
//     lastname: string;
//   };
//   item: ProductDataType;
// };

export class SearchData {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[] | null;
  items: ProductDataType[];

  constructor({ author, items, categories = null }: any) {
    this.author = {
      name: author.name,
      lastname: author.lastname,
    };
    this.categories = categories;
    this.items = items.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.price.currency,
          amount: item.price.amount,
          decimals: item.price.decimals,
        },
        picture: item.picture,
        condition: item.condition,
        free_shipping: item.free_shipping,
        state: item.state,
      };
    });
  }
}

export class ProductData {
  author: {
    name: string;
    lastname: string;
  };
  item: ProductDataType;

  constructor({ author, item }: any) {
    this.author = {
      name: author.name,
      lastname: author.lastname,
    };
    this.item = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.price.currency,
        amount: item.price.amount,
        decimals: item.price.decimals,
      },
      picture: item.picture,
      condition: item.condition,
      free_shipping: item.free_shipping,
      sold_quantity: item.sold_quantity,
      description: item.description,
    };
  }
}
