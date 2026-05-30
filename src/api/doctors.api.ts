import api from "@/lib/axios";

export async function fetchDoctors() {
    return await api.get('/doctors');
}