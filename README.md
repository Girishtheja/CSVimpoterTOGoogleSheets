

## **CSV Importer for Google Sheets**

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.


So To handle this problem I have Made a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

**Additional Features**:
- Import to Sheet – After validation and mapping,I have devised a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimized for Large Files – Large datasets are common in analytics. this CSVImpoter effectively handles large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.


## Developer's Section


*watch the demo below in the link if video not loaded:)*

[Working demo]()


# my approach is incremental and iterative:

- **Initial Data Import from Local System:**
   - I started by enabling users to import CSV data from their local system into a Google Sheets document. This is the fundamental functionality of my tool.

- **Column Selection Feature:**
   - After the initial data import was implemented, I enhanced the tool by allowing users to select specific columns from the imported CSV data. This added flexibility to the import process, enabling users to import only the data they need.

- **Append or Replace Data Options:**
   - To give users more control over how the data is merged with the existing data, I added the option to either append the new data to the existing data or replace the existing data with the new data. This customization is valuable, especially for users working with evolving datasets.

- **Sheet Selection and Creation:**
   - I included a feature that allows users to specify the target sheet for importing data. If the sheet exists, the data is imported into it. If the sheet does not exist, a new sheet is created. This feature provides users with flexibility in managing their data across multiple sheets.

- **Optimizations for Handling Large CSV Files:**
   - I implemented optimizations to handle large CSV files more efficiently. Specifically, I divided the import process into batches, which is a good practice for performance and resource management when dealing with large datasets.

- **UI Improvements:**
   - I made UI improvements to enhance the user experience, such as providing clear instructions, feedback messages, and options for the user.



### **Steps to set up the project**

### Open Google Sheets:
Make sure you have the Google Sheet where you want to add the drag-and-drop CSV importer.

## Open Script Editor:
Click on Extensions > Apps Script to open the Google Apps Script editor.
![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/b2da2405-4b4a-4182-854c-dddadecba72d)

## create New Script:
![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/a1a75af5-a791-47ee-bdbb-dceb5a6cc047)
delete the existing code and copy paste the code from "code.gs" file in the repo  and hit "ctrl+s" to save the file

## create New HTML file:
Click on the "+" icon shown in the below image to create the HTML file

![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/2066cd73-41c6-4480-a897-cc0868e8a379)
<br/>
Rename the file as "UploadCSV" and hit enter
<br/>
![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/d92beffc-d761-4678-8f68-8f6db25828bb)

![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/a74b2f15-5d5f-4251-9f15-40850eeaefa6)
<br/>
delete the existing code and copy paste the code from "UploadCSV.html" file in the repo and hit "ctrl+s" to save the file
<br/>

![image](https://github.com/StackItHQ/stackit-hiring-assignment-Girishtheja/assets/70694072/5cc4f676-e2f7-416f-9577-42fd9e6efca7)

<br/>
Run the code.gs file and authorize it 
<br/>
### [Show some ❤️ by starring some of the repositories! ](https://github.com/Girishtheja?tab=repositories)
