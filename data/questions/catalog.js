export const questions=[
  {
    "id": "dashboard-overview",
    "feature": "dashboard",
    "category": "dashboard",
    "title": "How do I read the dashboard?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "overview",
      "totals",
      "welcome"
    ],
    "aliases": [
      "overview",
      "totals",
      "welcome"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:dashboard",
        "target": "nav:dashboard",
        "instruction": "Open {0}.",
        "label": "dashboard"
      },
      {
        "action": "nav:reports",
        "target": "nav:reports",
        "instruction": "Select {0}.",
        "label": "View reports"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "dashboard-low",
    "feature": "dashboard",
    "category": "dashboard",
    "title": "How do I check low stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "alerts",
      "inventory"
    ],
    "aliases": [
      "alerts",
      "inventory"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:dashboard",
        "target": "nav:dashboard",
        "instruction": "Open {0}.",
        "label": "dashboard"
      },
      {
        "action": "dashboard:low-stock",
        "target": "dashboard:low-stock",
        "instruction": "Select {0}.",
        "label": "Low stock"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "product-create",
    "feature": "products",
    "category": "products",
    "title": "How do I create a product?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "item",
      "sku",
      "new product"
    ],
    "aliases": [
      "item",
      "sku",
      "new product"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "open:products",
        "target": "open:products",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Product name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:category",
        "target": "field:category",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Category",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:price",
        "target": "field:price",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Selling price",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:stock",
        "target": "field:stock",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Current stock",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:products",
        "target": "save:products",
        "instruction": "Save the form.",
        "label": "Add product"
      },
      {
        "action": "edit:products:practice-product",
        "target": "edit:products:practice-product",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "product-price",
    "feature": "products",
    "category": "products",
    "title": "How do I set product prices?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "cost",
      "selling",
      "profit"
    ],
    "aliases": [
      "cost",
      "selling",
      "profit"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      },
      {
        "action": "field:price",
        "target": "field:price",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Selling price",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:products",
        "target": "save:products",
        "instruction": "Save the form.",
        "label": "Save changes"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "product-stock",
    "feature": "products",
    "category": "products",
    "title": "How do I set a low-stock threshold?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "minimum",
      "reorder",
      "alert"
    ],
    "aliases": [
      "minimum",
      "reorder",
      "alert"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      },
      {
        "action": "field:minStock",
        "target": "field:minStock",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Minimum stock",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:products",
        "target": "save:products",
        "instruction": "Save the form.",
        "label": "Save changes"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "category-create",
    "feature": "categories",
    "category": "categories",
    "title": "How do I create a category?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "group",
      "organize"
    ],
    "aliases": [
      "group",
      "organize"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "open:categories",
        "target": "open:categories",
        "instruction": "Select {0}.",
        "label": "New category"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Category name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:categories",
        "target": "save:categories",
        "instruction": "Save the form.",
        "label": "Create category"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "inventory-review",
    "feature": "inventory",
    "category": "inventory",
    "title": "How do I review inventory?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "available",
      "quantity"
    ],
    "aliases": [
      "available",
      "quantity"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "field:inventory-search",
        "target": "field:inventory-search",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Search product, SKU, or barcode",
        "validation": {
          "type": "contains",
          "value": "rice"
        }
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "stock-add",
    "feature": "inventory",
    "category": "inventory",
    "title": "How do I add stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "adjustment",
      "restock",
      "stock history"
    ],
    "aliases": [
      "adjustment",
      "restock",
      "stock history"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:stock-adjustments",
        "target": "nav:stock-adjustments",
        "instruction": "Open {0}.",
        "label": "stock-adjustments"
      },
      {
        "action": "open:stock",
        "target": "open:stock",
        "instruction": "Select {0}.",
        "label": "New adjustment"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Product",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:quantity",
        "target": "field:quantity",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Change",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:reason",
        "target": "field:reason",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Reason",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:stock",
        "target": "save:stock",
        "instruction": "Save the form.",
        "label": "Save adjustment"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "sales-cash",
    "feature": "daily-sales",
    "category": "daily-sales",
    "title": "How do I record a daily sale?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "cash",
      "sell",
      "bill"
    ],
    "aliases": [
      "cash",
      "sell",
      "bill"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:daily-sales",
        "target": "nav:daily-sales",
        "instruction": "Open {0}.",
        "label": "daily-sales"
      },
      {
        "action": "field:sales-search",
        "target": "field:sales-search",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Search all products",
        "validation": {
          "type": "contains",
          "value": "rice"
        }
      },
      {
        "action": "field:sold:p1",
        "target": "field:sold:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Quantity sold",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:payment",
        "target": "field:payment",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Payment method",
        "validation": {
          "type": "equals",
          "value": "Cash"
        }
      },
      {
        "action": "save:daily-sale",
        "target": "save:daily-sale",
        "instruction": "Save the form.",
        "label": "Save sales & update stock"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "sales-credit",
    "feature": "daily-sales",
    "category": "daily-sales",
    "title": "How do I record a credit sale?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "debt",
      "unpaid"
    ],
    "aliases": [
      "debt",
      "unpaid"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:daily-sales",
        "target": "nav:daily-sales",
        "instruction": "Open {0}.",
        "label": "daily-sales"
      },
      {
        "action": "field:sold:p1",
        "target": "field:sold:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Quantity sold",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:payment",
        "target": "field:payment",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Payment method",
        "validation": {
          "type": "equals",
          "value": "Credit"
        }
      },
      {
        "action": "field:sale-customer",
        "target": "field:sale-customer",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Customer (optional)",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:daily-sale",
        "target": "save:daily-sale",
        "instruction": "Save the form.",
        "label": "Save sales & update stock"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "sales-history",
    "feature": "sales-history",
    "category": "sales-history",
    "title": "How do I review sales history?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "invoice",
      "transaction",
      "past sale"
    ],
    "aliases": [
      "invoice",
      "transaction",
      "past sale"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:sales-history",
        "target": "nav:sales-history",
        "instruction": "Open {0}.",
        "label": "sales-history"
      },
      {
        "action": "sale:detail:IKY-BILL-1000",
        "target": "sale:detail:IKY-BILL-1000",
        "instruction": "Select {0}.",
        "label": "Receipt"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "service-create",
    "feature": "services",
    "category": "services",
    "title": "How do I add a service?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "job",
      "repair"
    ],
    "aliases": [
      "job",
      "repair"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:services",
        "target": "nav:services",
        "instruction": "Open {0}.",
        "label": "services"
      },
      {
        "action": "open:services",
        "target": "open:services",
        "instruction": "Select {0}.",
        "label": "Add service job"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Service",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:customer",
        "target": "field:customer",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Customer",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:services",
        "target": "save:services",
        "instruction": "Save the form.",
        "label": "Save changes"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "business": "retail-service"
  },
  {
    "id": "service-complete",
    "feature": "services",
    "category": "services",
    "title": "How do I complete a service?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "job",
      "completed"
    ],
    "aliases": [
      "job",
      "completed"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:services",
        "target": "nav:services",
        "instruction": "Open {0}.",
        "label": "services"
      },
      {
        "action": "service:complete:job-2",
        "target": "service:complete:job-2",
        "instruction": "Select {0}.",
        "label": "Complete"
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:services",
        "target": "save:services",
        "instruction": "Save the form.",
        "label": "Complete & record revenue"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "business": "retail-service"
  },
  {
    "id": "customer-create",
    "feature": "customers",
    "category": "customers",
    "title": "How do I create a customer?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "ravi",
      "ravi kumar",
      "contact",
      "new customer"
    ],
    "aliases": [
      "ravi",
      "ravi kumar",
      "contact",
      "new customer"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:customers",
        "target": "nav:customers",
        "instruction": "Open {0}.",
        "label": "customers"
      },
      {
        "action": "open:customers",
        "target": "open:customers",
        "instruction": "Select {0}.",
        "label": "Add customer"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Customer name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:phone",
        "target": "field:phone",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Phone",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:address",
        "target": "field:address",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Address",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:customers",
        "target": "save:customers",
        "instruction": "Save the form.",
        "label": "Add customer"
      },
      {
        "action": "customer:history:practice-customers",
        "target": "customer:history:practice-customers",
        "instruction": "Select {0}.",
        "label": "History"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "customer-contact",
    "feature": "customers",
    "category": "customers",
    "title": "How do I add customer contact details?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "telephone",
      "email",
      "address"
    ],
    "aliases": [
      "telephone",
      "email",
      "address"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:customers",
        "target": "nav:customers",
        "instruction": "Open {0}.",
        "label": "customers"
      },
      {
        "action": "edit:customers:c1",
        "target": "edit:customers:c1",
        "instruction": "Select {0}.",
        "label": "Edit"
      },
      {
        "action": "field:phone",
        "target": "field:phone",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Phone",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:email",
        "target": "field:email",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Email",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:address",
        "target": "field:address",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Address",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:customers",
        "target": "save:customers",
        "instruction": "Save the form.",
        "label": "Save changes"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "credit-balance",
    "feature": "credit-customers",
    "category": "credit-customers",
    "title": "How do I check outstanding credit?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "balance",
      "debt",
      "customer"
    ],
    "aliases": [
      "balance",
      "debt",
      "customer"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:credit-customers",
        "target": "nav:credit-customers",
        "instruction": "Open {0}.",
        "label": "credit-customers"
      },
      {
        "action": "credit:detail:c1",
        "target": "credit:detail:c1",
        "instruction": "Select {0}.",
        "label": "History"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "credit-repay",
    "feature": "credit-customers",
    "category": "credit-customers",
    "title": "How do I record a repayment?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "payment",
      "pay debt",
      "repayment"
    ],
    "aliases": [
      "payment",
      "pay debt",
      "repayment"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:credit-customers",
        "target": "nav:credit-customers",
        "instruction": "Open {0}.",
        "label": "credit-customers"
      },
      {
        "action": "repayment:c1",
        "target": "repayment:c1",
        "instruction": "Select {0}.",
        "label": "Record repayment"
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Repayment amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:payment",
        "target": "field:payment",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Repayment method",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:repayment",
        "target": "save:repayment",
        "instruction": "Save the form.",
        "label": "Save repayment"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "supplier-create",
    "feature": "suppliers",
    "category": "suppliers",
    "title": "How do I create a supplier?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "vendor",
      "contact"
    ],
    "aliases": [
      "vendor",
      "contact"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:suppliers",
        "target": "nav:suppliers",
        "instruction": "Open {0}.",
        "label": "suppliers"
      },
      {
        "action": "open:suppliers",
        "target": "open:suppliers",
        "instruction": "Select {0}.",
        "label": "Add supplier"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:phone",
        "target": "field:phone",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Phone",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:suppliers",
        "target": "save:suppliers",
        "instruction": "Save the form.",
        "label": "Add supplier"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "supplier-history",
    "feature": "suppliers",
    "category": "suppliers",
    "title": "How do I review supplier orders?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "purchasing",
      "history"
    ],
    "aliases": [
      "purchasing",
      "history"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:suppliers",
        "target": "nav:suppliers",
        "instruction": "Open {0}.",
        "label": "suppliers"
      },
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "field:orders-search",
        "target": "field:orders-search",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Search shop orders",
        "validation": {
          "type": "contains",
          "value": "freshmart"
        }
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-create",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I create a shop order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "purchase",
      "supplier order"
    ],
    "aliases": [
      "purchase",
      "supplier order"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-add",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I add a product to an order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "product",
      "add item"
    ],
    "aliases": [
      "product",
      "add item"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-multiple",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I order multiple products?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "multiple",
      "products",
      "lines"
    ],
    "aliases": [
      "multiple",
      "products",
      "lines"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "order:add:p2",
        "target": "order:add:p2",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p2",
        "target": "field:quantity:p2",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-quantity",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I change ordered quantities?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "quantity",
      "edit"
    ],
    "aliases": [
      "quantity",
      "edit"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 2
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-remove",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I remove an unreceived product?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "remove",
      "delete item"
    ],
    "aliases": [
      "remove",
      "delete item"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "order:add:p2",
        "target": "order:add:p2",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "order:remove:p2",
        "target": "order:remove:p2",
        "instruction": "Select {0}.",
        "label": "Remove product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-supplier",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I assign an order to a supplier?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "assign",
      "supplier-specific"
    ],
    "aliases": [
      "assign",
      "supplier-specific"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-two-suppliers",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I work with multiple suppliers?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "organize",
      "supplier-specific",
      "separate orders"
    ],
    "aliases": [
      "organize",
      "supplier-specific",
      "separate orders"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "equals",
          "value": "FreshMart Wholesale"
        }
      },
      {
        "action": "order:add:p1",
        "target": "order:add:p1",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p1",
        "target": "field:quantity:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:new",
        "target": "order:new",
        "instruction": "Select {0}.",
        "label": "New shop order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "equals",
          "value": "South India Foods Supply"
        }
      },
      {
        "action": "order:add:p2",
        "target": "order:add:p2",
        "instruction": "Select {0}.",
        "label": "Add product"
      },
      {
        "action": "field:quantity:p2",
        "target": "field:quantity:p2",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Ordered",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-receive",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I receive an order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "receiving",
      "delivery",
      "stock"
    ],
    "aliases": [
      "receiving",
      "delivery",
      "stock"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:received:p1",
        "target": "field:received:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Received total",
        "validation": {
          "type": "number",
          "min": 3
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-receive-all",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I receive all ordered stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "receive all",
      "full delivery"
    ],
    "aliases": [
      "receive all",
      "full delivery"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "order:receive-all",
        "target": "order:receive-all",
        "instruction": "Select {0}.",
        "label": "Receive All"
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-partial",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I partially receive an order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "partial receiving",
      "partially received",
      "part delivery"
    ],
    "aliases": [
      "partial receiving",
      "partially received",
      "part delivery"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:received:p1",
        "target": "field:received:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Received total",
        "validation": {
          "type": "range",
          "min": 3,
          "max": 9
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-remaining",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I receive the remaining quantity later?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "remaining stock",
      "later",
      "second delivery"
    ],
    "aliases": [
      "remaining stock",
      "later",
      "second delivery"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:received:p1",
        "target": "field:received:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Received total",
        "validation": {
          "type": "range",
          "min": 3,
          "max": 9
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "order:receive-all",
        "target": "order:receive-all",
        "instruction": "Select {0}.",
        "label": "Receive All"
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-inventory",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "What happens to inventory after receiving?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "stock applied once",
      "inventory",
      "received total"
    ],
    "aliases": [
      "stock applied once",
      "inventory",
      "received total"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "order:receive-all",
        "target": "order:receive-all",
        "instruction": "Select {0}.",
        "label": "Receive All"
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "Categories / Inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-payment",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I record supplier payment information?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "supplier payment",
      "payment",
      "actual amount"
    ],
    "aliases": [
      "supplier payment",
      "payment",
      "actual amount"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Actual amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:paid",
        "target": "field:paid",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount paid",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-paid",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I record the amount paid?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "cash outflow",
      "paid"
    ],
    "aliases": [
      "cash outflow",
      "paid"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:paid",
        "target": "field:paid",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount paid",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-balance",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I see the remaining order balance?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "remaining amount",
      "supplier payment",
      "unpaid"
    ],
    "aliases": [
      "remaining amount",
      "supplier payment",
      "unpaid"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "inspect:balance",
        "target": "inspect:balance",
        "instruction": "Select {0}.",
        "label": "Remaining balance"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-select-low",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I select multiple low-stock products?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "recommendations",
      "low stock",
      "multiple"
    ],
    "aliases": [
      "recommendations",
      "low stock",
      "multiple"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:multiple",
        "target": "order:multiple",
        "instruction": "Select {0}.",
        "label": "Select Multiple"
      },
      {
        "action": "order:select:p2",
        "target": "order:select:p2",
        "instruction": "Select {0}.",
        "label": "Toor Dal 1 kg",
        "rawLabel": true
      },
      {
        "action": "order:select:p4",
        "target": "order:select:p4",
        "instruction": "Select {0}.",
        "label": "Sunflower Oil 1 L",
        "rawLabel": true
      },
      {
        "action": "order:from-low",
        "target": "order:from-low",
        "instruction": "Select {0}.",
        "label": "Assign supplier & create order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-low-assign",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I assign low-stock products to a supplier?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "supplier",
      "recommendation"
    ],
    "aliases": [
      "supplier",
      "recommendation"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:multiple",
        "target": "order:multiple",
        "instruction": "Select {0}.",
        "label": "Select Multiple"
      },
      {
        "action": "order:select:p2",
        "target": "order:select:p2",
        "instruction": "Select {0}.",
        "label": "Toor Dal 1 kg",
        "rawLabel": true
      },
      {
        "action": "order:from-low",
        "target": "order:from-low",
        "instruction": "Select {0}.",
        "label": "Assign supplier & create order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-low-create",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I create an order from low stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "reorder",
      "recommendation"
    ],
    "aliases": [
      "reorder",
      "recommendation"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:low:p2",
        "target": "order:low:p2",
        "instruction": "Select {0}.",
        "label": "Create order"
      },
      {
        "action": "field:supplier",
        "target": "field:supplier",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Supplier",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-find",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I find an existing order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "search orders",
      "find",
      "supplier"
    ],
    "aliases": [
      "search orders",
      "find",
      "supplier"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "field:orders-search",
        "target": "field:orders-search",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Search shop orders",
        "validation": {
          "type": "contains",
          "value": "freshmart"
        }
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-review",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I review an order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "review",
      "detail",
      "quantity"
    ],
    "aliases": [
      "review",
      "detail",
      "quantity"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "inspect:balance",
        "target": "inspect:balance",
        "instruction": "Select {0}.",
        "label": "Remaining balance"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "order-manage",
    "feature": "shop-orders",
    "category": "shop-orders",
    "title": "How do I manage an order after receiving stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "history",
      "received",
      "manage"
    ],
    "aliases": [
      "history",
      "received",
      "manage"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:shop-orders",
        "target": "nav:shop-orders",
        "instruction": "Open {0}.",
        "label": "shop-orders"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "order:receive-all",
        "target": "order:receive-all",
        "instruction": "Select {0}.",
        "label": "Receive All"
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      },
      {
        "action": "order:history",
        "target": "order:history",
        "instruction": "Select {0}.",
        "label": "Order history"
      },
      {
        "action": "order:edit",
        "target": "order:edit",
        "instruction": "Select {0}.",
        "label": "Edit / receive"
      },
      {
        "action": "field:paid",
        "target": "field:paid",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount paid",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:order",
        "target": "save:order",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "report-summary",
    "feature": "reports",
    "category": "reports",
    "title": "How do I read reports?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "profit",
      "cash",
      "capital",
      "liabilities"
    ],
    "aliases": [
      "profit",
      "cash",
      "capital",
      "liabilities"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:reports",
        "target": "nav:reports",
        "instruction": "Open {0}.",
        "label": "reports"
      },
      {
        "action": "report:financial",
        "target": "report:financial",
        "instruction": "Select {0}.",
        "label": "Financial Position"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "expense-create",
    "feature": "expenses",
    "category": "expenses",
    "title": "How do I record an expense?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "cost",
      "expense"
    ],
    "aliases": [
      "cost",
      "expense"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:expenses",
        "target": "nav:expenses",
        "instruction": "Open {0}.",
        "label": "expenses"
      },
      {
        "action": "open:expenses",
        "target": "open:expenses",
        "instruction": "Select {0}.",
        "label": "Add expense"
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:date",
        "target": "field:date",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Date",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:category",
        "target": "field:category",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Category",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Description / note",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:expenses",
        "target": "save:expenses",
        "instruction": "Save the form.",
        "label": "Add expense"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "capital-create",
    "feature": "capital",
    "category": "capital",
    "title": "How do I record invested capital?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "investment",
      "owner contribution"
    ],
    "aliases": [
      "investment",
      "owner contribution"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:capital",
        "target": "nav:capital",
        "instruction": "Open {0}.",
        "label": "capital"
      },
      {
        "action": "open:capital",
        "target": "open:capital",
        "instruction": "Select {0}.",
        "label": "Add investment"
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:date",
        "target": "field:date",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Date",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Used for",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:capital",
        "target": "save:capital",
        "instruction": "Save the form.",
        "label": "Save changes"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "note-create",
    "feature": "notes",
    "category": "notes",
    "title": "How do I create a reminder?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "notes",
      "reminder",
      "due date"
    ],
    "aliases": [
      "notes",
      "reminder",
      "due date"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:notes",
        "target": "nav:notes",
        "instruction": "Open {0}.",
        "label": "notes"
      },
      {
        "action": "open:notes",
        "target": "open:notes",
        "instruction": "Select {0}.",
        "label": "Add note"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Title",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:date",
        "target": "field:date",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Reminder date (optional)",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:notes",
        "target": "save:notes",
        "instruction": "Save the form.",
        "label": "Save note"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "receipt-view",
    "feature": "bills",
    "category": "bills",
    "title": "How do I view a bill or receipt?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "bill",
      "print",
      "invoice"
    ],
    "aliases": [
      "bill",
      "print",
      "invoice"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:sales-history",
        "target": "nav:sales-history",
        "instruction": "Open {0}.",
        "label": "sales-history"
      },
      {
        "action": "sale:detail:IKY-BILL-1000",
        "target": "sale:detail:IKY-BILL-1000",
        "instruction": "Select {0}.",
        "label": "Receipt"
      },
      {
        "action": "receipt:preview",
        "target": "receipt:preview",
        "instruction": "Select {0}.",
        "label": "Print / Save PDF"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "settings-shop",
    "feature": "settings",
    "category": "settings",
    "title": "How do I update shop information?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "branding",
      "name",
      "address"
    ],
    "aliases": [
      "branding",
      "name",
      "address"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Shop name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:owner",
        "target": "field:owner",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Owner name",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:settings",
        "target": "save:settings",
        "instruction": "Save the form.",
        "label": "Save settings"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "settings-appearance",
    "feature": "settings",
    "category": "settings",
    "title": "How do I change appearance?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "theme",
      "branding",
      "midnight"
    ],
    "aliases": [
      "theme",
      "branding",
      "midnight"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "theme:Ocean",
        "target": "theme:Ocean",
        "instruction": "Select {0}.",
        "label": "Ocean"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "settings-tax",
    "feature": "settings",
    "category": "settings",
    "title": "How do I configure optional tax?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "gst",
      "tax",
      "optional"
    ],
    "aliases": [
      "gst",
      "tax",
      "optional"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "field:tax",
        "target": "field:tax",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Tax mode",
        "validation": {
          "type": "equals",
          "value": "GST"
        }
      },
      {
        "action": "field:rate",
        "target": "field:rate",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Tax rate (%)",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:settings",
        "target": "save:settings",
        "instruction": "Save the form.",
        "label": "Save settings"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "settings-notifications",
    "feature": "settings",
    "category": "settings",
    "title": "Where are notification preferences?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "alerts",
      "gaming",
      "low stock"
    ],
    "aliases": [
      "alerts",
      "gaming",
      "low stock"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "inspect:notifications",
        "target": "inspect:notifications",
        "instruction": "Select {0}.",
        "label": "Notifications"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "backup-export",
    "feature": "backup",
    "category": "backup",
    "title": "How do I export a backup?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "json",
      "download",
      "backup"
    ],
    "aliases": [
      "json",
      "download",
      "backup"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "backup:export",
        "target": "backup:export",
        "instruction": "Select {0}.",
        "label": "Export backup"
      },
      {
        "action": "backup:confirm",
        "target": "backup:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "backup-restore",
    "feature": "backup",
    "category": "backup",
    "title": "How do I restore a backup?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "json",
      "restore",
      "backup"
    ],
    "aliases": [
      "json",
      "restore",
      "backup"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "backup:restore",
        "target": "backup:restore",
        "instruction": "Select {0}.",
        "label": "Restore backup"
      },
      {
        "action": "backup:preview",
        "target": "backup:preview",
        "instruction": "Select {0}.",
        "label": "Preview"
      },
      {
        "action": "backup:confirm",
        "target": "backup:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "import-products",
    "feature": "import",
    "category": "import",
    "title": "How do I import products?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "products",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "products",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "products"
  },
  {
    "id": "import-categories",
    "feature": "import",
    "category": "import",
    "title": "How do I import categories?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "categories",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "categories",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "categories"
  },
  {
    "id": "import-customers",
    "feature": "import",
    "category": "import",
    "title": "How do I import customers?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "customers",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "customers",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "customers"
  },
  {
    "id": "import-suppliers",
    "feature": "import",
    "category": "import",
    "title": "How do I import suppliers?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "suppliers",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "suppliers",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "suppliers"
  },
  {
    "id": "import-stock",
    "feature": "import",
    "category": "import",
    "title": "How do I import stock?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "stock",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "stock",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "products"
  },
  {
    "id": "import-sales",
    "feature": "import",
    "category": "import",
    "title": "How do I import historical sales?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "import",
      "sales",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "aliases": [
      "import",
      "sales",
      "csv",
      "json",
      "xls",
      "xlsx",
      "xml",
      "txt"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "importKind": "sales"
  },
  {
    "id": "import-mapping",
    "feature": "import",
    "category": "import",
    "title": "How do I map import fields?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "map",
      "field",
      "column"
    ],
    "aliases": [
      "map",
      "field",
      "column"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "import-problems",
    "feature": "import",
    "category": "import",
    "title": "How do I review import problems?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "error",
      "validation",
      "problems",
      "map"
    ],
    "aliases": [
      "error",
      "validation",
      "problems",
      "map"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "import:open",
        "target": "import:open",
        "instruction": "Select {0}.",
        "label": "Import external data"
      },
      {
        "action": "import:detect",
        "target": "import:detect",
        "instruction": "Select {0}.",
        "label": "Detect file"
      },
      {
        "action": "import:preview",
        "target": "import:preview",
        "instruction": "Select {0}.",
        "label": "Preview rows"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "equals",
          "value": "wrong"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "field:mapping",
        "target": "field:mapping",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Map fields",
        "validation": {
          "type": "equals",
          "value": "correct"
        }
      },
      {
        "action": "import:validate",
        "target": "import:validate",
        "instruction": "Select {0}.",
        "label": "Validate"
      },
      {
        "action": "import:confirm",
        "target": "import:confirm",
        "instruction": "Select {0}.",
        "label": "Confirm"
      },
      {
        "action": "import:apply",
        "target": "import:apply",
        "instruction": "Select {0}.",
        "label": "Confirm import"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "gaming-start",
    "feature": "gaming",
    "category": "gaming",
    "title": "How do I start a PC Gaming session?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "gaming",
      "timer",
      "pc"
    ],
    "aliases": [
      "gaming",
      "timer",
      "pc"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:gaming",
        "target": "nav:gaming",
        "instruction": "Open {0}.",
        "label": "gaming"
      },
      {
        "action": "open:gaming",
        "target": "open:gaming",
        "instruction": "Select {0}.",
        "label": "Start session"
      },
      {
        "action": "field:minutes",
        "target": "field:minutes",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Duration (minutes)",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Station (optional)",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:rate",
        "target": "field:rate",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Gaming rate per hour",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "save:gaming",
        "target": "save:gaming",
        "instruction": "Save the form.",
        "label": "Start session"
      }
    ],
    "completion": "You completed the workflow successfully.",
    "business": "pc-gaming"
  },
  {
    "id": "customer-inspect",
    "feature": "customers",
    "category": "customers",
    "title": "How do I view a customer?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "ravi",
      "contact",
      "purchase history"
    ],
    "aliases": [
      "ravi",
      "contact",
      "purchase history"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:customers",
        "target": "nav:customers",
        "instruction": "Open {0}.",
        "label": "customers"
      },
      {
        "action": "field:customers-search",
        "target": "field:customers-search",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Search name, phone, or email",
        "validation": {
          "type": "contains",
          "value": "ravi"
        }
      },
      {
        "action": "customer:history:c1",
        "target": "customer:history:c1",
        "instruction": "Select {0}.",
        "label": "History"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "stock-history",
    "feature": "stock-adjustments",
    "category": "stock-adjustments",
    "title": "How do I review stock history?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "adjustment",
      "receiving",
      "stock history"
    ],
    "aliases": [
      "adjustment",
      "receiving",
      "stock history"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:stock-adjustments",
        "target": "nav:stock-adjustments",
        "instruction": "Open {0}.",
        "label": "stock-adjustments"
      },
      {
        "action": "nav:inventory",
        "target": "nav:inventory",
        "instruction": "Open {0}.",
        "label": "inventory"
      },
      {
        "action": "edit:products:p1",
        "target": "edit:products:p1",
        "instruction": "Select {0}.",
        "label": "Edit product"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "custom-order",
    "feature": "orders",
    "category": "orders",
    "title": "How do I create a custom order?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "customer request",
      "hamper",
      "custom order"
    ],
    "aliases": [
      "customer request",
      "hamper",
      "custom order"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:orders",
        "target": "nav:orders",
        "instruction": "Open {0}.",
        "label": "orders"
      },
      {
        "action": "open:orders",
        "target": "open:orders",
        "instruction": "Select {0}.",
        "label": "New custom order"
      },
      {
        "action": "field:customer",
        "target": "field:customer",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Customer",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:name",
        "target": "field:name",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Description",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "field:quantity",
        "target": "field:quantity",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Quantity",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:amount",
        "target": "field:amount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Amount",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:status",
        "target": "field:status",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Status",
        "validation": {
          "type": "text"
        }
      },
      {
        "action": "save:orders",
        "target": "save:orders",
        "instruction": "Save the form.",
        "label": "Save order"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "branding-profile",
    "feature": "settings",
    "category": "settings",
    "title": "How do I change the shop profile picture?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "branding",
      "profile",
      "logo"
    ],
    "aliases": [
      "branding",
      "profile",
      "logo"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "branding:profile",
        "target": "branding:profile",
        "instruction": "Select {0}.",
        "label": "Choose image"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "branding-background",
    "feature": "settings",
    "category": "settings",
    "title": "How do I change the shop background?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "background",
      "transparency",
      "branding"
    ],
    "aliases": [
      "background",
      "transparency",
      "branding"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:settings",
        "target": "nav:settings",
        "instruction": "Open {0}.",
        "label": "settings"
      },
      {
        "action": "branding:background",
        "target": "branding:background",
        "instruction": "Select {0}.",
        "label": "Choose image"
      },
      {
        "action": "field:transparency",
        "target": "field:transparency",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Panel transparency",
        "validation": {
          "type": "range",
          "min": 0,
          "max": 70
        }
      },
      {
        "action": "save:settings",
        "target": "save:settings",
        "instruction": "Save the form.",
        "label": "Save settings"
      }
    ],
    "completion": "You completed the workflow successfully."
  },
  {
    "id": "sales-discount",
    "feature": "daily-sales",
    "category": "daily-sales",
    "title": "How do I apply a discount?",
    "description": "Practice this workflow in a clean demo workspace.",
    "keywords": [
      "percentage",
      "discount",
      "total"
    ],
    "aliases": [
      "percentage",
      "discount",
      "total"
    ],
    "difficulty": "Beginner",
    "startingScreen": "dashboard",
    "steps": [
      {
        "action": "nav:daily-sales",
        "target": "nav:daily-sales",
        "instruction": "Open {0}.",
        "label": "daily-sales"
      },
      {
        "action": "field:sold:p1",
        "target": "field:sold:p1",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Quantity sold",
        "validation": {
          "type": "number",
          "min": 1
        }
      },
      {
        "action": "field:discount",
        "target": "field:discount",
        "instruction": "Enter {0}, then leave the field.",
        "label": "Discount value",
        "validation": {
          "type": "number",
          "min": 0
        }
      },
      {
        "action": "save:daily-sale",
        "target": "save:daily-sale",
        "instruction": "Save the form.",
        "label": "Save sales & update stock"
      }
    ],
    "completion": "You completed the workflow successfully."
  }
];
export const featureLabel=id=>({inventory:"Categories / Inventory","stock-adjustments":"Stock History",orders:"Custom Orders",products:"Products",categories:"Categories","daily-sales":"Daily Sales","sales-history":"Sales History",services:"Services",customers:"Customers","credit-customers":"Credit Customers",suppliers:"Suppliers","shop-orders":"Shop Orders",reports:"Reports",expenses:"Expenses",capital:"Capital Invested",notes:"Notes & Reminders",settings:"Settings",gaming:"PC Gaming",dashboard:"Dashboard",bills:"Bills / Receipts",backup:"Backup / Restore",import:"Import Assistant"}[id]??id);
