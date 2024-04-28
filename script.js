 // JavaScript code for fetching, filtering, sorting, and pagination
 const baseURL = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';

 let currentPage = 1;
 let totalPageCount = 1;

 function fetchData() {
   const url = `${baseURL}?page=${currentPage}&limit=10`;
   fetch(url)
     .then(response => response.json())
     .then(data => {
       totalPageCount = data.totalPages;
       populateTable(data.data);
     })
     .catch(error => console.error('Error fetching data:', error));
 }

 function populateTable(data) {
   const tableBody = document.getElementById('employeeData');
   tableBody.innerHTML = '';
   data.forEach((employee, index) => {
     const row = `
       <tr>
         <td>${index + 1}</td>
         <td>${employee.name}</td>
         <td>${employee.gender}</td>
         <td>${employee.department}</td>
         <td>${employee.salary}</td>
       </tr>
     `;
     tableBody.innerHTML += row;
   });
 }

 function updatePaginationButtons() {
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   prevBtn.disabled = currentPage === 1;
   nextBtn.disabled = currentPage === totalPageCount;
 }

 function applyFiltersAndSort() {
   const departmentFilter = document.getElementById('departmentFilter').value;
   const genderFilter = document.getElementById('genderFilter').value;
   const sortBy = document.getElementById('sortBy').value;

   let url = `${baseURL}?page=${currentPage}&limit=10`;

   if (departmentFilter) url += `&filterBy=department&filterValue=${departmentFilter}`;
   if (genderFilter) url += `&filterBy=gender&filterValue=${genderFilter}`;
   if (sortBy) url += `&sort=salary&order=${sortBy}`;

   fetch(url)
     .then(response => response.json())
     .then(data => {
       totalPageCount = data.totalPages;
       populateTable(data.data);
       updatePaginationButtons();
     })
     .catch(error => console.error('Error applying filters/sort:', error));
 }

 document.getElementById('prevBtn').addEventListener('click', () => {
   if (currentPage > 1) {
     currentPage--;
     fetchData();
     updatePaginationButtons();
   }
 });

 document.getElementById('nextBtn').addEventListener('click', () => {
   if (currentPage < totalPageCount) {
     currentPage++;
     fetchData();
     updatePaginationButtons();
   }
 });

 document.getElementById('departmentFilter').addEventListener('change', applyFiltersAndSort);
 document.getElementById('genderFilter').addEventListener('change', applyFiltersAndSort);
 document.getElementById('sortBy').addEventListener('change', applyFiltersAndSort);

 // Initial data fetch
 fetchData();