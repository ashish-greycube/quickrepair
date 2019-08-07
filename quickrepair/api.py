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