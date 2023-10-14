/** @param {NS} ns **/
export async function main(ns) {
    const url = "https://copy.sh/";
    const iframe = `<iframe src="${url}" height=1024 width=960></iframe>`;
    ns.alert(iframe);
}
