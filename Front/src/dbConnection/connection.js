import mongoose from "mongoose"

export async function connection(){
    await mongoose.connect('mongodb://mongo:FCbdciBMvhpkwtgyIJi2@containers-us-west-103.railway.app:5888')
}