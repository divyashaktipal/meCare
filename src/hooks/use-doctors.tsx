import { useQuery } from "@tanstack/react-query"
import { fetchDoctors } from "@/api/doctors.api"

export const useDoctors = () => {
    return useQuery({
        queryKey: ['doctors'],
        queryFn: fetchDoctors,
        staleTime: 300000,
    })
}