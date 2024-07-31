import useSWR, { SWRResponse } from "swr";
import withTokenFetcher from "../fetchers/withTokenFetcher";

// Define the type for the user data
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties here
}

// Define the type for the hook's response
interface UseUserResponse {
  user: User | undefined;
  userError: any; // Adjust this type based on the error shape
  userMutate: () => void;
}

// Define the fetcher function type
type Fetcher = (url: string) => Promise<User>;

export default function useUser(isOffRevalidate: boolean): UseUserResponse {
  const path = `${process.env.NEXT_PUBLIC_API_URL_AUTH}/login`;

  // Define the fetcher function with type assertion or mapping
  const fetcher: Fetcher = async (url: string) => {
    const response = await withTokenFetcher(url);

    // Transform ApiResponse to User
    if (response.id && response.name && response.email) {
      return {
        id: response.id,
        name: response.name,
        email: response.email,
      };
    } else {
      throw new Error("Invalid user data received");
    }
  };

  // Use SWR to fetch data
  const { data, error, mutate }: SWRResponse<User, any> = useSWR<User, any>(
    path,
    fetcher,
    {
      revalidateOnFocus: !isOffRevalidate,
      revalidateOnReconnect: !isOffRevalidate,
    }
  );

  return {
    user: data,
    userError: error,
    userMutate: mutate,
  };
}
