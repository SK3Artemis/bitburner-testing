/** @param {NS} ns **/
export async function main(ns) {
    const url = "https://bitburner-official.github.io";
    const iframe = `<iframe src="${url}" height=1024 width=1280></iframe>`;
    ns.alert(iframe);
}
