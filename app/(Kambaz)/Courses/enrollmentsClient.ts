import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/users`
  );
  return response.data;
};