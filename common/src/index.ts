import {z} from 'zod'

export let signupInput = z.object({
     email:z.string().email(),
     password:z.string().min(6),
     name:z.string().optional()
}) 
export let signinInput = z.object({
     email:z.string().email(),
     password:z.string().min(6),
     
}) 
export let createblogINput = z.object({
     title:z.string(),
     content:z.string()
}) 
export let updatebloginput = z.object({
     title:z.string(),
     content:z.string(),
     id:z.string()
}) 

export type SignupInput =  z.infer<typeof signupInput>
export type SigninInput =  z.infer<typeof signinInput>
export type createBlog =  z.infer<typeof createblogINput>
export type updateBlog =  z.infer<typeof updatebloginput>