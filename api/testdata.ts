import { tCourseCard, tRegister } from "@/lib/types"

// @ts-ignore
export const userinfo : Pick<tRegister, 'username' | 'email' | 'role'> = {
    username: 'Selena',
    email: 'selenawatson@gmail.com',
    role: 'student'
}

export const userCourse: tCourseCard[] = [
    {
        id: '93h23937oej928879',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'Js for Beginners',
        course_description: 'Introduction to Javascript',
        course_tutor: 'Dee_el',
        enrolled: false,
        ended: false
    },
    {
        id: '93h23937oej928309',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'DOM Manipulation',
        course_description: 'Using basic javascript to render html contents',
        course_tutor: 'Monarch',
        enrolled: false,
        ended: true
    },
    {
        id: '93h23937oej928332',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'XOXO',
        course_description: 'Lorem ipsum dolor lori sit amet',
        course_tutor: 'Omni-man',
        enrolled: true,
        ended: true
    },
    {
        id: '93h23937oej928323',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'Game Development with Javascript',
        course_description: 'Playing with javascript to make the most',
        course_tutor: 'Gojo sensei',
        enrolled: true,
        ended: false
    },
    {
        id: '93h23937oej9283588',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'React js',
        course_description: 'Beginners guide to frontend development with react js',
        course_tutor: 'Frieren',
        enrolled: false,
        ended: false
    },
    {
        id: '93h23937oej922779',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'Js for Beginners',
        course_description: 'Introduction to Javascript',
        course_tutor: 'Dee_el',
        enrolled: false,
        ended: false
    },
    {
        id: '93h23937oej928389',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'DOM Manipulation',
        course_description: 'Using basic javascript to render html contents',
        course_tutor: 'Monarch',
        enrolled: false,
        ended: true
    },
    {
        id: '93h23937oej928ik2',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'XOXO',
        course_description: 'Lorem ipsum dolor lori sit amet',
        course_tutor: 'Omni-man',
        enrolled: true,
        ended: true
    },
    {
        id: '93h23937oej278323',
        cover_image: '',
        alt: 'L🧪',
        course_title: 'Game Development with Javascript',
        course_description: 'Playing with javascript to make the most',
        course_tutor: 'Gojo sensei',
        enrolled: true,
        ended: false
    }
]

export const userAssignments = [
    {
        assignment: 'Write a program that predicts the price of the stock market using html🤣🤣',
        course: 'XOXO',
        courseid: '93h23937oej928332',
        dateSent: Date.now(),
        deadline: '',
        submitted: false,
        graded: false,
        grade: 0
    }
]