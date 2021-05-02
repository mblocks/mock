import fs from "fs";

const routers: ({})[] = [];

fs.readdirSync(__dirname).filter(file=>file.substr(0,5)!='index').forEach(file => {
    Object.entries(require(`./${file}`).default).forEach(([endpoint, callback]) => {
        routers.push({ [endpoint]: callback });
    });
});

export default Object.assign({}, ...routers);
