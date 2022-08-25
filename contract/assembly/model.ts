import { u128, context, PersistentUnorderedMap } from "near-sdk-as";

// @nearBindgen is used to serialize the `Blog` class before storing it on the blockchain.
@nearBindgen
export class Blog {
  // Define the `Blog` fields and data types
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: u64;
  appreciationCost: u128; // readers will be able to appreciate an author by sending NEAR tokens
  appreciationCount: i32; // the number of readers that appreciated a blog post

  // Define methods for the `Blog`
  // 1) `createBlog` method takes in a payload and returns a new `Blog` object
  public static createBlog(payload: Blog): Blog {
    const blog = new Blog();
    blog.id = payload.id;
    blog.title = payload.title;
    blog.content = payload.content;
    blog.appreciationCost = payload.appreciationCost;
    blog.author = context.sender;
    blog.createdAt = context.blockTimestamp;

    return blog;
  }

  // 2) `incrementAppreciationCount` method increases the `appreciationCount` of a blog
  public incrementAppreciationCount(): void {
    this.appreciationCount = this.appreciationCount + 1;
}
}

export const blogPosts = new PersistentUnorderedMap<string, Blog>("BLOG_POSTS");
