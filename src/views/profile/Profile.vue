<template>
    <section>
        <v-row dense>
            <v-col cols="12" v-if="isGetAccountDetailsStart">
                <v-card outlined>
                    <v-skeleton-loader
                        type="image, list-item-two-line"
                    ></v-skeleton-loader>
                </v-card>
            </v-col>
            <v-col cols="12" v-if="!isGetAccountDetailsStart && account">
                <v-card outlined flat min-height="150">
                    <v-img
                        :src="
                            require('@/assets/images/red-background-hero.webp')
                        "
                        height="150"
                        :style="{ position: 'relative' }"
                    >
                        <v-avatar :size="100" class="floating-avatar">
                            <v-img :src="account.profile.image_url"></v-img>
                        </v-avatar>
                    </v-img>
                    <v-card-text>
                        <div class="d-flex justify-space-between align-start">
                            <div>
                                <span
                                    class="text-capitalize title black--text d-block"
                                    >{{ account.profile.first_name }}
                                    {{ account.profile.last_name }}</span
                                >
                                <span class="subtitle-2">{{
                                    account.email
                                }}</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn
                                outlined
                                color="secondary"
                                class="text-capitalize"
                                >Edit Profile</v-btn
                            >
                        </div>
                    </v-card-text>
                    <v-card-text>
                        <span v-if="account.profile.introduction">{{
                            account.profile.introduction
                        }}</span>
                        <span
                            v-if="!account.profile.introduction"
                            class="font-italic"
                        >
                            No introduction available.
                        </span>
                    </v-card-text>
                    <v-tabs fixed-tabs>
                        <template v-for="(tab, index) in tabs">
                            <v-tab :key="index" :to="tab.to" exact>
                                <v-icon color="primary" class="mr-2">{{
                                    tab.icon
                                }}</v-icon>
                                <span class="text-capitalize">
                                    {{ tab.text }}
                                </span>
                            </v-tab>
                        </template>
                    </v-tabs>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-tabs-items>
                    <router-view></router-view>
                </v-tabs-items>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { GET_ACCOUNT_DETAILS_BY_EMAIL } from "@/store/types/account-store-type";

export default {
    data() {
        return {
            account: null,
            isGetAccountDetailsStart: false,
        };
    },

    computed: {
        tabs() {
            return [
                {
                    text: "Shop",
                    icon: "mdi-storefront-outline",
                    to: { name: "profile-view" },
                },

                {
                    text: "Product",
                    icon: "mdi-cart-outline",
                    to: { name: "profile-product-view" },
                },
            ];
        },
    },

    methods: {
        async getAccountDetails() {
            const email = this.$route.params.email || null;
            if (!email) return this.$router.go(-1);
            this.isGetAccountDetailsStart = true;
            const { success, data, error } = await this.$store.dispatch(
                GET_ACCOUNT_DETAILS_BY_EMAIL,
                email
            );
            this.isGetAccountDetailsStart = false;
            if (error) return this.$router.go(-1);
            if (success) {
                this.account = Object.assign({}, data);
            }
        },
    },

    async created() {
        await this.getAccountDetails();
    },
};
</script>

<style scoped>
.floating-avatar {
    bottom: -50%;
    left: 3%;
    transform: translateY(-50%);
}
</style>
