import '../../styles/dashboard_index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Sidebar, Topbar } from '../../components/dashboard';
import Index from './Index';
import Courses from './Courses';
import AddCourse from './Add-Course';
import CourseContent from './CourseContent';
import Calendar from './Calendar';
import Tasks from './Tasks';
import Profile from './Profile';
import Notification from './Notification';
import { useEffect } from 'react';
import { MobileTopbar } from '../../components/dashboard/MobileTopbar';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { MobileSlider } from '../../components/dashboard/MobileSlider';
import { user_profile } from '../../api/user-api';
import { I_Response } from '../../utils/types';
import { setUser } from '../../redux/features/user';
import { addMessage } from '../../redux/features/message';

export default function Layout() {
  const slider = useAppSelector((state) => state.slider.value);
  const { email, token } = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /*
  async function userProfile() {
    const response: I_Response | any = await user_profile(token as string);

    if (response.status != 200) {
      //   dispatch(addMessage({ label: "Login not found", type: "failed" })); //Boss, you don overuse AI, wetin be this lol
      dispatch(addMessage({ label: "Failed to get user details", type: "failed" })); // will be fixed later, no session expired logic yet
      navigate("/login");
      return;
    }

    // dispatch(setUser(response.data.data.user)); // you don de do this one for login.
  }

  useEffect(() => {
    // fetch user profile for reload
    if (email) return;
    userProfile();

    //No be user email you suppose check, the API response fit change somehow, check for token instead, token no place no de change: Hassan
    //1. On login:
    //Save the token (e.g. to localStorage or a secure HTTP-only cookie)
    //Store user info (like email, id, name) in Redux (optional, for UI)

    if (!email) {
      dispatch(addMessage({ label: "Login not found", type: "failed" }));
      navigate("/login");
    }
  }, []);
*/
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />
        <MobileTopbar />

        {slider ? <MobileSlider /> : <></>}

        <div className="dashboard-main-cnt">
          <Routes>
            <Route index element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/add-course" element={<AddCourse />} />
            <Route path="/courses/:slug" element={<CourseContent />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/notifications/*" element={<Notification />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
