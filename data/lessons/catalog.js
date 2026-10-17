import {questions} from '../questions/catalog.js';
const lesson=(id,title,ids)=>({id:'lesson-'+id,title,feature:questions.find(q=>q.id===ids[0]).feature,difficulty:['Advanced','Intermediate','Beginner'].find(level=>ids.some(id=>questions.find(q=>q.id===id).difficulty===level)),description:'Learn by performing each action in the simulator.',startingScreen:'dashboard',steps:ids.flatMap((id,index)=>questions.find(q=>q.id===id).steps.map((step,j)=>({...step,resetBefore:index>0&&j===0}))),completion:'You completed this lesson successfully.',business:ids.includes('gaming-start')?'pc-gaming':ids.includes('service-create')?'retail-service':undefined});
export const lessons=[
 lesson('welcome','Welcome to ShopDesk',['dashboard-overview','dashboard-low']),
 lesson('dashboard','Understanding the Dashboard',['dashboard-overview']),
 lesson('products','Products',['inventory-review','product-price','product-create']),
 lesson('categories','Categories',['category-create']),
 lesson('inventory','Inventory',['inventory-review','stock-add']),
 lesson('customers','Customers',['customer-inspect','customer-create','customer-contact']),
 lesson('credit','Credit Customers',['credit-balance','credit-repay']),
 lesson('sales','Daily Sales',['sales-cash','sales-history']),
 lesson('services','Services',['service-create']),
 lesson('suppliers','Suppliers',['supplier-history','supplier-create']),
 lesson('orders','Shop Orders',['order-multiple','order-partial']),
 lesson('receiving','Receiving & supplier payments',['order-remaining','supplier-payment']),
 lesson('reports','Reports',['report-summary']),
 lesson('expenses','Expenses & capital',['expense-create','capital-create']),
 lesson('notes','Notes & Reminders',['note-create']),
 lesson('bills','Bills / Receipts',['receipt-view']),
 lesson('settings','Shop branding & settings',['settings-shop','settings-appearance','branding-profile','branding-background']),
 lesson('backup','Backup / Restore',['backup-export','backup-restore']),
 lesson('import','Import Assistant',['import-products']),
 lesson('gaming','PC Gaming',['gaming-start']),
 lesson('stock-history','Stock History',['stock-history']),
 lesson('custom-orders','Custom Orders',['custom-order'])
];

lessons.push(lesson('quick-bill','Quick sales & billing',['quick-bill','quick-bill-settings']),lesson('supplier-payments','Supplier Payments',['supplier-payment','supplier-payment-history']),lesson('sales-returns','Sales Returns & Exchanges',['sales-return','sales-exchange']),lesson('purchase-returns','Purchase Returns',['purchase-return','purchase-replacement']),lesson('master-permissions','Master Device Permissions',['master-permissions']),lesson('permissions-safety','Understanding device permissions',['permission-safety']),lesson('help-updates','Help & software updates',['academy-help','software-updates']));
for(const item of lessons){item.version='4.0.1';item.estimatedMinutes=Math.max(1,Math.ceil(item.steps.length/5));if(item.id==='lesson-master-permissions')item.role='master';item.steps.forEach((step,index)=>step.id=item.id+'-step-'+index);}
