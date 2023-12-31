import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
      translation: {
        "avaleht": "Homepage",
        "meist": "About Us",
        "kontaktid": "Contacts",
        "uudised": "News",
        "vota-yhendust": "Contact Me",
        "halda": "Manage News",
        "lisa": "Add News",
        "total-news": "News in total: ",
        "yks-uudis": "News View"
        
      }
    },
    ee: {
      translation: {
        "avaleht": "Avaleht",
        "meist": "Meist",
        "kontaktid": "Kontaktid",
        "uudised": "Uudised",
        "vota-yhendust": "Võta Ühendust",
        "halda": "Halda Uudiseid",
        "lisa": "Lisa Uudiseid",
        "total-news": "Uudiseid kokku: ",
        "yks-uudis": "Üks uudis"
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