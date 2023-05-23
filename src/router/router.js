import {createRouter, createWebHashHistory} from 'vue-router'
import DaylyTable from "@/view/DaylyTable";
import LayOut from "@/view/LayOut";
import AllStuff from "@/view/AllStuff";
import AddStuff from "@/view/StuffAdd";
import AddShop from "@/view/ShopAdd";
import AllShop from "@/view/AllShop";
import AlterRule from "@/view/ChangeRule";
import LayoutS from "@/view/LayoutS";
import StuffInfo from "@/view/StuffInfo";
import WeeklyTable from "@/view/WeeklyTable";
import DaylyTabelView from "@/view/DayTableView";
import StuffTable from "@/view/StuffTable";
import DaylySecond from "@/view/DaylyTableSecond";
import Weekly1 from "@/view/WeekViewPosition";
import Weekly2 from "@/view/WeekStoreTwo";
import Dayly2 from "@/view/DaylyTableThrid";
import Login from "@/view/LoginMenu";
export const routes = [
    {
        path: '/layout', name: 'layout', component: LayOut, meta:{authRequired:true},children: [
            {
                path:'/allstuff', name:'allstuff',component:AllStuff
            },
            {
                path: '/addstuff',name: 'addstuff',component: AddStuff
            },
            {
                path: '/addshop',name: 'addshop',component: AddShop
            },
            {
                path: '',name: 'allshop',component: AllShop
            },
            {
                path: '/alterrule',name: 'alterrule',component: AlterRule
            },
            {
                path: '/daylytable',name: 'daylytable',component: DaylyTable
            },
            {
                path: '/weeklytable',name: 'weeklytable',component:WeeklyTable
            },
            {
                path: '/daylytablev2',name: 'daylytablev2',component:DaylyTabelView
            },
            {
                path: '/daylytablesecond',name: 'daylytablesecond',component:DaylySecond
            },
            {
                path: '/weekly1',name: 'weekly1',component:Weekly1
            }
            ,
            {
                path: '/weekly2',name: 'weekly2',component:Weekly2
            }
            ,
            {
                path: '/dayly2',name: 'dayly2',component:Dayly2
            }
        ],
            
    },

    {
        path: '/layouts', name: 'layouts', component: LayoutS,children: [
            {
                path:'', name:'stuffinfo',component:StuffInfo
            },
            {
                path:"/stafftable",name:"stafftable",component:StuffTable
            }
        ]
    },
    {
        path:'/', name:'login',component:Login
    }

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})


