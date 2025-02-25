import {PCI18n, smallPhoneI18n} from './i18n/header-i18n.js';
import {PhoneAndIPadI18n} from "./i18n/header-i18n.js";
// vue app
var appData = {
    el: '#app',
    data: {
        // 顶部导航栏数据
        headerData:{
            url: '/yumitoy/login/yumitoy-login-single.html',
            title: 'Yumitoy',
            menu:{
                title: 'Yumitoy',
                // 优化
                i18n: smallPhoneI18n.list,
                // 小型设备菜单
                smallPhone: smallPhoneI18n.zh_CN,
                phoneAndIpad: PhoneAndIPadI18n.zh_CN,
                PC: PCI18n.zh_CN
            }
        },
        // 中间面板部分数据
        panelData:{

        },
        // 底部面板数据
        footerData:{

        }
    },
    methods:{
        // 右上角的国旗图标点击事件
        language: function (i18n){
            console.log(i18n);
            console.log(smallPhoneI18n);
        }

    },
    computed:{

    }
};
const app = new Vue(appData);

// 逻辑脚本
// // js控制切换按钮颜色 -->
// var registerRadioButton = document.getElementById('register-radio-button');
// var registerRadioButtonLabel = document.getElementById('register-radio-button-label');
// var userRadioButtonLabel = document.getElementById('user-radio-button-label');
// var userRadioButton = document.getElementById('user-radio-button');
// var sellerRadioButtonLabel = document.getElementById('seller-radio-button-label');
// var sellerRadioButton = document.getElementById('seller-radio-button');
// var loginPanelFormSeller = document.getElementById('login-panel-form-seller');
// var loginPanelFormUser = document.getElementById('login-panel-form-user');
// var loginPanelFormRegister = document.getElementById('login-panel-form-register');
// registerRadioButton.onclick = function (){
//     registerRadioButtonLabel.style = "background-color: orange; border-color: orange; color: white;box-shadow: 0 0 0 .1rem rgba(239, 105, 7, 0.5);"
//     userRadioButtonLabel.style = "border-color: orange; color: orange;";
//     sellerRadioButtonLabel.style = "border-color: orange; color: orange;";
//     loginPanelFormUser.style="display:none;"
//     loginPanelFormSeller.style="display:none;"
//     loginPanelFormRegister.style="display:inherit;"
// }
// userRadioButton.onclick = function (){
//     userRadioButtonLabel.classList = "background-color: orange; border-color: orange; color: white;box-shadow: 0 0 0 .1rem rgba(239, 105, 7, 0.5);";
//     registerRadioButtonLabel.style = "border-color: orange; color: orange;";
//     sellerRadioButtonLabel.style = "border-color: orange; color: orange;";
//     loginPanelFormRegister.style="display:none;"
//     loginPanelFormSeller.style="display:none;"
//     loginPanelFormUser.style="display:inherit;"
// }
// sellerRadioButton.onclick = function (){
//     sellerRadioButtonLabel.style = "background-color: orange; border-color: orange; color: white;box-shadow: 0 0 0 .1rem rgba(239, 105, 7, 0.5);";
//     registerRadioButtonLabel.style = "border-color: orange; color: orange;";
//     userRadioButtonLabel.style = "border-color: orange; color: orange;";
//     loginPanelFormRegister.style="display:none;"
//     loginPanelFormUser.style="display:none;"
//     loginPanelFormSeller.style="display:inherit;"
// }
