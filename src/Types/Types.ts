export interface ButtonProps{ 

    title: string
    handleModal : ()=>void
}



export interface InputProps{
    label: string
    name:string
}




export interface ModalProps{

    children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;


    titleHeader: string
}


export interface TableItemProps {
id:number
    company :string
    name: string
    additional: string
    street : string
   code : string
    country: string
}


export  type FormValue = {

    company: string;
    name: string;
    additional: string;
    street: string;
    code: string;
    country: string;
    IBAN: string;
    BIC: string
    bankName: string
  };



  export type PersonDetail ={
      id:number
    company :string
    name: string
    additional: string
    street : string
    code : string
    country : string
  }
  