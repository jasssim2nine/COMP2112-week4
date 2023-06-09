class Contact 
{
    //private instances (members)
    private fullName:string;
    private contactNumber:string;
    private emailAddress:string;

    //public properties
    get FullName () : string
    {
        return this.fullName;
    }
    set FullName(name: string)
    {
        this.fullName = name;
    }

    get ContactNumber () : string
    {
        return this.contactNumber;
    }
    set ContactNumber(name: string)
    {
        this.contactNumber = name;
    }

    get EmailAddress () : string
    {
        return this.emailAddress;
    }
    set EmailAddress(name: string)
    {
        this.emailAddress = name;
    }



    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress=" unknown email address"]
     * @memberof Contact
     */
    constructor(fullName:string = "unknown name",contactNumber:string = "no contact number",
    emailAddress:string = " unknown email address")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress
    }

    //public methods
    /**
     *this method overrides  the built-in toString method for the Contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    public toString() : string
    {
        let outputString = "";

        outputString += `Full name : ${this.FullName}\n`;
        outputString += `Contact Number : ${this.ContactNumber}\n`;
        outputString += `Email Address: ${this.EmailAddress}\n`;
        return outputString;
    }
    /**
     *This method converts class data members to a comma seperated list
     compatible with JSON
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    public toJSON():string
    {
        return `${this.FullName},${this.ContactNumber},${this.emailAddress}`;
    }
    /**
     *This method reads data from comma seperated list and 
     assigns it to class data members
     *
     * @param {string} data
     * @memberof Contact
     */
    public fromJSON(data: string) : void
    {
        let stringArray: string[] = data.split(",");
        this.FullName = stringArray[0]
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }

    //private methods


}