export const appContextSchema = {
  user_endpoint: "",
  game_endpoint: "",
  play_game_endpoint: "",
  clicked: true,
  setClicked: (cliked: boolean) => {},
  openExitDeleteModal: (
    modal_state: boolean,
    modal_message: string,
    modal_text: string,
    phaseUsage: number,
    componentName: string,
    data: any
  ) => {},
  errorMessageF: (errorMessage: string) => {},
  openProfileModal: (modalNumber: number) => {},
  openCloseSideBar: (value: boolean) => {},
  buttonNavigation: (routeToPushTo: string) => {},
  getUserDetails: () => {},
  loadingSkeleton: false,
  errorSucessBackground: "",
  setErrorSuccessBackground: (prev: string) => {},
  responseF: (message: string, color: string) => {},
  loadingStageNumb:{numb:0, username:''}
};