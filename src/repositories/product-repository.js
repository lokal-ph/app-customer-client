import axiosService from "@/services/axios-service";

const shopRepository = {
    async getProductCategories() {
        const response = await axiosService.get("/product/categories");
        return response.data;
    },

    async getProductConditions() {
        const response = await axiosService.get("/product/conditions");
        return response.data;
    },

    async getProductShippingMethods() {
        const response = await axiosService.get("/product/shipping-methods");
        return response.data;
    },

    async createProduct(formData) {
        const response = await axiosService.post("/product/", formData);
        return response.data;
    },

    async getShopProducts({ shopId, page, per_page, search }) {
        const url = `/product/shop/${shopId}?page=${page}${
            per_page ? `&per_page=${per_page}` : ""
        }${search ? `&search=${search}` : ""}`;
        const response = await axiosService.get(url);
        return response.data;
    },

    async getShopProductDetailsBySlug(shopId, slug) {
        const response = await axiosService.get(
            `/product/shop/${shopId}/${slug}`
        );
        return response.data;
    },

    async createProductInquiry(payload) {
        const response = await axiosService.post("/product/inquiry", payload);
        return response.data;
    },

    async getProductInquiries({ productId, page, per_page }) {
        const url = `/product/inquiries/${productId}?page=${page}${
            per_page ? `&per_page=${per_page}` : ""
        }`;
        const response = await axiosService.get(url);
        return response.data;
    },

    async createProductInquiryReply(payload) {
        const response = await axiosService.post(
            "/product/inquiry/reply",
            payload
        );
        return response.data;
    },

    async getProductInquiryReply(inquiryId) {
        const response = await axiosService.get(
            `/product/inquiry/reply/${inquiryId}`
        );
        return response.data;
    },

    async createProductView(payload) {
        const response = await axiosService.post("/product/view", payload);
        return response.data;
    },

    async getProductViews(productId) {
        const response = await axiosService.get(`/product/views/${productId}`);
        return response.data;
    },
};

export default shopRepository;
