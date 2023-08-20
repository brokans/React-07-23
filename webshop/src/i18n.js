import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "admin",
      "contact": "Contacts",
      "shops": "Shops",
      "login": "Log In",
      "cart": "Cart ",
      "maintain-categories": "Maintain Categories",
      "maintain-shops": "Maintain Shops",
      "add-product": "Add Product ",
      "maintain-products": "Maintain Product",
      // Homepage
      "total-products": "Total Products:",
      "pcs": "pcs:",
      "sort-a-z": "Sort A-Z",
      "sort-z-a": "Sort Z-A",
      "sort-price-asc": "Sort Price Asc",
      "sort-price-desc": "Sort Proce Desc",
      "memory-bank": "Memory Bank",
      "usb-drive": "USB Drive",
      "tent": "Tent",
      "camping": "Camping",
      "addTo-cart": "Add To Cart",
      "details": "Details",
      // Cart
      "cart-empty": "Cart is Empty",
      "shop": "Shop",
      "products-in-cart": "Products in Cart",
      "product-in-cart": "Product in Cart",
      "empty-cart": "Empty Cart",
      "subtotal": "Subtotal",
      // Maintain Products
      "delete": "Delete",
      "edit": "Edit",
      // Edit Product
      "name": "Name:",
      "price": "Price:",
      "image": "Image:",
      "category": "Category:",
      "description": "Description:",
      "active": "Active:",
      
    }
  },
  ee: {
    translation: {
      "admin": "admin",
      "contact": "Kontaktid",
      "shops": "Poed",
      "login": "Sisselogimine",
      "cart": "Ostukorv",
      "maintain-categories": "Halda Kategooriad",
      "maintain-shops": "Halda Poode",
      "add-product": "Lisa Toode",
      "maintain-products": "Halda Tooteid",
      // Avaleht
      "total-products": "Toodete Koguarv:",
      "pcs": "tk:",
      "sort-a-z": "Sorteeri A-Z",
      "sort-z-a": "Sorteeri Z-A",
      "sort-price-asc": "Sorteeri Hind Kasvavalt",
      "sort-price-desc": "Sorteeri Hind Kahanevalt",
      "memory-bank": "Mälupank",
      "usb-drive": "USB Mälupulk",
      "tent": "Telk",
      "camping": "Matkamine",
      "addTo-cart": "Lisa Ostukorvi",
      "details": "Üksikasjad",
      //Ostukorv
      "cart-empty": "Ostukorv on Tühi",
      "shop": "Poodi",
      "products-in-cart": "Toodet Ostukorvis",
      "product-in-cart": "Toode Ostukorvis",
      "empty-cart": "Tühjenda Ostukorv",
      "subtotal": "Summa",
      // Halda Tooteid
      "delete": "Kustuta",
      "edit": "Muuda",
      // Halda Toodet
      "name": "Nimi:",
      "price": "Hind:",
      "image": "Pilt:",
      "category": "Kategooria:",
      "description": "Kirjeldus:",
      "active": "Aktiivne:",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;