from __future__ import unicode_literals
import frappe
from frappe import _


# from erpnext.stock.doctype.item.item import PriceList


def set_item_template(self,method):
    print('----')
    print(self.website)
    print('----')
    self.website = frappe._dict(
        page_title_field="item_name",
        condition_field="show_in_website",
        template="quickrepair/templates/generators/item.html",
        no_cache=1
    )
    print(self.website)

#quick-repair
@frappe.whitelist()
def update_workflow_status(doctype, docname,value_to_set):
	frappe.db.set_value(doctype, docname, "kanban_column", value_to_set)
	return frappe.db.set_value(doctype, docname, "workflow_state", value_to_set)
#quick-repair