import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import kategori from "./modules/kategori";
import product from "./modules/product";
import cart from "./modules/cart";
import order from "./modules/order";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        kategori,
        product,
        cart,
        order
    },
});

export default store;