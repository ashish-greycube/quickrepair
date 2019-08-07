//client :quickrepair Taks: Fill creator with owner value
frappe.ui.form.on("Quotation", "validate", function(frm) {
    cur_frm.set_value("creator", frm.doc.owner);
});

/* quickrepair: filter branch based on logged in user */
cur_frm.cscript.branch = function(doc, cdt, cd) {
    frappe.call({
        method: "frappe.client.get_list",
        args: {
            doctype: "Employee",
            order_by: "branch",
            fields: ["branch"],
            filters: {
                "employee_name": frappe.session.user_fullname
            }
        },
        callback: function(r) {
            if (r.message) {
                cur_frm.set_value("branch", r.message[0].branch);
            }
        }
    });
}