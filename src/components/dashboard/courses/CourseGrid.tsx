import '../../../styles/dashboard_courses.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useCallback, useEffect, useState } from 'react';
import { CourseCard } from './CourseCard';
import { fetchCourses } from '../../../api';
import { addCourses, setCourses, updateEnrolledCourses } from '../../../redux/features/courses';
import { useInfiniteScroll } from '../../../hooks';
import axios from 'axios';
import { setUser } from '../../../redux/features/user';
import { addMessage } from '../../../redux/features/message';
import { useSelector } from 'react-redux';
// import { I_CourseCard } from "../../../utils/types"

type Course_T = {
  ratingsQty: number;
  ratingsAvg: number;
  published: boolean;
  isApproved: boolean;
  _id: string;
  title: string;
  description: string;
  tutor: string;
  createdAt: Date;
  course?: Course_T;
  slug: string;
};

export function CourseGrid() {
  //Added changes
  const [allCourses, setAllCourses] = useState<Course_T[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course_T[]>([]);
  const [loadingResources, setLoadingResources] = useState<boolean>(false);
  const enrolledRedux = useAppSelector((state) => state.courses.enrolled);

  console.log(enrolledRedux);

  const { token } = useAppSelector((state) => state.user.value);
  const [searchParams, _] = useSearchParams();
  const filter = searchParams.get('filter');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Api calls functions
  async function getAllCourses() {
    setLoadingResources(true);
    try {
      const res = await axios.get('https://programming-lab-lms-api.onrender.com/api/v1/course', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllCourses(res.data.data.courses || []);
      console.log(res);
    } catch (err) {
      console.log(err);
      if (err.status === 401 && err?.response?.data?.message.includes('You are not logged in')) {
        dispatch(addMessage({ type: 'failed', label: 'Session expired, please log in again' }));
        dispatch(setUser({ id: '', username: '', email: '', role: 'student', verified: false, token: '' }));
        navigate('/login');
      } else {
        dispatch(
          addMessage({
            type: 'failed',
            label: err?.response?.data?.message || 'Something went wrong',
          })
        );
      }
    } finally {
      setLoadingResources(false);
    }
  }

  //Some potimizations stuffs(cache) and stuffs later.
  async function fetchEnrolledCourses() {
    setLoadingResources(true);
    try {
      const res = await axios.get('https://programming-lab-lms-api.onrender.com/api/v1/enrollment/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEnrolledCourses(res.data.data.enrollments || []);
      console.log(enrolledCourses);
      dispatch(updateEnrolledCourses(enrolledCourses.map((e) => e?.course?._id as string)));
      console.log();
      console.log(res);
    } catch (err) {
      console.log(err);
      if (err.status === 401 && err?.response?.data?.message.includes('You are not logged in')) {
        dispatch(addMessage({ type: 'failed', label: 'Session expired, please log in again' }));

        navigate('/login');
      } else {
        dispatch(
          addMessage({
            type: 'failed',
            label: err?.response?.data?.message || 'Something went wrong',
          })
        );
      }
    } finally {
      setLoadingResources(false);
    }
  }

  // useEffects

  // useEffects
  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    if (filter && filter === 'enrolled') {
      fetchEnrolledCourses();
    }
  }, [filter]);

  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // const user = useAppSelector(state => state.user.value)
  const coursesData = useAppSelector((state) => state.courses.value);

  //   const [searchParams, _] = useSearchParams();
  //   const filter = searchParams.get('filter');

  function handleFilter(arg: any[]) {
    if (!filter) return arg;

    const result = arg.filter((item) => {
      if (item.state.includes(filter as string)) return item;
    });

    return result;
  }

  async function getCoursesOnLoad() {
    if (coursesData.courses[0]) return;

    const response = await fetchCourses(1, 20);

    setLoading(false);

    if (response.status != 200) return;

    if (response.status == 200) {
      dispatch(
        setCourses({
          ...response.data,
        })
      );
    }
  }

  async function updateCourseList() {
    const response = await fetchCourses(coursesData.page + 1, 20);

    setLoading(false);

    if (response.status != 200) return;

    dispatch(
      addCourses({
        courses: response.data.courses,
        page: coursesData.page + 1,
      })
    );
  }

  const infinitScrollFunc = useCallback(() => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      if (!coursesData.courses[0]) {
        getCoursesOnLoad();
        setHasMore(true);
      } else {
        updateCourseList();
        setHasMore(coursesData.page + 1 < coursesData.total_pages);
      }
    }, 1000);
  }, [coursesData.courses, loading]);

  const sentinelRef = useInfiniteScroll(infinitScrollFunc, hasMore, loading);

  return (
    <div className="courses-grid-container">
      <div className="courses-grid-inner">
        {/* {handleFilter(coursesData.courses).map((course, index) => (
          <CourseCard
            key={index}
            slug={course.slug}
            thumbnail={course.thumbnail}
            niche={course.niche}
            title={course.title}
            modules={0}
            date={0}
          />
        ))} */}

        {/* Replaced your arr */}
        {loadingResources ? (
          <h3>Loading courses....</h3>
        ) : (!filter && allCourses.length === 0) || (filter === 'enrolled' && enrolledCourses.length === 0) ? (
          <h3>Resource is empty</h3>
        ) : filter === 'enrolled' ? (
          enrolledCourses.map((course, index) => (
            <CourseCard
              key={index}
              slug={course.course.slug}
              // thumbnail={course.thumbnail}
              // niche={course.niche}
              title={course.course.title}
              modules={0}
              date={0}
            />
          ))
        ) : (
          allCourses.map((course, index) => (
            <CourseCard
              key={index}
              slug={course.slug}
              // thumbnail={course.thumbnail}
              // niche={course.niche}
              title={course.title}
              modules={0}
              date={0}
            />
          ))
        )}
      </div>

      {loading && hasMore ? (
        <div className="bottom-loader">
          <div />
        </div>
      ) : (
        <></>
      )}
      <div className="sentinelRef" ref={sentinelRef} />
    </div>
  );
}
