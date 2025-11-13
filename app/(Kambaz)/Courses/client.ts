import axios from "axios";
import { HTTP_SERVER } from "../Account/client";

const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

// ============== COURSE FUNCTIONS ==============

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

// ============== MODULE FUNCTIONS ==============

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateModule = async (module: any) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};