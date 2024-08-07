
export const ConsenContent={

    ConcenTitle:"CONSEN",
    DocumentUpload:"https://s3-alpha-sig.figma.com/img/4aa7/487b/01791e58b9b94cf5aacfbeaba2cb926c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WS6i~V6z3lpJW56HVBVWye9zPzcBwe55xgldXyBMA3Fe2o8GAYV-pPhPCJgzrx08CZkS6UoOEmN67Glc7aN91WLhfFnqjBiwI-y8vAIFWd6JhjI~JK2cl8YJxhxt-zf9IW7pLnS2NeQp1-s-9-Bosu-z5uKuhkSBg9kEY~j6-tNnZX-U9eVWhm16XgSbn2SK~JUuOy47AM7oWIAqWPm6FmN2J73PhGySxMvPkkOJDZIp~8HJIstH0G-qvFNwlOwFYfV0M8hrq9u1rKJEgq4TqD9auGq7aTNRMPUTz9Wc7fLI-WV9Ia5KIFYx5PR5mE5hEdpNYwK77dzIlittiJBSzQ__",
    ConcenDescription:"CONSEN is one of the products of the AGILEWIT SOLUTIONS INC. This application reads the coulmn data provided in excel sheet and update the word document with the data provided in the excel sheet. Save the updated word document in the local directory. The updated Word documents are then converted into PDF. This PDF files are sent as a attachment to the email address provided in the excel sheet.",
    LogInTitle:"LOGIN",
    LoginArray:["Provide user name, password","Provide the SMTP/POP server name from which domain you are sending (servername: send.one.com and port number: 587(depends on the domain provider))","Make sure to check “Check label” not to repeat the details. If the details repeat close and run the application again"],
    LogInDocuments:"LOAD DOCUMENTS",
    LogInDocumentsArray:["Create two empty directories Like WORD_CREATED, PDF_FILES.","Word File: The original word file with editable merge fields in the desired positions How to add merge fields:","->Insert->Explore Quick parts->ields->MergeFields->Add a Field Name","The mergefield name should be same as Column Name in Excel.Press “Submit”","Excel File: The excel with the mergefield data Press “Submit”","Directory Path: Load the path of the Directory (WORD_CREATED, PDF_FILES) where to save the updated Documents Press “Submit”","Sheet Number: Provide the sheet number of the date","Make sure not to repeat the details","EXIT"]
}