import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/users`
  );
  return response.data;
};