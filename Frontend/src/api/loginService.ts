import axiosInstance from "@/utils/axiosInstance";

export const submitLoginForm = async (data: {
    username: string;
    password: string;
}) => {
    try {
        console.log(data);

        const response = await axiosInstance.post(
            '/login',
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
        console.error("Error Logging in: ", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Bsta error bai");
    }
};