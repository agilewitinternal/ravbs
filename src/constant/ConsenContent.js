import uploaddocuments from '../Assets/upload-documents.gif'
export const ConsenContent={

    ConcenTitle:"CONSEN",
    DocumentUpload:uploaddocuments,
    ConcenDescription:"CONSEN is one of the products of the RAV BUSINESS STREAM. This application reads the coulmn data provided in excel sheet and update the word document with the data provided in the excel sheet. Save the updated word document in the local directory. The updated Word documents are then converted into PDF. This PDF files are sent as a attachment to the email address provided in the excel sheet.",
    LogInTitle:"LOGIN",
    LoginArray:["Provide user name, password","Provide the SMTP/POP server name from which domain you are sending (servername: send.one.com and port number: 587(depends on the domain provider))","Make sure to check “Check label” not to repeat the details. If the details repeat close and run the application again"],
    LogInDocuments:"LOAD DOCUMENTS",
    LogInDocumentsArray:["Create two empty directories Like WORD_CREATED, PDF_FILES.","Word File: The original word file with editable merge fields in the desired positions How to add merge fields:","->Insert->Explore Quick parts->ields->MergeFields->Add a Field Name","The mergefield name should be same as Column Name in Excel.Press “Submit”","Excel File: The excel with the mergefield data Press “Submit”","Directory Path: Load the path of the Directory (WORD_CREATED, PDF_FILES) where to save the updated Documents Press “Submit”","Sheet Number: Provide the sheet number of the date","Make sure not to repeat the details","EXIT"]
}