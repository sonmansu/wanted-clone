function addId(arr) {
    const result = arr.map((item, idx) => {
        return { ...item, "id": idx }
    })
    return result;
}

const parseTag = (str) => {
    let splitted = str.split('#');
    splitted = splitted.map(item => "#" + item);
    splitted.shift();
    return splitted;
}

const parseSkill = (str) => {
    return str.split('\n\n');
}

const parseList = (obj) => {
    const result = [];
    for (let i = 0; i < obj.imgs.length; i++) {
        const newObj = {}
        newObj.img = obj['imgs'][i];
        newObj.title = obj['titles'][i];
        newObj.desc = obj['descs'][i];
        newObj.platformIcon = obj['icons'][i];
        newObj.author = obj['writers'][i];
        result.push(newObj);
    }
    return result;
}

// console.log(addId())/