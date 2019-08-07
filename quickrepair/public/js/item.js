/* quickrepair: filter child table data */
cur_frm.set_query("repair_item", "repair_item_specification", function(doc, cdt, cdn) {
    var d = locals[cdt][cdn];
    return{
      filters: [
        ['Item', 'item_group', '=', 'Web Repair Item']
      ]
    }
  });