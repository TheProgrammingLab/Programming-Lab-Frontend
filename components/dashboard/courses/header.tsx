"use client"
import '@/styles/components.dashboard.css'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setToAll, setToEnrolled } from '@/store/courseListFilter'


type tCoursesHeaderFilterItemArg = {
    arg: 'All' | 'Enrolled',
}

type tCoursesHeaderFilterItem = tCoursesHeaderFilterItemArg & {
    styleFitting: (arg: tCoursesHeaderFilterItemArg["arg"]) => string,
    handleFilter: (arg: tCoursesHeaderFilterItemArg["arg"]) => void
}

function CoursesHeaderFilterItem ({arg, styleFitting, handleFilter}: tCoursesHeaderFilterItem) {
    return (
        <span className={styleFitting(arg)} onClick={() =>handleFilter(arg)}>
            {arg}
        </span>
    )
}

export function CoursesHeader () {

    const currentFilter = useAppSelector(state => state.courseListFilter.value)
    const dispatch = useAppDispatch()

    function styleFitting (arg: 'All' | 'Enrolled'): string {
        return currentFilter == arg ? "course-list-filter" : '' 
    }

    function handleFilter (arg: 'All' | 'Enrolled') {
        if (arg == 'All') {
            dispatch(setToAll());
            return;
        }

        dispatch(setToEnrolled());
    }


    return (
        <div className='courses-page-main-header'>
            <span> Available Courses </span>

            <div className='courses-page-main-header-filter'>
                <CoursesHeaderFilterItem arg='All' styleFitting={styleFitting} handleFilter={handleFilter} />
                <CoursesHeaderFilterItem arg='Enrolled' styleFitting={styleFitting} handleFilter={handleFilter} />

                <div className='indicator-line' />
            </div>

        </div>
    )
}