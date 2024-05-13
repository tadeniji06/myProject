import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import Jobs from "./Pages/Jobs";
import NotFound from "./Pages/NotFound";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";


const App = () => {
  //Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/Jobs", {
      method: "POST",
      headers: {
        "Content-Type": "applocation/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/Jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route
          path='/add-job'
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
