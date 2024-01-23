// const url = 'http://cktapi.kawakw.com/ck/api/addUserBehavior'
const url = 'https://ckapi.kawakw.com/ck/api/addUserBehavior'

const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
const guid = (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
let userGuid = ''
if (localStorage.userGuid) {
    userGuid = localStorage.userGuid
}else{
    userGuid = guid
    localStorage.setItem('userGuid',guid)
}

function addUserBehavior(num) {
    axios({
        method: 'post',
        url: url,
        headers: {
            // 'access-control-allow-headers': '*',
            // 'access-control-allow-origin': '*',
            // bxttk: '{{bxttk}}',
            accountType: '3',
            appName: 'genie',
            deviceId: userGuid,
            platformId: '1',
            appStore: '',
            channelCode: '',
            appVersion: ''
        },
        data: {
            behaviorType: num
        }
    })
}