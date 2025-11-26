"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, updateModule, deleteModule, editModule } from "./reducer";
import * as coursesClient from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const module = await coursesClient.createModuleForCourse(
      cid as string,
      newModule
    );
    dispatch(setModules([...modules, module]));
  };

  const removeModule = async (moduleId: string) => {
    await coursesClient.deleteModule(cid as string, moduleId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveModule = async (module: any) => {
    await coursesClient.updateModule(cid as string, module);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(setModules(modules.map((m: any) => (m._id === module._id ? module : m))));
  };

  return (
    <div>
      {/* Add your module controls here */}
      <button onClick={createModuleForCourse}>Add Module</button>
      <input
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Module Name"
      />

      <ul className="list-group">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {modules.map((module: any) => (
          <li key={module._id} className="list-group-item">
            {!module.editing ? (
              <span>{module.name}</span>
            ) : (
              <input
                className="form-control"
                defaultValue={module.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveModule({ ...module, editing: false });
                  }
                }}
                onChange={(e) =>
                  dispatch(updateModule({ ...module, name: e.target.value }))
                }
              />
            )}
            <button
              onClick={() => dispatch(editModule(module._id))}
              className="btn btn-sm btn-primary float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeModule(module._id)}
              className="btn btn-sm btn-danger float-end me-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}