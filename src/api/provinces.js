import api from ".";

export default {
    all: iso => api.get(`/provinces/${iso}`)
}