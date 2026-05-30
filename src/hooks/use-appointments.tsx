import { useQuery } from "@tanstack/react-query";
import { fetchAppointments } from "@/api/appointment.api";

const appointmentKeys = {
    all: ["appointments"] as const,
    byUser: (role: string, userId: string) =>
        [...appointmentKeys.all, role, userId] as const,
};

export const useAppointments = (role: string, userId: string) => {
    return useQuery({
        queryKey: appointmentKeys.byUser(role, userId),
        queryFn: () => fetchAppointments(role, userId),
        // Only fire the request when both params are non-empty
        enabled: Boolean(role && userId),
    });
};