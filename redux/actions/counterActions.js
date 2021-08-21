export const firstName = (firstname) => ({
    type: 'FIRST_NAME',
    payload: firstname,
  });
  
  export const lastName = (lastname) => ({
    type: 'LAST_NAME',
    payload: lastname,
  });

  export const phoneNumber = (phonenumber) => ({
    type: 'PHONE_NUMBER',
    payload: phonenumber,
  });
  
  export const saconderyphoneNumber = (saconderyphoneNumber) => ({
    type: 'SACONDERY_PHONE_NUMBER',
    payload: saconderyphoneNumber,
  });