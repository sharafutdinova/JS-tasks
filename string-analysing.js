const path = "/users/download/index.html";

const isHtml = path => {
    const requiredExt = ".html";
    return requiredExt === path.slice(-5);
}

console.log(isHtml(path))