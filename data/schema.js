export const features=[
 ['dashboard','Dashboard','▦'],['products','Products','◇'],['categories','Categories','▤'],['inventory','Inventory','▥'],['daily-sales','Daily Sales','↗'],['sales-history','Sales History','◷'],['services','Services','⚒'],['customers','Customers','♧'],['credit-customers','Credit Customers','◈'],['suppliers','Suppliers','⇄'],['shop-orders','Shop Orders','▣'],['reports','Reports','▧'],['expenses','Expenses','−'],['capital','Capital Invested','+'],['notes','Notes & Reminders','▢'],['bills','Bills / Receipts','▱'],['settings','Settings','⚙'],['backup','Backup / Restore','↥'],['import','Import Assistant','⇥'],['gaming','PC Gaming','⌘']
].map(([id,label,icon])=>({id,label,icon}));
export const fields={
 customers:[['name','Customer name','text',true],['phone','Phone','tel'],['email','Email','email'],['address','Address','text'],['notes','Notes','text']],
 suppliers:[['name','Supplier name','text',true],['phone','Phone','tel'],['email','Email','email'],['address','Address','text'],['notes','Notes','text']],
 categories:[['name','Category name','text',true]],
 products:[['name','Product name','text',true],['category','Category','category'],['sku','SKU','text'],['stock','Opening stock','number'],['minStock','Minimum stock','number'],['price','Selling price','number'],['cost','Purchase price','number']],
 stock:[['name','Product','productName',true],['quantity','Quantity','number',true],['notes','Notes','text']],
 sales:[['name','Customer','customer',true],['product','Product','product',true],['quantity','Quantity','number',true],['payment','Payment method','payment']],
 services:[['name','Service','text',true],['customer','Customer','customer'],['amount','Amount','number',true],['status','Status','serviceStatus']],
 repayment:[['name','Customer','customer',true],['amount','Amount','number',true]],
 expenses:[['name','Expense description','text',true],['amount','Amount','number',true]],
 capital:[['name','Description','text',true],['amount','Amount','number',true]],
 notes:[['name','Note','text',true],['date','Reminder date','date']],
 settings:[['name','Shop name','text',true],['owner','Owner name','text'],['phone','Phone','tel'],['address','Address','text'],['currency','Currency symbol','text'],['theme','Theme','theme'],['tax','Tax mode','tax'],['rate','Tax rate (%)','number']],
 gaming:[['name','Customer name','text',true],['minutes','Duration (minutes)','number',true],['rate','Gaming rate per hour','number',true]]
};
export const screenKind={'daily-sales':'sales',inventory:'stock','credit-customers':'repayment',settings:'settings',gaming:'gaming'};
export const themes=['Midnight','Ocean','Emerald','Royal','Rose','Sunset','Clean Light','Arctic','Charcoal Gold','Sage'];
export const settingsTabs=['Shop information','Appearance','Language','Notifications','Tax / GST','Shop Profile Picture','Shop Background','Data management'];
export const navigation=[
 ['dashboard','Dashboard','LayoutDashboard'],['inventory','Categories / Inventory','Boxes'],['daily-sales','Daily Sales','ShoppingCart'],['sales-history','Sales History','History'],['services','Services','Wrench'],['customers','Customers','UsersRound'],['credit-customers','Credit Customers','WalletCards'],['suppliers','Suppliers','Truck'],['expenses','Expenses','CircleDollarSign'],['stock-adjustments','Stock History','SlidersHorizontal'],['capital','Capital Invested','WalletCards'],['notes','Notes & Reminders','ListTodo'],['shop-orders','Shop Orders','Truck'],['orders','Custom Orders','ClipboardList'],['gaming','PC Gaming','Gamepad2'],['reports','Reports','BarChart3'],['settings','Settings','Settings']
].map(([id,label,icon])=>({id,label,icon}));
export function visibleNavigation(business){return navigation.filter(f=>!(['services'].includes(f.id)&&business==='retail')&&(f.id!=='gaming'||business==='pc-gaming'));}
features.push({id:'stock-adjustments',label:'Stock History',icon:'↕'},{id:'orders',label:'Custom Orders',icon:'▣'});
fields.products=[['name','Product name','text',true],['category','Category','category',true],['unit','Unit','unit'],['sku','SKU (optional)','text'],['expiryDate','Expiry date (optional)','date'],['barcode','Barcode (optional)','text'],['stock','Current stock','number',true],['minStock','Minimum stock','number',true],['price','Selling price','number',true],['cost','Purchase price','number'],['notes','Notes (optional)','text']];
fields.stock=[['name','Product','productName',true],['quantity','Change','number',true],['reason','Reason','reason'],['notes','Note (optional)','text']];
fields.repayment=[['name','Customer','customer',true],['amount','Repayment amount','number',true],['payment','Repayment method','repayMethod'],['notes','Note (optional)','text']];
fields.expenses=[['amount','Amount','number',true],['date','Date','date',true],['category','Category','expenseCategory'],['payment','Payment method (optional)','payment'],['name','Description / note','text',true]];
fields.capital=[['amount','Amount','number',true],['date','Date','date',true],['name','Used for','text',true],['notes','Note or description','text']];
fields.notes=[['name','Title','text',true],['date','Reminder date (optional)','date'],['time','Reminder time (optional)','time'],['details','Details','text']];
fields.orders=[['customer','Customer','customer',true],['name','Description','text',true],['quantity','Quantity','number',true],['amount','Amount','number',true],['status','Status','customStatus']];
fields.gaming=[['minutes','Duration (minutes)','number',true],['name','Station (optional)','text'],['rate','Gaming rate per hour','number']];

fields.suppliers.splice(4,0,['productsSupplied','Products supplied','text'],['outstandingAmount','Opening supplier balance ({0}, excluding shop orders)','number']);

fields.products.splice(5,0,['expiryReminder','Expiry reminder','expiryReminder']);
