const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1u997/",
            name: "springboot1u997",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1u997/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的科师二手平台"
        } 
    }
}
export default base
