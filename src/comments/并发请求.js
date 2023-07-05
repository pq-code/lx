//  数字马力笔试
import { isEqual } from 'lodash-es';

/**
 * 第二题
 */

// 核心用户请求
let _requestTime = 0;
let requestsNumber = 0;
const requestUserInfo = () => {
    // 这个方法的实现不能修改
    return Promise.resolve().then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // 模拟 ajax 异步，1s 返回
                resolve();
            }, 1000);
        }).then(() => {
            _requestTime++;
            return {
                nick: "nick",
                age: "18",
            };
        });
    });
};

// -------- 在这里完成代码 优化getUserInfo --------
// 调用 requestUserInfo，并优化请求次数
const getUserInfo = (maxNum) => {
    let a
    return new Promise((resolve, reject) => {
        resolve(cancelDuplicateRequests(a))
        console.log(_requestTime)
    })
}

const cancelDuplicateRequests = async (a) => {
    a = await requestUserInfo()
    if (requestsNumber == 3) {
        return a
    }
}
/**
 * 以下为测试用例，无需修改
 */
export const a = async () => {
    try {
        // 模拟请求
        const result = await Promise.all([
            getUserInfo(),
            new Promise(resolve => setTimeout(async () => { resolve(await getUserInfo()) }, 300)),
            new Promise(resolve => setTimeout(async () => { resolve(await getUserInfo()) }, 2300))]);
        if (
            !isEqual(result, [{
                nick: "nick",
                age: "18",
            }, {
                nick: "nick",
                age: "18",
            }, {
                nick: "nick",
                age: "18",
            }])
        ) {
            console.log('11111', result)
            throw new Error('Wrong answer');
        } else {
            console.log('22222', result)
        }
        return _requestTime === 1;
    } catch (err) {
        console.warn('测试运行失败');
        console.error(err);
        return false;
    }
};
