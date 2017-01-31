import items from './item_data.js';

export default class ItemModel {
  constructor() {
    this.items = items;
  }

  getItemData() {
    return this.items;
  }

  getItemById(itemId) {
    let foundItem;

    this.items.some( (item) => {
      if( item.id === itemId ) {
        foundItem = item;
        return true;
      }

      return false;
    });

    return foundItem;
  }

}
