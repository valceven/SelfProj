import axiosInstance from "@/utils/axiosInstance";

export const submitContactForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    console.log(data);
    const response = await axiosInstance.post(
      '/suggestions',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error submitting contact form: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while submitting the form");
  }
};



