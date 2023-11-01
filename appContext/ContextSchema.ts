export const appContextSchema = {
  user_endpoint: "",
  clicked: true,
  setClicked: (cliked: boolean) => {},
  openExitDeleteModal: ( modal_state: boolean, modal_message: string,
    modal_text: string,
    phaseUsage: number
  ) => {},
  errorMessageF: (errorMessage: string) => {},
  openProfileModal: (modalNumber: number) => {},
  buttonNavigation: (routeToPushTo: string) => {},
  getUserDetails: () => {},
  loadingSkeleton: false,
  errorSucessBackground: "",
  setErrorSuccessBackground: (prev: string) => {},
  responseF:(message:string, color:string)=>{},
};