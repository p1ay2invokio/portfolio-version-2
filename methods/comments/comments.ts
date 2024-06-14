import axios, {AxiosResponse} from "axios"
import {URI} from '../../config'

export const getAllComments=():Promise<AxiosResponse>=>{
    return new Promise((resolve)=>{
        axios.get(`${URI}/messages`).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            console.log("Comments Error")
        })
    })
}


export const LikeMessage=(mid: number):Promise<AxiosResponse>=>{
    return new Promise((resolve)=>{
        axios.patch(`${URI}/messages/like/${mid}`).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            console.log("Like Error")
        })
    })
}