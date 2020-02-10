export function get(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0].trim();
        const cookieKey = cookies[i].split("=")[1];
        if (cookieName == name) {
            return cookieKey;
        }
    }
}

export async function set(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}