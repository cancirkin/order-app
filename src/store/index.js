import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
        foodList: [
            {
                name: "Köfte",
                desc: "Pilav, biber ve domates ile servis edilir.",
                price: "24.99",
                img:"https://im.haberturk.com/2019/09/23/ver1569240076/kofte-nasil-yapilir_2524577_1200x627.jpg"
            },
            {
                name: "Sucuk Ekmek",
                desc: "Dana sucuk ve patates ile servis edilir.",
                price: "19,99",
                img:"https://www.agaburger.com.tr/wp-content/uploads/2021/01/Screenshot_20211201-222457_Instagram-1.jpg"
            },
            {
                name: "Beyti",
                desc: "Manda yoğurdu ve yeşil biber ile servis edilir.",
                price: "2.50",
                img:"https://i4.hurimg.com/i/hurriyet/75/750x422/5c90fb05c03c0e50a4dce6c4.jpg"
            },
            {
                name: "Adana Dürüm",
                desc: "Acılı ve çift lavaşlı dürüm.",
                price: "2.50",
                img:"https://cdn.getiryemek.com/restaurants/1608413756674_1125x522.jpeg"
            },
            {
                name: "Urfa Dürüm",
                desc: "Acılı ve çift lavaşlı dürüm.",
                price: "2.50",
                img:"https://cdn.getiryemek.com/restaurants/1607508338376_1125x522.jpeg"
            },
            {
                name: "Lahmacun",
                desc: "Bol kıymalı lahmacun. Salata ile birlikte.",
                price: "2.50",
                img:"https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
            },
            {
                name: "Mercimek Çorbası",
                desc: "Günün Çorbası",
                price: "2.50",
                img:"https://i4.hurimg.com/i/hurriyet/75/750x422/60e4662a4e3fe0195427e88c.jpg"
            },
            {
                name: "Karışık Izgara",
                desc: "Bonfile, pirzola ve tavuk kanat.",
                price: "2.50",
                img:"https://img-s1.onedio.com/id-5f79007423031f3d2e6b200e/rev-0/w-620/f-jpg/s-e8558964c2e19e29b8f289154c200ba28274e6f9.jpg"
            },
            {
                name: "Bonfile",
                desc: "Kendi çiftliğimizdeki dana etinden.",
                price: "2.50",
                img:"https://i.nefisyemektarifleri.com/2018/11/13/bonfile-nedir-bonfile-pisirmenin-ipuclari-nelerdir-6-600x400.jpg"
            },
            {
                name: "Dallas Steak",
                desc: "Dananın sırt kısmından harika sulu bir et.",
                price: "2.50",
                img:"https://www.gulyurt.com.tr/yuklemeler/2021/01/dallas-steak-rs-scaled.jpg"
            }
        ],
        orderList:[]
    },
    getters:{
        getFoodList: state => {
            return state.foodList
        },
        getOrderList: state => {
            return state.orderList
        }
    },
    mutations:{
        addToOrderList(state, payload){
            state.orderList.push(payload)
        },
        removeFromOrderList(state, payload){
            state.orderList.splice(payload, 1)
        }
    }
})