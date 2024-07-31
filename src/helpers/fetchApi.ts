import withTokenConfig from "./withTokenConfig";
import successSwal from "./successSwal";
import errorSwal from "./errorSwal";

const fetchApi = async (
  method: String,
  url: string | URL | Request,
  body: any,
  withoutSwal: Boolean,
  messageSuccess: String
) => {
  try {
    const { headers } = withTokenConfig();
    const options: any = {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
        "Strict-Transport-Security": "max-age=86400; preload",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.message || "Unknown error";
      return await errorSwal(errorMessage, "");
    }

    const responseData = await response.json();
    if (!withoutSwal) {
      messageSuccess;
      await successSwal(messageSuccess || responseData?.message);
    }
    return responseData;
  } catch (e: any) {
    throw new Error(e?.message || "An error occurred");
  }
};

export default fetchApi;
