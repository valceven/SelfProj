import axiosInstance from "@/utils/axiosInstance";

export const submitContactForm = async (data: {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string,
    phoneNumber: string,
    message: string,
}) => {
    try {
        const response =  await axiosInstance.post('/contact', data);
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error submitting contact form: ", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "An error occured while submitting the form");
    }
};