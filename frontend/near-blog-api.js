import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000; // gas fee

export async function createBlog(blog) {
  blog.id = uuid4(); // creates unique id
  blog.appreciationCost = parseNearAmount(blog.appreciationCost + ''); // parseNearAmount converts price to correct format
  return window.contract.setBlog({ blog }, GAS, parseNearAmount(0.52 + ""));
}

export function getBlogs() {
  return window.contract.getBlogs();
}

export function getBlog(id) {
  return window.contract.getBlog(id);
}

export async function appreciateBlog(id, appreciationCost) {
  return window.contract.appreciateBlog({ blogId: id }, GAS, appreciationCost);
}
