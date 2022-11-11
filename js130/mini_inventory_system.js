/* 
3 components
- item creator
- items manager
- reports manager

Item creator
- test presence and validity of items

Item manager
- creating items
- updating information
- deleting items
- query information about items

Report manager
- generate reports for a 
  - specific item 
  - ALL items

Item features
- skuCode code: unique identifier. first 3 letters of the item and first 2 letters of the category
  - if multiple words, and the first word is 2 or fewer letters, the second item's letters are used as the other leading chars for the item
- Item itemName: must consist of min 5 chars. Spaces are not counted
- categroy: minimum of 5 chars. must be one word
- quantity: quantity. must be blank. assume that a valid num is provided.

Item manager methods
*/



let itemCreator = (function () {
  function generateSKU(itemName, category) {
    let condenseName = itemName.replaceAll(/\s/g, '');
    return condenseName.slice(0, 3).concat(category.slice(0, 2)).toUpperCase();
  };

  function validateName(itemName) {
    return itemName.length >= (/\s/.test(itemName) ? 6 : 5);
  };

  function validateCategory(category) {
    return category.length >= 5;
  };

  function validateQuant(quantity) {
    return quantity !== undefined;
  };

  return function (itemName, category, quantity) {
    if (validateName(itemName) && validateCategory(category) && validateQuant(quantity)) {
      this.skuCode = generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {

  items: [],

  create(itemName, category, quantity) {
    let item = new itemCreator(itemName, category, quantity);
    if (item.notValid) return false;

    let selection = this.selectBySKU(item.skuCode);

    if (selection) {
      this.update(item.skuCode, item);
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, object) {
    let selection = this.selectBySKU(skuCode);
    Object.assign(selection, object);
  },

  delete(skuCode) {
    let selection = this.selectBySKU(skuCode);
    this.items.splice(this.items.indexOf(selection), 1);
  },

  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;
    })
  },

  itemsInCategory(category) {
    return this.items.filter(item => {
      return item.category === category;
    })
  },

  selectBySKU(skuCode) {
    return this.items.filter(item => {
      return item.skuCode === skuCode;
    }).shift();
  }
};

let ReportManager = {
  items: undefined,

  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    let selection = this.items.selectBySKU(skuCode);

    return {
      itemInfo() {
        for (let prop in selection) {
          if (!selection.hasOwnProperty(prop)) continue;
          console.log(`${prop}: ${selection[prop]}`);
        }
      },
    }
  },

  reportInStock() {
    let inStockCSV = this.items.inStock().reduce((vals, item) => {
      vals.push(item.itemName);
      return vals;
    }, []).toString();

    console.log(inStockCSV);
  },
}
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10