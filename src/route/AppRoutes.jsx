import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AssignmentTasks from "../pages/AssignmentTasks";
import { assignments } from "../data/AssignmentList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:assignmentId" element={<AssignmentTasks />} />
      {assignments.map((a) =>
        a.tasks.map((task) => {
          const Component = task.component;
          return <Route key={task.path} path={task.path} element={<Component />} />;
        })
      )}
    </Routes>
  );
};

export default AppRoutes;