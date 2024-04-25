import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb+srv://user1:NWdH60okKMkYY5zx@cluster0.fsqnz3x.mongodb.net/FSDCrashCourse');
  
}

main().then(console.log("Connected to DB")).catch(err => console.log(err));

const postSchema = new mongoose.Schema({
    image: String,
    title:String,
    subtitle:String,
    desc:String
    
});

const Post = mongoose.model('posts', postSchema);

export default Post;