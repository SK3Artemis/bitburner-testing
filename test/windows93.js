/** @param {NS} ns **/
export async function main(ns) {
    const url = "https://www.windows93.net/";
    const iframe = `<iframe src="${url}" height=1024 width=1280></iframe>`;
    ns.alert(iframe);
}
