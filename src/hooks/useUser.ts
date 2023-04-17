import { useQuery } from "@tanstack/react-query";
import { getUserDataService } from "@/services";
import { getUser, removeUser } from "@/utils/userUtils";

export const useUser = (userId) => {
return useQuery({
    queryKey: ["user",userId],
    queryFn: (userId) => {
      getUserDataService(userId);
    },
    refetchOnMount: true,
    refetchOnWindowFocus:true,
  });
 
};
