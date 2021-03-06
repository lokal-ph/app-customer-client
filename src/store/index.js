import Vue from "vue";
import Vuex from "vuex";
import globalStoreModule from "@/store/modules/global-store-module";
import authenticationStoreModule from "@/store/modules/authentication-store-module";
import shopStoreModule from "@/store/modules/shop-store-module";
import accountStoreModule from "@/store/modules/account-store-module";
import productStoreModule from "@/store/modules/product-store-module";
import offerStoreModule from "@/store/modules/offer-store-module";
import transactionStoreModule from "@/store/modules/transaction-store-module";
import reviewStoreModule from "@/store/modules/review-store-module";
import chatStoreModule from "@/store/modules/chat-store-module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        global: globalStoreModule,
        authentication: authenticationStoreModule,
        shop: shopStoreModule,
        account: accountStoreModule,
        product: productStoreModule,
        offer: offerStoreModule,
        transaction: transactionStoreModule,
        review: reviewStoreModule,
        chat: chatStoreModule,
    },
});
