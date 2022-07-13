const addBlogPost = async (event) => { 
    event.preventDefault();

    const blogTitle = document.querySelector("#blogpost-title").value;
    const blogBody = document.querySelector("blogpost-body").value; 

    const response = await fetch("/api/blogpost", { 
        method: "POST",
        body: JSON.stringify({
            blogTitle,
            blogBody,
        }),
        headers: { "Content-Type": "application/json" },
    });
    
    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(
            "Blog post not added. Make sure the fields are not empty."
        );
    }
};

document.querySelector(".postBtn").addEventListener("click", addBlogPost);