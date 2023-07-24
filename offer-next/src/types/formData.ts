export default interface FormData {
  name: string;
  subtitle: string;
  step: {
    question: string;
    modal?: {
      title: string;
      desc: string;
    };
    formType: string;
    // Add other properties as needed
  }[];
}
