import dotenv from 'dotenv'


export default function setEnvironmentValues(){
    dotenv.config({
        path:"./.env",
        override:true
    })
}