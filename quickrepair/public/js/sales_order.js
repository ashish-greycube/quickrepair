frappe.ui.form.on('Sales Order', {
//quick-repair
validate: function(doc, cdt, cdn) {
    //quick-repair
            var linked_quotation_name = doc.items[0].prevdoc_docname;
            if (linked_quotation_name) {
                var so_workflow_state = doc.workflow_state;
                if (so_workflow_state) {
                    frappe.call({
                        method: "quickrepair.api.update_workflow_status",
                        args: {
                        doctype: "Quotation",
                        docname: linked_quotation_name,
                        value_to_set: so_workflow_state
                        },
                        callback(r) {
                            //success 
                        }
                    });
                }
            }
    //quick-repair
    }
})