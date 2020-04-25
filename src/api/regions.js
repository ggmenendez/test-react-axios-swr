import api from ".";

export default {
    all: () => api.get(`/regions`)
};