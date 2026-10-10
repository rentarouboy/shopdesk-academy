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
