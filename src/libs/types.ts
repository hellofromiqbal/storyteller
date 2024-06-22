export type newUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type NavigationOptions = 'stories' | 'likes' | 'archived';

export type ProfileContentNavigationProps = {
  selectedNavigation: string;
  handleSelectedNavigation: (navigation: NavigationOptions) => void;
};