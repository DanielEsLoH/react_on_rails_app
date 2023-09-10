import { API_URL } from "../constants";


async function fetchAllPosts() {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function fetchPost(id) {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

async function deletePost(id) {
    // DELETE request to: http://localhost:3000/api/v1/posts/:id
    const response = await fetch (`${API_URL}/${id}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    // 204 is no content status
    if (response.status === 204 ) {
        return null
    } 
    return response.json()
}

export { deletePost, fetchAllPosts, fetchPost }