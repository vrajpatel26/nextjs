'use server'
import * as auth from "@/Auth"

export const signOut = async() =>{
    return auth.signOut()

}