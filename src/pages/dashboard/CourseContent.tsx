import { useEffect, useState } from 'react';
import '../../styles/dashboard_courses.css';
import { CourseModule, CourseThumbnail, T_CourseModule } from '../../components/dashboard/courses';
import { fetchCourseContent } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/features/message';
import { setUser } from '../../redux/features/user';
import { updateEnrolledCourses } from '../../redux/features/courses';

type T_CourseData = {
  niche: string;
  title: string;
  description: string;
  thumbnail: string;
  tutor: string;
  //   enrolled: boolean;
  ongoing: boolean;
  progress: string;
  modules: Omit<T_CourseModule, 'id'>[];
  _id: string;
  meetingLink: string;
};

export default function Page() {
  //MY changes
  const [courseObj, setCourseObj] = useState<T_CourseData>({});
  const [loadingResources, setLoadingResources] = useState<boolean>(false);
  const [enrollAction, setEnrollAction] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.user.value);
  const enrolled = useAppSelector((state) => state.courses.enrolled);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(enrolled);

  const { slug } = useParams();

  //Api calls functions
  async function fetchCourse() {
    setLoadingResources(true);
    try {
      const res = await axios.get('https://programming-lab-lms-api.onrender.com/api/v1/course/' + slug, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCourseObj(res.data.data.course || {});
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

  async function handleEnroll() {
    setEnrollAction(true);
    try {
      const res = await axios.post(
        `https://programming-lab-lms-api.onrender.com/api/v1/course/${courseObj._id}/enroll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(updateEnrolledCourses([...enrolled, courseObj._id]));
      dispatch(
        addMessage({
          type: 'passed',
          label: res.data.data.message,
        })
      );
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
      setEnrollAction(false);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [courseData, setCourseData] = useState<T_CourseData>({
    niche: '',
    title: '',
    description: '',
    thumbnail: '',
    tutor: '',
    enrolled: false,
    ongoing: false,
    modules: [],
  });

  async function getCourseData() {
    setIsLoading(true);
    const response = await fetchCourseContent();

    setIsLoading(false);
    if (response.status == 200) {
      setCourseData({ ...response.data });
    }
  }

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div className="course-content-page">
      <div className="course-page-content-inner">
        {!loadingResources ? (
          !courseObj._id ? (
            <span>Somehing went wrong</span>
          ) : (
            <>
              <div className="course-content-page-hdr">
                <div className="course-content-page-hdr-cnt">
                  <span>{courseObj?.niche || 'N/A'}</span>
                  <span>{courseObj?.title || 'N/A'}</span>
                  <span>{courseObj.description}</span>

                  <div className="course-content-page-hdr-cnt-tutor">
                    <div>
                      <img />
                    </div>

                    <span>{courseObj.tutor}</span>
                  </div>

                  <div className="course-content-page-hdr-btns">
                    {enrolled?.find((c) => c === courseObj?._id) ? (
                      <button>{enrollAction ? 'Loading...' : 'Unenroll'}</button>
                    ) : (
                      <button onClick={handleEnroll}>{enrollAction ? 'Loading...' : 'Enroll'}</button>
                    )}
                    <div>{courseObj?.progress || 'N/A'}</div>
                    {/* <div>{courseData.ongoing ? 'Ongoing' : 'Ended'}</div> */}
                  </div>
                </div>

                <CourseThumbnail thumbnail={courseData?.thumbnail} extra_class="course-content-page-hdr-thumbnail" />
              </div>

              <div className="course-content-page-body">
                <div className="course-content-modules-hdr">
                  <span>Content</span>
                  <span>{courseData.modules.length} Modules</span>

                  <span style={{ display: 'flex', gap: '10px' }}>
                    Meeting Link:{' '}
                    <a href={courseObj.meetingLink || ''} target="_blank">
                      {courseObj.meetingLink || 'N/A'}
                    </a>
                  </span>
                </div>

                <div className="course-content-modules">
                  {courseData.modules.map((module, index) => (
                    <CourseModule key={index} id={index + 1} topic={module.topic} content={module.content} />
                  ))}
                </div>
              </div>
            </>
          )
        ) : (
          <div className="bottom-loader">
            <div />
          </div>
        )}
      </div>
    </div>
  );
}
