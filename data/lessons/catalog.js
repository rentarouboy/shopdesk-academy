import {questions} from '../questions/catalog.js';
const lesson=(id,title,ids)=>({id:'lesson-'+id,title,feature:questions.find(q=>q.id===ids[0]).feature,difficulty:'Beginner',description:'Learn by performing each action in the simulator.',startingScreen:'dashboard',steps:ids.flatMap((id,index)=>questions.find(q=>q.id===id).steps.map((step,j)=>({...step,resetBefore:index>0&&j===0}))),completion:'You completed this lesson successfully.',business:ids.includes('gaming-start')?'pc-gaming':undefined});
export const lessons=[
 lesson('welcome','Welcome to ShopDesk',['dashboard-overview','dashboard-low']),
 lesson('dashboard','Understanding the Dashboard',['dashboard-overview']),
 lesson('products','Products',['product-create','product-price']),
 lesson('categories','Categories',['category-create']),
 lesson('inventory','Inventory',['inventory-review','stock-add']),
 lesson('customers','Customers',['customer-create']),
 lesson('credit','Credit Customers',['credit-balance','credit-repay']),
 lesson('sales','Daily Sales',['sales-cash','sales-history']),
 lesson('services','Services',['service-create']),
 lesson('suppliers','Suppliers',['supplier-create','supplier-history']),
 lesson('orders','Shop Orders',['order-multiple','order-partial']),
 lesson('receiving','Receiving & supplier payments',['order-remaining','order-balance']),
 lesson('reports','Reports',['report-summary']),
 lesson('expenses','Expenses & capital',['expense-create','capital-create']),
 lesson('notes','Notes & Reminders',['note-create']),
 lesson('bills','Bills / Receipts',['receipt-view']),
 lesson('settings','Shop branding & settings',['settings-shop','settings-appearance']),
 lesson('backup','Backup / Restore',['backup-export','backup-restore']),
 lesson('import','Import Assistant',['import-products']),
 lesson('gaming','PC Gaming',['gaming-start'])
];
