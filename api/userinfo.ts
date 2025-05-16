import { resolve } from "path";
import { userinfo, userCourse, userAssignments } from "./testdata";
import { tRegister } from "@/lib/types";

export function getUserinfo (id: string): Promise<Pick<tRegister, 'username' | 'role' | 'email'>> {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject({ status: 400, err: 'Invalid ID' })
        }
        resolve(userinfo)
    })
}

export function noOfUserCourse (id: string) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject({ status: 400, err: 'Invalid ID' })
        }
        resolve(userCourse.length)
    })
}

export function noOfUserTask (id: string) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject({ status: 400, err: 'Invalid ID' })
        }
        resolve({ assignments: 8, projects: 2, course: userCourse.length })
    })
}