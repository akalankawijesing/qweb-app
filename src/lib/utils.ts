type User = {
  userId: string;
  username: string;
};

type IdToken = {
  payload?: {
    email?: string;
  };
};

type FetchWithBQArgs = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE"; // You can expand this as needed
  body: Record<string, unknown>;
};

type FetchWithBQResponse = {
  data?: unknown;
  error?: unknown;
};

type FetchWithBQ = (args: FetchWithBQArgs) => Promise<FetchWithBQResponse>;

export const createNewUserInDatabase = async (
  user: User,
  idToken: IdToken,
  userRole: string,
  fetchWithBQ: FetchWithBQ
): Promise<FetchWithBQResponse> => {
  const createEndpoint =
    userRole?.toLowerCase() === "manager" ? "/managers" : "/tenants";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
      phoneNumber: "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};
