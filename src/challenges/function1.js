import { cities } from "./city";
import { result, result1 } from "./functions";
import { gender } from "./gender";
import { final } from "./functions";
gender()
cities()
result() 
result1()

export function doSearch() {
    var searchText = document.getElementById("searchTerm").value;
    var targetTable = document.getElementById("data");
    var targetTableColCount;
  
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
      var rowData = "";
  
      if (rowIndex == 0) {
        targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
        continue; 
      }
      var colIndex = 1;
  
      var cellText = "";
      cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
  
      rowData += cellText;
  
      if (rowData.indexOf(searchText) == -1)
        targetTable.rows.item(rowIndex).style.display = "none";
      else targetTable.rows.item(rowIndex).style.display = "table-row";
    }
  }
  