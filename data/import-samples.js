// Fictional, bundled rows. The Academy never reads a learner's business files.
export const importSamples={
 products:{headers:['demo_name','demo_category','demo_stock','demo_price','demo_cost'],rows:[['Demo Imported Product','Demo Stationery','5','80','40']],field:'Product name',source:'demo_name'},
 categories:{headers:['demo_name'],rows:[['Demo Imported Category']],field:'Category name',source:'demo_name'},
 customers:{headers:['demo_name','demo_phone','demo_address'],rows:[['Demo Imported Customer','00000 00000','Demo Town']],field:'Customer name',source:'demo_name'},
 suppliers:{headers:['demo_name','demo_phone'],rows:[['Demo Imported Supplier','00000 00000']],field:'Supplier name',source:'demo_name'},
 sales:{headers:['invoiceId','date','sku','quantity','unitPrice','unitCost','subtotal','discountAmount','taxAmount','total','paymentMethod','customerName'],rows:[['DEMO-IMPORT','2026-10-09','DEMO-001','1','80','45','80','0','0','80','Cash','Demo Customer']],field:'Bill',source:'invoiceId'}
};
