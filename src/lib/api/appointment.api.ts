import api from "@/lib/axios";

export async function fetchAppointments(role: string, userId: string) {
    // Backend exposes GET /api/appointments and uses the auth token to identify the user.
    // If you need role/userId in the path, update the backend route accordingly.
    return api.get(`/appointments`);
}