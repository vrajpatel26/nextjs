'use server'
import * as auth from "@/Auth"

export const signIn = async() =>{
    return auth.signIn()

}