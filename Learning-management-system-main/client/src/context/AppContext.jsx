import { createContext, use, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { useAuth, useUser } from "@clerk/clerk-react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const {getToken} = useAuth()
    const {user} = useUser()


    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true) 
    const [enrolledCourses, setEnrolledCourses] = useState([]) 

    // fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }
    // Function to calculate rating
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach((rating) => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }
    //  Function to calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0
        chapter.chapterContent.forEach((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
    }
    // Function to calculate course duration
    const calculateCourseDuration = (course) => {
        if (!course.courseContent || !Array.isArray(course.courseContent)) {
            return "0m"; // Return 0 minutes if no content
        }
        let time = 0;
        course.courseContent.forEach((chapter) => {
            if (chapter.chapterContent && Array.isArray(chapter.chapterContent)) {
                chapter.chapterContent.forEach((lecture) => {
                    if (lecture.lectureDuration) {
                        time += lecture.lectureDuration;
                    }
                });
            }
        });
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };
    // Function to calculate No of lecture in the course 
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0
        course.courseContent.forEach((chapter) => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures
    }

//   Fetch enrolled courses
    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses)
    };

    useEffect(() => {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, [])

    const logToken = async () => {
        const token = await getToken()
        console.log(token)
    }

    useEffect(() => {
        if (user) {
            logToken()
        }
    }
    , [user])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator
        , calculateChapterTime, calculateCourseDuration, calculateNoOfLectures , enrolledCourses, fetchUserEnrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )


}


AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required and is a React node
};