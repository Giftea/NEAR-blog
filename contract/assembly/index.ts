import { Blog, blogPosts } from "./model";
import { context, ContractPromiseBatch } from "near-sdk-as";

export function setBlog(blog: Blog): string {
  let storedBlog = blogPosts.get(blog.id);
  // check if blog with same id already exist
  if (storedBlog !== null) {
    throw new Error(`A blog post with ${blog.id} already exists`);
  }
  blogPosts.set(blog.id, Blog.createBlog(blog)); // create a new blog using `createBlog` method
  return "Blog Post Created!";
}

export function getBlog(id: string): Blog | null {
  // assert that blog with given id exists
  assert(blogPosts.contains(id), "This Blog doesn't exist");
  return blogPosts.get(id);
}

export function getBlogs(): Blog[] {
  return blogPosts.values();
}

export function appreciateBlog(blogId: string): void {
  const blog = getBlog(blogId); // retrieve blog
  if (blog == null) {
    throw new Error("Blog post not found"); // check if blog exists
  }
  // assert that the reader sends the correct appreciation cost
  assert(blog.appreciationCost.toString() == context.attachedDeposit.toString(), "Attached deposit should equal to the appreciation cost");

  ContractPromiseBatch.create(blog.author).transfer(context.attachedDeposit); // send `appreciationCost` to blog author
  blog.incrementAppreciationCount(); // increment `appreciationCount`
  blogPosts.set(blog.id, blog); // update blog
}





