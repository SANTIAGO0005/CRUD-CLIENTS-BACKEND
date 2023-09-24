import Swal from "sweetalert2";

export const showNotification = (title, text, icon, showConfirmButton=false) => {
    Swal.fire({
      icon,
      title,
      text,
      showConfirmButton,
      timer: 2000
    });
  };
  export const showNotificationBL = (title, text) => {
    Swal.fire({
      title,
      text,
      showConfirmButton : true,
    });
  };

  export const showNotificationLogin = (title, text, icon, ) => {
    Swal.fire({
      icon,
      title,
      text,
      showConfirmButton: true,
    });
  };