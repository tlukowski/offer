export default interface FormData {
  name: string;
  subtitle: string;
  step: {
    question: string;
    modal?: {
      title: string;
      desc: string;
    };
    formType: 'input' | 'checkbox' | 'textarea' | 'colorPicker' | 'fileUpload';
    // Add other properties as needed
  }[];
}
