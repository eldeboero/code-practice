/*

Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

Example desired output:

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

Copied the solution of #3 as a starting point, will change the function name and remove the "omitFirstRow" argument

const csv_to_array1 = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));






const CSV_to_JSON = (data, delimiter = ',') => {
  const getRowLabels = (firstRow, delimiter = ',') => 
    data
      .slice(0, data.indexOf('\n'))
      .split(delimiter);
  const rowLabels = getRowLabels(data, delimiter = ',');
}

console.log(CSV_to_JSON('first name, last name\nben, deboer\ndominic, diotalevi'));  


*/

// status: parses first line into array, and the rest of the data into 2D array
// need to stitch the return together correctly

const CSV_to_JSON = (data, delimiter = ',') => {
  const getRowLabels = (data, delimiter = ',') => 
    data
      .slice(0, data.indexOf('\n'))
      .split(delimiter);
  const rowLabels = getRowLabels(data, delimiter = ',');

  const getRowData = (data, delimiter = ',') =>
    data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => v.split(delimiter));
  const rowData = getRowData(data, ',');
  
  return rowLabels[0] + '\n' + rowData[0];
}



console.log(CSV_to_JSON('first name, last name\nben, deboer\ndominic, diotalevi'));  