const md5 =require('md5')
module.exports = {
    async beforeCreate(event) {
        console.log('beforeCreate is worked...',event.param.data);
        event.param.data.mobile = md5(event.param.data.mobile)

        return
    }
}