/** @param {NS} ns **/
export async function main(ns) {
    const url = "https://www.vidlii.com/";
    const iframe = `<iframe src="${url}" height=1024 width=1280></iframe>`;
    ns.alert(iframe);
}
